function Hero() {

    return (

        <section
            id="home"
            className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-400 to-lime-300">

            <h1 className="text-6xl font-bold text-white mb-6">

                Authentic Goli Soda

            </h1>

            <p className="text-xl text-white max-w-2xl">

                Refreshing traditional soda for shops,
                restaurants, and bulk orders.

            </p>

            <button
                className="mt-8 bg-white text-green-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition">

                Order Now

            </button>

        </section>
    )
}

export default Hero