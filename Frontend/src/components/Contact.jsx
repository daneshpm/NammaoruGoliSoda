import { motion } from "framer-motion"

function Contact() {

    return (

        <section
            id="contact"
            className="py-20 px-10 text-center"
        >

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
            >
                Contact Us
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-lg cursor-default"
            >
                📞 +91 9876543210
            </motion.p>

            <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-lg mt-2 cursor-default"
            >
                📍 Bangalore, India
            </motion.p>

        </section>
    )
}

export default Contact