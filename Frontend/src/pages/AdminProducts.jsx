import { useEffect, useState }
from "react"

import api from "../services/api"

function AdminProducts() {

    const [products, setProducts] =
        useState([])

    const [image, setImage] =
        useState(null)

    const [formData, setFormData] =
        useState({

            name: "",
            description: "",
            flavor: "",
            price: "",
            imageUrl: ""
        })

    useEffect(() => {

        fetchProducts()

    }, [])

    const fetchProducts = async () => {

        try {

            const response =
                await api.get("/products")

            setProducts(response.data)

        } catch(error) {

            console.error(error)
        }
    }

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value
        })
    }

    const addProduct = async () => {

        try {

            let imageUrl = ""

            // IMAGE UPLOAD

            if(image) {

                const uploadData =
                    new FormData()

                uploadData.append(
                    "file",
                    image
                )

                const uploadResponse =
                    await api.post(

                        "/products/upload",

                        uploadData,

                        {
                            headers: {
                                "Content-Type":
                                "multipart/form-data"
                            }
                        }
                    )

                imageUrl =
                    uploadResponse.data
            }

            // SAVE PRODUCT

            await api.post("/products", {

                ...formData,

                imageUrl
            })

            fetchProducts()

            setFormData({

                name: "",
                description: "",
                flavor: "",
                price: "",
                imageUrl: ""
            })

            setImage(null)

        } catch(error) {

            console.error(error)
        }
    }

    const deleteProduct =
        async (id) => {

        try {

            await api.delete(
                `/products/${id}`
            )

            fetchProducts()

        } catch(error) {

            console.error(error)
        }
    }

    return (

        <div className="p-6 md:p-10 bg-gray-100 min-h-screen">

            <h1
                className="
                text-3xl md:text-4xl
                font-bold
                mb-10
            ">

                Product Management

            </h1>

            {/* FORM */}

            <div
                className="
                bg-white
                p-8
                rounded-2xl
                shadow-xl
                mb-10
                grid gap-5
                max-w-xl
            ">

                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="
                    p-4
                    border
                    rounded-xl
                "
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="
                    p-4
                    border
                    rounded-xl
                "
                />

                <input
                    type="text"
                    name="flavor"
                    placeholder="Flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    className="
                    p-4
                    border
                    rounded-xl
                "
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="
                    p-4
                    border
                    rounded-xl
                "
                />

{/* CUSTOM IMAGE UPLOAD */}

<label
    className="
    border-2
    border-dashed
    border-green-400

    rounded-2xl

    p-6

    flex
    flex-col
    items-center
    justify-center

    cursor-pointer

    hover:bg-green-50
    hover:border-green-600

    transition
    duration-300
">

    <input
        type="file"

        accept="image/*"

        onChange={(e) =>
            setImage(
                e.target.files[0]
            )
        }

        className="hidden"
    />

    <div className="text-5xl mb-3">

        📸

    </div>

    <p
        className="
        text-lg
        font-semibold
        text-gray-700
    ">

        Click to Upload Product Image

    </p>

    <p
        className="
        text-sm
        text-gray-500
        mt-1
    ">

        PNG, JPG, JPEG

    </p>

    {

        image && (

            <p
                className="
                mt-4
                text-green-600
                font-bold
                text-center
            ">

                {image.name}

            </p>
        )
    }

</label>

{/* IMAGE PREVIEW */}

{
    image && (

        <img
            src={URL.createObjectURL(image)}

            alt="Preview"

            className="
            h-52
            w-full

            object-cover

            rounded-2xl

            shadow-lg
        "
        />
    )
}



                <button
                    onClick={addProduct}

                    className="
                    bg-green-600
                    text-white

                    py-4
                    rounded-xl

                    hover:bg-green-700

                    transition
                    duration-300

                    active:scale-95
                ">

                    Add Product

                </button>

            </div>

            {/* PRODUCTS */}

            <div
                className="
                grid

                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4

                gap-6
            ">

                {
                    products.map(product => (

                        <div
                            key={product.id}

                            className="
                            bg-white
                            p-5
                            rounded-2xl
                            shadow-xl

                            hover:shadow-2xl
                            hover:-translate-y-2

                            transition
                            duration-300
                        ">

                        
<img

    src={
        product.imageUrl?.startsWith("/uploads")

        ? `https://zonate-filomena-nonfeasible.ngrok-free.dev${product.imageUrl}`

        : product.imageUrl
    }

    alt={product.name}

    className="
    w-full
    h-56
    object-cover
    rounded-xl
"
    
    onError={(e) => {

        e.target.src =
        "https://placehold.co/400x300?text=No+Image"
    }}
/>



                            <h2
                                className="
                                text-xl
                                font-bold
                            ">

                                {product.name}

                            </h2>

                            <p
                                className="
                                mt-2
                                text-gray-600
                            ">

                                {product.description}

                            </p>

                            <p
                                className="
                                mt-2
                                text-sm
                                text-gray-500
                            ">

                                Flavor:
                                {" "}
                                {product.flavor}

                            </p>

                            <p
                                className="
                                mt-3
                                font-bold
                                text-green-600
                                text-lg
                            ">

                                ₹ {product.price}

                            </p>

                            <button
                                onClick={() =>
                                    deleteProduct(product.id)
                                }

                                className="
                                mt-5

                                bg-red-500
                                text-white

                                px-5 py-2
                                rounded-lg

                                hover:bg-red-600

                                transition
                                duration-300

                                active:scale-95
                            ">

                                Delete

                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

export default AdminProducts

