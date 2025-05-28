"use client";
import { FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaBolt, FaDownload, FaLock } from "react-icons/fa";

const WhySection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const BACKGROUND_OPACITY = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const OFFERS = [
    {
      icon: <FaBolt className="text-black text-3xl" />,
      title: "Innovation",
      description:
        "Fresh takes on presentation and organization for rapid mastery.",
    },
    {
      icon: <FaDownload className="text-black text-3xl" />,
      title: "Offline-First",
      description:
        "All content ships complete—learn anywhere, no network needed.",
    },
    {
      icon: <FaLock className="text-black text-3xl" />,
      title: "Perfect Privacy",
      description:
        "We collect nothing, show no ads, and never interrupt your focus.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic bezier for smoother motion
      },
    },
  };

  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const lineDrawing = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.2, ease: "easeInOut" },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-white relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ opacity: BACKGROUND_OPACITY }}
      >
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#f9f9f9] rounded-full -mt-32 -mr-32 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#f9f9f9] rounded-full -mb-48 -ml-48 z-0"></div>
        <svg
          className="absolute w-full h-full top-0 left-0 z-0 opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            stroke="#000"
            strokeWidth="0.2"
            fill="none"
            variants={lineDrawing}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.path
            d="M25,0 L25,100"
            stroke="#000"
            strokeWidth="0.05"
            fill="none"
            variants={lineDrawing}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.path
            d="M50,0 L50,100"
            stroke="#000"
            strokeWidth="0.05"
            fill="none"
            variants={lineDrawing}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          <motion.path
            d="M75,0 L75,100"
            stroke="#000"
            strokeWidth="0.05"
            fill="none"
            variants={lineDrawing}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <div className="relative inline-block mb-3">
            <motion.span
              className="text-xs uppercase tracking-[0.2em] font-medium text-gray-400 relative inline-block"
              variants={textReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              What we offer
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-px bg-gray-200"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
            </motion.span>
          </div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-5 tracking-tight"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Corpora?
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            variants={textReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We empower individuals to take charge of their learning journey. Our
            commitment to quality and accessibility ensures that everyone can
            benefit from our offerings.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {OFFERS.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.07)] transition-all duration-500 flex flex-col h-full relative"
              whileHover={{
                y: -8,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-0"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div className="p-10 flex flex-col items-center text-center flex-grow">
                <motion.div
                  className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-8 relative"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-black opacity-0"
                    whileHover={{
                      opacity: 0.03,
                      scale: 1.2,
                      transition: { duration: 0.4 },
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-black opacity-0"
                    whileHover={{
                      opacity: 0.08,
                      scale: 1.15,
                      transition: { duration: 0.4, delay: 0.05 },
                    }}
                  />
                  {card.icon}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <h3 className="text-xl font-bold mb-1 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{
                    scale: 0.97,
                    transition: { duration: 0.2 },
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative elements */}
        <div className="relative mt-28 mb-8">
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-transparent via-black to-transparent mx-auto"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <motion.div
            className="w-2 h-2 rounded-full bg-black mx-auto -mt-1 opacity-20"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />

          <motion.div
            className="text-xs text-gray-400 text-center mt-6 tracking-widest uppercase"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            Corpora
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
