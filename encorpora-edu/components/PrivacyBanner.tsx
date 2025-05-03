import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const PrivacyBanner: FC = () => (
    <section className="w-full bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-lg text-gray-800 font-medium text-center sm:text-left">
                Your data stays yours—no collection, no tracking, ever.
            </p>
            <Button variant="outline" size="lg" asChild>
                <Link href="/privacy">View Our Privacy Promise</Link>
            </Button>
        </div>
    </section>
);
