import { motion } from "framer-motion"
import golisoda from "../assets/golisoda.png"


function Hero() {

    return (

        <section
            id="home"

            className="
            min-h-screen

            flex flex-col-reverse
            lg:flex-row

            items-center
            justify-between

            px-6 sm:px-10 lg:px-20
            py-16 lg:py-0

            bg-gradient-to-br
            from-green-50
            via-white
            to-green-100

            overflow-hidden
        ">

            {/* LEFT CONTENT */}

            <div
                className="
                flex-1
                text-center lg:text-left
                mt-12 lg:mt-0
            ">

                {/* Small Tag */}

                <motion.p

                    initial={{
                        opacity: 0,
                        y: -20
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 0.6
                    }}

                    className="
                    inline-block

                    bg-green-100
                    text-green-700

                    px-4 py-2
                    rounded-full

                    text-sm
                    font-semibold

                    mb-6
                ">

                    🥤 Traditional Taste • Modern Refreshment

                </motion.p>

                {/* Main Heading */}

                <motion.h1

                    initial={{
                        opacity: 0,
                        x: -100
                    }}

                    animate={{
                        opacity: 1,
                        x: 0
                    }}

                    transition={{
                        duration: 0.8
                    }}

                    className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl

                    font-extrabold

                    leading-tight
                ">

                    Refresh Your Day
                    With

                    <span className="text-green-600">

                        {" "}
                        Goli Soda

                    </span>

                </motion.h1>

                {/* Description */}

                <motion.p

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: 0.3,
                        duration: 0.8
                    }}

                    className="
                    mt-6

                    text-gray-600

                    text-base sm:text-lg md:text-xl

                    max-w-2xl

                    mx-auto lg:mx-0
                ">

                    Experience the authentic burst of
                    traditional Indian flavors with every sip.
                    Fresh. Fizzy. Nostalgic.

                </motion.p>

                {/* Buttons */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 30
                    }}

                    animate={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        delay: 0.5,
                        duration: 0.8
                    }}

                    className="
                    flex flex-col sm:flex-row
                    gap-4

                    justify-center lg:justify-start

                    mt-10
                ">

                    <motion.a

                        whileHover={{
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: 0.95
                        }}

                        href="#products"

                        className="
                        bg-green-600
                        text-white

                        px-8 py-4
                        rounded-2xl

                        font-bold

                        shadow-lg

                        hover:bg-green-700
                        transition
                    ">

                        Order Now

                    </motion.a>

                    <motion.a

                        whileHover={{
                            scale: 1.05
                        }}

                        whileTap={{
                            scale: 0.95
                        }}

                        href="#about"

                        className="
                        border-2
                        border-green-600

                        text-green-600

                        px-8 py-4
                        rounded-2xl

                        font-bold

                        hover:bg-green-600
                        hover:text-white

                        transition
                    ">

                        Learn More

                    </motion.a>

                </motion.div>

            </div>

            {/* RIGHT IMAGE */}

            <motion.div

                initial={{
                    opacity: 0,
                    scale: 0.8
                }}

                animate={{
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1
                }}

                className="
                flex-1

                flex
                justify-center
                items-center
            ">

                <motion.img

                    animate={{
                        y: [0, -15, 0]
                    }}

                    transition={{
                        duration: 3,
                        repeat: Infinity
                    }}

                    src={golisoda}

                    alt="Goli Soda"

                    className="
                    w-[280px]
                    sm:w-[380px]
                    lg:w-[500px]

                    drop-shadow-2xl
                "
                />

            </motion.div>

        </section>
    )
}

export default Hero

