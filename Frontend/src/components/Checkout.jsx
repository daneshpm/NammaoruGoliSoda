import { useContext, useState } from "react"
import { motion } from "framer-motion"
import toast from "react-hot-toast"
import api from "../services/api"
import { CartContext } from "../context/CartContext"

function Checkout() {

    const { cartItems } = useContext(CartContext)

    const [formData, setFormData] = useState({
        shopName: "",
        ownerName: "",
        phone: "",
        location: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const placeOrder = async () => {
        try {
            const orderData = {
                shopName: formData.shopName,
                ownerName: formData.ownerName,
                phone: formData.phone,
                location: formData.location,
                items: cartItems.map(item => ({
                    productId: item.id,
                    quantity: item.quantity
                }))
            }

            const response = await api.post("/orders", orderData)
            toast.success("Order Placed Successfully")
            window.location.href = response.data.whatsappUrl

        } catch(error) {
            console.error(error)
        }
    }

    const fields = [
        { name: "shopName", placeholder: "Shop Name" },
        { name: "ownerName", placeholder: "Owner Name" },
        { name: "phone", placeholder: "Phone Number" },
        { name: "location", placeholder: "Location" },
    ]

    return (

        <section className="p-10 bg-gray-100 min-h-screen">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-8"
            >
                Checkout
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid gap-4 max-w-xl"
            >

                {fields.map((field, index) => (
                    <motion.input
                        key={field.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        whileFocus={{ scale: 1.02, borderColor: "#16a34a" }}
                        type="text"
                        name={field.name}
                        placeholder={field.placeholder}
                        onChange={handleChange}
                        className="p-3 rounded-lg border outline-none focus:ring-2 focus:ring-green-500"
                    />
                ))}

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={placeOrder}
                    className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-bold"
                >
                    Place Order
                </motion.button>

            </motion.div>

        </section>
    )
}

export default Checkout