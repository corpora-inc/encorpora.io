// app/components/Hero.tsx
"use client";

import React, { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Hero: FC = () => {
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
                transition={{ duration: 1, delay: 0.5 }}
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
                <Button size="lg" asChild>
                    <Link href="https://shop.encorpora.io">Explore Books</Link>
                </Button>

                <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                        <Button variant="outline" size="lg">
                            Explore Apps
                        </Button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content
                        sideOffset={6}
                        align="center"
                        collisionPadding={8}
                        className="bg-white rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden z-10 animate-fade-in"
                    >
                        <DropdownMenu.Item asChild>
                            <Link
                                href="https://play.google.com/store/apps/developer?id=Corpora+Inc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50"
                            >
                                <FaGooglePlay size={20} /> Google Play
                            </Link>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item asChild>
                            <Link
                                href="https://apps.apple.com/developer/corpora-inc/id1808739895"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50"
                            >
                                <FaApple size={20} /> Apple
                            </Link>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </motion.section>
    );
};
