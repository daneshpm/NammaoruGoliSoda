import { motion } from "framer-motion"

function About() {

    return (

        <section
            id="about"
            className="py-20 px-10 bg-gray-100 text-center"
        >

            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
            >
                About Us
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-lg"
            >
                We manufacture authentic traditional
                Goli Soda using quality ingredients and
                deliver across local shops and businesses.
            </motion.p>

        </section>
    )
}

export default About