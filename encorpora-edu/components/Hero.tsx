// app/components/Hero.tsx
"use client";

import { FC, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const Hero: FC = () => {
    const [appsOpen, setAppsOpen] = useState(false);
    const chooserRef = useRef<HTMLDivElement>(null);

    // Close pop-up if clicking outside
    useEffect(() => {
        function onClick(e: MouseEvent) {
            if (chooserRef.current && !chooserRef.current.contains(e.target as Node)) {
                setAppsOpen(false);
            }
        }
        document.addEventListener("mousedown", onClick);
        return () => document.removeEventListener("mousedown", onClick);
    }, []);

    return (
        <motion.section
            className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

                {/* Apps chooser */}
                <div className="relative" ref={chooserRef}>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setAppsOpen((o) => !o)}
                    >
                        Explore Apps
                    </Button>

                    {appsOpen && (
                        <motion.div
                            className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden z-10"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link
                                href="https://play.google.com/store/apps/developer?id=Corpora+Inc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50"
                            >
                                <FaGooglePlay size={20} /> Google Play
                            </Link>
                            {/* TODO: get url for publisher
                            curl https://itunes.apple.com/lookup\?id\=6744656859 */}
                            <Link
                                href="https://apps.apple.com/developer/corpora-inc/idYOUR_DEVELOPER_ID"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50"
                            >
                                <FaApple size={20} /> Coming Soon!
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.section>
    );
};
