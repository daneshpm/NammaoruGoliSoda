import { useEffect, useState, useContext }
from "react"

import api from "../services/api"

import {
    CartContext
} from "../context/CartContext"

function Products() {

    const [products, setProducts] =
        useState([])

    const { addToCart } =
        useContext(CartContext)

    useEffect(() => {

        fetchProducts()

    }, [])

    const fetchProducts = async () => {

        try {

            console.log("Fetching products...")

            const response =
                await api.get("/products")

            console.log("FULL RESPONSE:")
            console.log(response)

            console.log("DATA:")
            console.log(response.data)

            console.log(
                Array.isArray(response.data)
            )

            console.log(
                response.data.length
            )

            setProducts(response.data)

        } catch(error) {

            console.log("ERROR:")
            console.log(error)

            console.log(error.response)

            console.log(error.message)
        }
    }

    return (

        <section
            id="products"
            className="py-20 px-10 bg-gray-100">

            <h2
                className="text-4xl font-bold text-center mb-12">

                Our Products

            </h2>

            <div
                className="grid md:grid-cols-3 gap-8">

                {
                    products.map(product => (

                        <div
                            key={product.id}
                            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

                            <img
                                src={`http://localhost:8080${product.imageUrl}`}
                                alt={product.name}
                                className="w-full h-56 object-cover rounded-xl mb-4"
                            />

                            <h3
                                className="text-2xl font-bold mb-2">

                                {product.name}

                            </h3>

                            <p className="mb-3">

                                {product.description}

                            </p>

                            <p
                                className="text-green-600 font-bold">

                                ₹ {product.price}

                            </p>

                            <p
                                className="text-sm text-gray-500 mt-2">

                                Flavor:
                                {" "}
                                {product.flavor}

                            </p>

                            <button
                                onClick={() =>
                                    addToCart(product)
                                }
                                className="mt-4 w-full bg-green-600 text-white px-5 py-3 rounded-xl hover:bg-green-700 transition font-bold">

                                Add To Cart

                            </button>

                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Products