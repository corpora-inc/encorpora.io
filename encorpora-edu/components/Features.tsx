import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaBook,
  FaLaptop,
  FaMobileAlt,
  FaLightbulb,
  FaShieldAlt,
  FaLock,
  FaWifi,
  FaUserSecret,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Features: FC = () => {
  const features = [
    {
      icon: <FaBook className="text-black text-3xl mb-4" />,
      title: "Rich educational materials",
      description:
        "Access our extensive library of high-quality educational resources.",
    },
    {
      icon: <FaWifi className="text-black text-3xl mb-4" />,
      title: "100% offline access",
      description:
        "All features work completely offline - no internet connection required.",
    },
    {
      icon: <FaUserSecret className="text-black text-3xl mb-4" />,
      title: "Zero data collection",
      description:
        "We never collect your personal data. Your privacy is our top priority.",
    },
    {
      icon: <FaLightbulb className="text-black text-3xl mb-4" />,
      title: "Fully open source",
      description: "Join us in building something big for humanity.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <FaShieldAlt className="text-black text-xl mt-1 flex-shrink-0" />,
      title: "Enhanced privacy protection",
      description:
        "All processing happens locally on your device. Your data never leaves your control.",
    },
    {
      icon: <FaLock className="text-black text-xl mt-1 flex-shrink-0" />,
      title: "Secure by design",
      description:
        "Built with a privacy-first approach - no tracking, no analytics, no compromises.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="features" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Privacy-focused banner */}
        <motion.div
          className="bg-gray-50 rounded-lg p-6 md:p-8 mb-16 border-l-4 border-black shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-black text-white p-4 rounded-full">
              <FaShieldAlt className="text-xl" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1">
                Privacy focused learning apps
              </h3>
              <p className="text-gray-600">
                Our commitment to privacy is uncompromising. We don't collect
                your data, track your activity, or require internet connection.
                Your educational journey stays completely private.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-16 text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Powerful features without privacy trade-offs
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-56">
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-gray-50 p-6 md:p-8 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="md:col-span-2 mb-4">
            <h3 className="text-xl font-bold mb-2 text-black">
              Our privacy guarantee
            </h3>
            <p className="text-gray-600">
              Unlike most educational organizations, we believe your learning
              data belongs to you alone.
            </p>
          </div>

          {additionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex p-4 bg-white rounded-lg items-start gap-4 border-l-2 border-black"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {feature.icon}
              <div>
                <h4 className="font-medium mb-1 text-black">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
