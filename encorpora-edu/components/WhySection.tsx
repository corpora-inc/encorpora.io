// app/components/WhySection.tsx
"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBolt, FaTachometerAlt, FaHeart } from "react-icons/fa";

const OFFERS = [
  {
    icon: <FaTachometerAlt className="text-3xl text-black" />,
    title: "Speed",
    description: "Finish lessons, chapters, or drills in record time - without sacrificing depth or clarity.",
    href: "https://github.com/orgs/corpora-inc/repositories",
  },
  {
    icon: <FaBolt className="text-3xl text-black" />,
    title: "Focus",
    description: "No clutter, no distractions, no cognitive overhead. Every detail engineered for pure, productive learning.",
    href: "/#apps", // Maybe a section on your homepage about your best apps
  },
  {
    icon: <FaHeart className="text-3xl text-black" />,
    title: "Respect",
    description: "No ads. No tracking. No surveillance. We value your trust - and your time - above all.",
    href: "/privacy",
  },
];

const WhySection: FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        {/* If you want a micro-accent bar above, uncomment below */}
        {/* <div className="mx-auto mb-4 h-1 w-12 bg-gray-300 rounded" /> */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-5">
          Why Corpora?
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Built for speed. Designed for focus. Grounded in respect.<br />
          That's why learners choose Corpora.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {OFFERS.map(({ icon, title, description, href }, idx) => (
          <Link
            key={title}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="
              group block bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200 rounded-2xl px-8 py-12 text-center cursor-pointer shadow-sm
              focus:outline-none focus-visible:ring-2 focus-visible:ring-black
            "
            style={{ textDecoration: "none" }}
          >
            <div className="flex flex-col items-center">
              <span className="mb-6 flex items-center justify-center w-16 h-16 bg-white border border-gray-200 rounded-full transition group-hover:shadow-md">
                {icon}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
              <span className="block mt-5 text-sm font-semibold text-gray-400 group-hover:text-black transition">
                {href === "/privacy" ? "Learn More" : "Explore"}
                <span className="ml-2 align-middle">&#8594;</span>
              </span>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhySection;
