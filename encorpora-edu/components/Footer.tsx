'use client'

import { FC } from "react";
import Link from "next/link";

export const Footer: FC = () => (
    <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Logo / Name */}
            <div className="text-lg font-bold text-gray-900">Corpora Inc</div>

            {/* Nav Links */}
            <nav className="flex flex-wrap gap-4 text-gray-600">
                <Link href="/privacy" className="hover:text-gray-900">
                    Privacy
                </Link>
                <Link href="https://shop.encorpora.io" className="hover:text-gray-900">
                    Shop
                </Link>
                <Link href="https://github.com/corpora-inc" className="hover:text-gray-900">
                    GitHub
                </Link>
                <Link href="https://free2z.com/corpora" className="hover:text-gray-900">
                    Free2z
                </Link>
                <Link href="https://shop.encorpora.io/pages/contact" className="hover:text-gray-900">
                    Contact
                </Link>
            </nav>

            {/* Contact Info */}
            <div className="text-gray-600 text-sm text-center md:text-right">
                <div>team@encorpora.io</div>
                <div>© {new Date().getFullYear()} Corpora Inc</div>
            </div>
        </div>
    </footer>
);
