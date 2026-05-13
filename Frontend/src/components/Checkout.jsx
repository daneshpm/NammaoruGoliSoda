import { useContext, useState }
from "react"
import toast
from "react-hot-toast"
import api from "../services/api"

import {
    CartContext
} from "../context/CartContext"

function Checkout() {

    const { cartItems } =
        useContext(CartContext)

    const [formData, setFormData] =
        useState({

            shopName: "",
            ownerName: "",
            phone: "",
            location: ""
        })

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
            e.target.value
        })
    }

    const placeOrder = async () => {

        try {

            const orderData = {

                shopName:
                    formData.shopName,

                ownerName:
                    formData.ownerName,

                phone:
                    formData.phone,

                location:
                    formData.location,

                items:
                    cartItems.map(item => ({

                        productId: item.id,

                        quantity: item.quantity
                    }))
            }

            const response =
                await api.post(
                    "/orders",
                    orderData
                )
            toast.success(
    "Order Placed Successfully"
)
            window.location.href =
                response.data.whatsappUrl

        } catch(error) {

            console.error(error)
        }
    }

    return (

        <section
            className="p-10 bg-gray-100">

            <h2 className="text-4xl font-bold mb-8">

                Checkout

            </h2>

            <div className="grid gap-4 max-w-xl">

                <input
                    type="text"
                    name="shopName"
                    placeholder="Shop Name"
                    onChange={handleChange}
                    className="p-3 rounded-lg border"
                />

                <input
                    type="text"
                    name="ownerName"
                    placeholder="Owner Name"
                    onChange={handleChange}
                    className="p-3 rounded-lg border"
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    className="p-3 rounded-lg border"
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                    className="p-3 rounded-lg border"
                />

                <button
                    onClick={placeOrder}
                    className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">

                    Place Order

                </button>

            </div>

        </section>
    )
}

export default Checkout