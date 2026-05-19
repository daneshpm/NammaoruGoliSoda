import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function Navbar() {

    const { cartItems } = useContext(CartContext)
    const [menuOpen, setMenuOpen] = useState(false)
    const [visible, setVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const navigate = useNavigate()

    const totalItems = cartItems.reduce(
        (sum, item) => sum + item.quantity, 0
    )

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setVisible(true)
            } else {
                setVisible(false)
            }
            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    const scrollToCart = () => {
        document.getElementById("cart")?.scrollIntoView({ behavior: "smooth" })
    }

    const navLinks = ["home", "products", "about", "contact"]

    return (

        <motion.nav
            animate={{ y: visible ? 0 : -100 }}
            transition={{ duration: 0.3 }}
            className="
                flex justify-between items-center
                px-4 sm:px-6 md:px-10
                py-4
                bg-white shadow-md
                sticky top-0 z-50
            "
        >

            {/* Logo */}
            <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-2xl sm:text-3xl font-bold text-green-600 cursor-pointer"
                onClick={() => navigate("/")}
            >
                Goli Soda
            </motion.h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-medium">
                {navLinks.map((link, index) => (
                    <motion.a
                        key={link}
                        href={`#${link}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        whileHover={{ scale: 1.1, color: "#16a34a" }}
                        className="hover:text-green-600 transition capitalize"
                    >
                        {link}
                    </motion.a>
                ))}

                {/* Desktop Cart */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                    onClick={scrollToCart}
                    className="relative cursor-pointer"
                >
                    <span className="text-2xl">🛒</span>
                    <motion.span
                        key={totalItems}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="
                            absolute -top-2 -right-3
                            bg-green-600 text-white
                            text-xs px-2 py-1 rounded-full
                        "
                    >
                        {totalItems}
                    </motion.span>
                </motion.div>
            </div>

            {/* ✅ Mobile — cart + hamburger always visible, outside menu */}
            <div className="md:hidden flex items-center gap-4">

                {/* Mobile Cart */}
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    onClick={scrollToCart}
                    className="relative cursor-pointer"
                >
                    <span className="text-2xl">🛒</span>
                    <motion.span
                        key={totalItems}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="
                            absolute -top-2 -right-3
                            bg-green-600 text-white
                            text-xs px-2 py-1 rounded-full
                        "
                    >
                        {totalItems}
                    </motion.span>
                </motion.div>

                {/* Hamburger */}
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="flex flex-col justify-center items-center gap-1 w-10 h-10"
                >
                    <span className={`block h-1 w-7 bg-black rounded transition duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block h-1 w-7 bg-black rounded transition duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                    <span className={`block h-1 w-7 bg-black rounded transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </motion.button>

            </div>

            {/* Mobile Menu — only nav links, no cart here */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="
                            absolute top-20 left-0
                            w-full bg-white shadow-lg
                            flex flex-col items-center gap-6
                            py-6 md:hidden
                        "
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link}
                                href={`#${link}`}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.05 * index }}
                                whileHover={{ scale: 1.1, color: "#16a34a" }}
                                onClick={() => setMenuOpen(false)}
                                className="capitalize font-medium hover:text-green-600 transition"
                            >
                                {link}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.nav>
    )
}

export default Navbar