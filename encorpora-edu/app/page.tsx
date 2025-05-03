"use client";

import { FC } from "react";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { PrivacyBanner } from "@/components/PrivacyBanner";
import { ProductHighlights } from "@/components/ProductHighlights";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { GetInvolvedBanner } from "@/components/GetInvolvedBanner";


const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <PrivacyBanner />
      <WhySection />
      <GetInvolvedBanner />
      <ProductHighlights />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomePage;
