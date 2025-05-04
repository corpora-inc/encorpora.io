import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export const GetInvolvedBanner: FC = () => (
    <section className="w-full bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-lg text-gray-800 font-medium text-center sm:text-left">
                Corpora is fully open source—join us in building something big for humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                    <Link href="https://github.com/corpora-inc" className="flex items-center gap-2">
                        <FaGithub size={20} /> GitHub
                    </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                    <Link href="https://shop.encorpora.io/pages/contact" className="flex items-center gap-2">
                        <FaEnvelope size={20} /> Contact
                    </Link>
                </Button>
            </div>
        </div>
    </section>
);
