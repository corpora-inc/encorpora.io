// app/components/Features.tsx
"use client";
import { FC } from "react";
import { FaBookOpen, FaGithub, FaLock, FaPlug, FaBan, FaCloud } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURES = [
  {
    icon: <FaGithub className="text-black text-2xl mb-3" />,
    title: "Open Source Everything",
    description: (
      <>
        All our code, tools, and content pipelines are fully open source.
        <br />
        <Link href="https://github.com/orgs/corpora-inc/repositories" target="_blank" className="underline text-gray-500 hover:text-black">
          Build with us on GitHub
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaLock className="text-black text-2xl mb-3" />,
    title: "Real Privacy",
    description: (
      <>
        We never show ads or collect your data. Most apps need zero permissions and work offline. See our{" "}
        <Link href="/privacy" className="underline text-gray-500 hover:text-black">
          privacy policy
        </Link>
        .
      </>
    ),
  },
  {
    icon: <FaPlug className="text-black text-2xl mb-3" />,
    title: "Minimal Permissions",
    description: "We keep permissions to a bare minimum – most apps require none. Your data always stays on your device.",
  },
  {
    icon: <FaCloud className="text-black text-2xl mb-3" />,
    title: "Offline-First (When Possible)",
    description: "No forced logins or connections. Most features work offline – and we always tell you if something needs a network.",
  },
  {
    icon: <FaBan className="text-black text-2xl mb-3" />,
    title: "No Ads. No Surveillance.",
    description: "No analytics, no tracking, no engagement junk. We only make money if you buy a finished book or app.",
  },
  {
    icon: <FaBookOpen className="text-black text-2xl mb-3" />,
    title: "Transparent & Community-Driven",
    description: (
      <>
        Every change is public, and every app or book is improved based on real user feedback.
        <br />
        <span className="text-gray-500">Contact: </span>
        <Link href="mailto:hello@encorpora.io" className="underline text-gray-500 hover:text-black">
          team@encorpora.io
        </Link>
      </>
    ),
  },
];

const Features: FC = () => (
  <section id="features" className="py-20 px-4 bg-white">
    <div className="max-w-5xl xl:max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
          Open, Honest, and Built to Last
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Everything we make is open source and future-proof. No ads. No data grabs. Minimal permissions. Designed for your trust.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {FEATURES.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-gray-50 border border-gray-200 rounded-2xl px-7 py-8 text-center shadow-sm flex flex-col items-center"
          >
            {icon}
            <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
            <div className="text-gray-600 text-base">{description}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Features;
