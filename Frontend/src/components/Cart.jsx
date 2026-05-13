import { useContext } from "react"
import { CartContext }
from "../context/CartContext"

function Cart() {

    const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
}= useContext(CartContext)
    const totalPrice =
    cartItems.reduce(

        (total, item) =>

            total +
            (item.price * item.quantity),

        0
    )
    return (

        <section className="p-10">

            <h2 className="text-4xl font-bold mb-8">

                Cart

            </h2>

            {
                cartItems.length === 0

                ? (
                    <p>
                        Cart is empty
                    </p>
                )

                : (

                    cartItems.map(item => (

                        <div
                            key={item.id}
                            className="flex justify-between items-center bg-white shadow-lg p-5 rounded-2xl mb-4 hover:shadow-xl transition">

                            <div>

                                <h3 className="text-xl font-bold">

                                    {item.name}

                                </h3>

                               <div className="flex items-center gap-4 mt-2">

    <button
        onClick={() =>
            decreaseQuantity(item.id)
        }
        className="bg-gray-300 px-3 py-1 rounded-lg">

        -

    </button>

    <span className="font-bold">

        {item.quantity}

    </span>

    <button
        onClick={() =>
            increaseQuantity(item.id)
        }
        className="bg-gray-300 px-3 py-1 rounded-lg">

        +

    </button>

</div>

                            </div>

                            <button
                                onClick={() =>
                                    removeFromCart(item.id)
                                }
                                className="bg-red-500 text-white px-4 py-2 rounded-lg">

                                Remove

                            </button>

                        </div>
                    ))
                    
                )
                
            }
            <h3 className="text-2xl font-bold mt-8">

             Total:
             ₹ {totalPrice}

              </h3>

        </section>
    )
}

export default Cart