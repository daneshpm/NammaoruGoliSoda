import { useContext, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CartContext } from "../context/CartContext"
import Checkout from "./Checkout"

function Cart() {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext)
    console.log("Cart items:", cartItems)

    const [showCheckout, setShowCheckout] = useState(false)

    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.price * item.quantity), 0
    )

    // ✅ hide entire section when cart is empty — no gap
    if (cartItems.length === 0) return null

    return (
        <section id="cart" className="py-12 px-4 sm:px-6 md:px-10 bg-gray-100">

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold mb-8"
            >
                Cart
            </motion.h2>

            {/* Cart Items */}
            <AnimatePresence>
                {cartItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 bg-white shadow-lg p-5 rounded-2xl mb-5"
                    >

                        {/* Left Side */}
                        <div className="w-full">
                            <h3 className="text-xl sm:text-2xl font-bold">{item.name}</h3>
                            <p className="text-green-600 font-semibold mt-1">₹ {item.price}</p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-4 mt-4">
                                <motion.button
                                    whileTap={{ scale: 0.85 }}
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                                >
                                    -
                                </motion.button>

                                <motion.span
                                    key={item.quantity}
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="font-bold text-lg"
                                >
                                    {item.quantity}
                                </motion.span>

                                <motion.button
                                    whileTap={{ scale: 0.85 }}
                                    onClick={() => increaseQuantity(item.id)}
                                    className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                                >
                                    +
                                </motion.button>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col items-start sm:items-end gap-4 w-full sm:w-auto">
                            <motion.p
                                key={item.quantity}
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-lg font-bold"
                            >
                                ₹ {item.price * item.quantity}
                            </motion.p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => removeFromCart(item.id)}
                                className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition w-full sm:w-auto"
                            >
                                Remove
                            </motion.button>
                        </div>

                    </motion.div>
                ))}
            </AnimatePresence>

            {/* Total + Proceed Button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 bg-white shadow-lg rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
            >
                <motion.h3
                    key={totalPrice}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="text-2xl sm:text-3xl font-bold"
                >
                    Total: ₹ {totalPrice}
                </motion.h3>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCheckout(true)}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition w-full sm:w-auto font-bold"
                >
                    Proceed To Checkout
                </motion.button>
            </motion.div>

            {/* ✅ Checkout slides in below */}
            <AnimatePresence>
                {showCheckout && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                        className="mt-10"
                    >
                        <Checkout />
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}

export default Cart