// app/components/AboutSection.tsx
"use client";

import { FC } from "react";

export const AboutSection: FC = () => (
    <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
                At Corpora, we believe that learning should be as direct and friction-free as possible.
                We build offline-first apps and hand-crafted books that cut out distractions
                and get straight to the heart of every subject.
                No ads. No trackers. Just pure, focused education—because the best way to master something
                is to eliminate everything that gets in the way.
            </p>
        </div>
    </section>
);
