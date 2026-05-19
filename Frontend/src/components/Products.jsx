import { useEffect, useState, useContext } from "react"
import api from "../services/api"
import { CartContext } from "../context/CartContext"
import noImage from "../assets/no-image.jpg"
import Loader from "./Loader"
import { motion } from "framer-motion"

function Products() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        try {
            console.log("Fetching products...")
            const response = await api.get("/products")
            console.log(response.data)
            setProducts(response.data)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (

        <section
            id="products"
            className="
                py-12 sm:py-16 md:py-20
                px-4 sm:px-6 md:px-10
                bg-gray-100
            "
        >

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
            >
                Our Products
            </motion.h2>

            {/* Loading */}
            {loading && <Loader />}

            {/* Empty */}
            {!loading && products.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-xl"
                >
                    No products available
                </motion.div>
            )}

            {/* Product Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">

                {products.map((product, index) => (

                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col"
                    >

                        {/* Product Image */}
                        <div className="overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                src={`https://zonate-filomena-nonfeasible.ngrok-free.dev${product.imageUrl}`}
                                alt={product.name}
                                className="w-full h-36 sm:h-48 md:h-56 object-cover"
                                onError={(e) => { e.target.src = noImage }}
                            />
                        </div>

                        {/* Product Content */}
                        <div className="p-3 sm:p-5 flex flex-col flex-1">

                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-sm sm:text-xl font-bold mb-1 line-clamp-1"
                            >
                                {product.name}
                            </motion.h3>

                            <p className="text-gray-600 mb-3 text-xs sm:text-sm line-clamp-2">
                                {product.description}
                            </p>

                            <div className="flex justify-between items-center mb-3">

                                <motion.p
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-green-600 text-sm sm:text-lg font-bold"
                                >
                                    ₹ {product.price}
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full line-clamp-1"
                                >
                                    {product.flavor}
                                </motion.p>

                            </div>

                            {/* Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => addToCart(product)}
                                className="
                                    w-full mt-auto
                                    bg-green-600 text-white
                                    px-3 py-2 rounded-xl
                                    hover:bg-green-700
                                    transition font-bold
                                    text-xs sm:text-base
                                "
                            >
                                Add To Cart
                            </motion.button>

                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    )
}

export default Products