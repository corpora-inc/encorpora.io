import { FC } from 'react';
import { FaHandshake, FaBook, FaLaptop, FaGraduationCap, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: "Custom Books",
    description: "Educational materials tailored specifically to your curriculum and learning objectives.",
    icon: <FaBook className="text-white text-lg" />
  },
  {
    title: "Learning Solutions",
    description: "Dynamic and interactive learning experiences that adapt to individual needs.",
    icon: <FaLaptop className="text-white text-lg" />
  },
  {
    title: "Software Development",
    description: "Custom software development tailored to your specific needs.",
    icon: <FaGraduationCap className="text-white text-lg" />
  }

]

const ContactSection: FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-black mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 200,
              duration: 0.8
            }}
          >
            <FaHandshake className="text-white text-2xl" />
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Consulting & Partnerships
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl font-medium mb-4">
              We offer <span className="font-bold">custom books, dynamic learning solutions, and tailored software development</span>.
            </p>
            <p className="text-gray-600 mb-12">
              Whether you're looking for a partnership in education technology or a fully customized learning experience, we can build something amazing together.
            </p>
          </motion.div>

          {/* Services grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.5,
              staggerChildren: 0.1
            }}
          >

            {SERVICES.map(({ title, description, icon }) => (
              <motion.div
                className="cursor-pointer p-8 border-2 border-black rounded-2xl relative transition-all duration-300 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-2 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-black -mt-4 -mr-4 flex items-center justify-center rounded-full">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600">
                  {description}
                </p>
              </motion.div>
            ))}

          </motion.div>

          {/* Contact information */}
          <motion.div
            className="inline-flex flex-col sm:flex-row gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <motion.a
              href="mailto:team@encorpora.io"
              className="group flex items-center gap-3 text-lg font-medium relative overflow-hidden px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-black/5 rounded-lg transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></span>
              <FaEnvelope className="relative z-10" />
              <span className="relative z-10">team@encorpora.io</span>
            </motion.a>

            <motion.a
              href="tel:+17703765331"
              className="group flex items-center gap-3 text-lg font-medium relative overflow-hidden px-6 py-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-black/5 rounded-lg transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-300"></span>
              <FaPhone className="relative z-10" />
              <span className="relative z-10">770-376-5331</span>
            </motion.a>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default ContactSection;
