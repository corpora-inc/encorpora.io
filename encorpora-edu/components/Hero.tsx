// app/components/Hero.tsx
"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay, FaBookOpen } from "react-icons/fa";

const fade = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export const Hero: FC = () => (
    <motion.section
        className="min-h-screen bg-white flex items-center justify-center px-5"
        {...fade}
        transition={{ duration: 1, ease: "easeOut" }}
    >
        {/* keep everything bound so it never stretches too far */}
        <div className="w-full max-w-xxl flex flex-col items-center text-center">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
                Learn Smarter, Not Harder.
            </h1>

            <p className="mt-6 text-2xl text-gray-700">
                Focused books and apps that cut study time in half.
            </p>

            <p className="mt-3 text-xl text-gray-600">No ads. No trackers. No wasted time.</p>

            {/* CTAs */}
            <div className="mt-8 w-full flex flex-col sm:flex-row sm:justify-center gap-4">
                {/* iOS */}
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-48 justify-center"
                >
                    <Link
                        href="https://apps.apple.com/us/developer/corpora-inc/id1808739895"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaApple size={18} />
                        iOS Apps
                    </Link>
                </Button>

                {/* Android */}
                <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-48 justify-center"
                >
                    <Link
                        href="https://play.google.com/store/apps/developer?id=Corpora+Inc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGooglePlay size={18} />
                        Android Apps
                    </Link>
                </Button>

                {/* Books */}
                <Button
                    asChild
                    size="lg"
                    className="flex items-center gap-2 w-full sm:w-48 justify-center"
                >
                    <Link href="https://shop.encorpora.io">
                        <FaBookOpen size={18} />
                        Browse Books
                    </Link>
                </Button>
            </div>
        </div>
    </motion.section>
);
