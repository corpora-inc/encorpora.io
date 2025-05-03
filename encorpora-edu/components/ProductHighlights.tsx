// app/components/ProductHighlights.tsx
"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay, FaBook } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

interface Book {
    id: string;
    title: string;
    description: string;
    link: string;
}

export const ProductHighlights: FC = () => {
    const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatured = async () => {
            setLoading(true);
            const { data, error } = await supabase
                .from("books")
                .select("id, title, description, link")
                .eq("is_featured", true)
                .order("title", { ascending: true });

            if (error) {
                console.error("Error fetching featured books:", error.message);
                setFeaturedBooks([]);
            } else {
                setFeaturedBooks(data || []);
            }
            setLoading(false);
        };

        fetchFeatured();
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 space-y-16">

                {/* Apps & Shop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <Card className="border-0 rounded-xl">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-semibold mb-4">Featured App</h3>
                            <p className="text-gray-700 mb-6">
                                Yìjīng: the Chinese classic oracle
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button variant="outline" asChild>
                                    <Link href="https://apps.apple.com/app/idYOUR_APP_ID">
                                        <FaApple size={20} className="mr-2" /> App Store
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href="https://play.google.com/store/apps/details?id=YOUR_APP_ID">
                                        <FaGooglePlay size={20} className="mr-2" /> Google Play
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 rounded-xl">
                        <CardContent className="p-8 text-center">
                            <h3 className="text-2xl font-semibold mb-4">Finished Books</h3>
                            <p className="text-gray-700 mb-6">
                                Fully edited, print-ready textbooks available for purchase.
                            </p>
                            <Button asChild size="lg">
                                <Link href="https://shop.encorpora.io">
                                    <FaBook size={20} className="mr-2" /> Shop Books
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                {/* Featured Titles */}
                <div>
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Free Drafts
                    </h3>

                    {loading ? (
                        <p className="text-center text-gray-600">Loading…</p>
                    ) : featuredBooks.length === 0 ? (
                        <p className="text-center text-gray-600">
                            No free drafts available right now.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredBooks.map((b) => (
                                <Card key={b.id} className="border-0 rounded-xl">
                                    <CardContent className="p-6 flex flex-col items-center text-center">
                                        <h4 className="text-lg font-semibold">{b.title}</h4>
                                        <p className="flex-1 text-gray-700 mt-2">
                                            {b.description}
                                        </p>
                                        <a
                                            href={b.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button className="mt-4" size="sm">
                                                Read Now
                                            </Button>
                                        </a>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
};
