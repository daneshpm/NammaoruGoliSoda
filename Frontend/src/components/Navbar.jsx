import { useContext }
from "react"

import {
    CartContext
} from "../context/CartContext"

function Navbar() {

    const { cartItems } =
        useContext(CartContext)

    const totalItems =
        cartItems.reduce(
            (sum, item) =>
                sum + item.quantity,
            0
        )

    return (

        <nav className="flex justify-between items-center px-8 py-5 bg-white shadow-md sticky top-0 z-50">

            <h1 className="text-2xl font-bold text-green-600">

                Goli Soda

            </h1>

            <div className="flex items-center gap-6 font-medium">

                <a href="#home">Home</a>

                <a href="#products">Products</a>

                <a href="#about">About</a>

                <a href="#contact">Contact</a>

                <div className="relative">

                    🛒

                    <span
                        className="absolute -top-3 -right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">

                        {totalItems}

                    </span>

                </div>

            </div>

        </nav>
    )
}

export default Navbar