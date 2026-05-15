import { motion } from "framer-motion"

function Footer() {

    return (

        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black text-white text-center py-6"
        >
            © 2026 Goli Soda. All Rights Reserved.
        </motion.footer>
    )
}

export default Footer