"use client";

import { FC } from "react";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { PrivacyBanner } from "@/components/PrivacyBanner";
import { ProductHighlights } from "@/components/ProductHighlights";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";


const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <WhySection />
      <PrivacyBanner />
      <ProductHighlights />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomePage;
