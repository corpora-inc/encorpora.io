// app/components/Hero.tsx
"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero: FC = () => (
    <motion.section
        className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}           // typo fixed here
        transition={{ duration: 1, ease: "easeOut" }}
    >
        <motion.h1
            className="text-6xl font-extrabold text-gray-900 leading-tight max-w-3xl"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            Pure. Clean. Private.
        </motion.h1>

        <motion.p
            className="mt-4 text-2xl text-gray-700 max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
            Educational Books and Apps
        </motion.p>

        <motion.p
            className="mt-4 text-xl text-gray-600 max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
            No tracking. No ads. No wasted time.
        </motion.p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* Primary CTA */}
            <Button size="lg" asChild>
                <Link href="https://shop.encorpora.io">Explore Books</Link>
            </Button>

            {/* Secondary CTA */}
            <Button variant="outline" size="lg" asChild>
                <Link href="/apps">Expore Apps</Link>
            </Button>

        </div>
    </motion.section>
);
