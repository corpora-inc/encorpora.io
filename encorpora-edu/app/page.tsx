'use client'

import { FC } from "react";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { PrivacyBanner } from "@/components/PrivacyBanner";
import { ProductHighlights } from "@/components/ProductHighlights";
import { AboutSection } from "@/components/AboutSection";
import { GetInvolvedBanner } from "@/components/GetInvolvedBanner";
import ContactSection from "@/components/Contact";


const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <PrivacyBanner />
      <WhySection />
      <GetInvolvedBanner />
      <ProductHighlights />
      <ContactSection />
    </>
  );
};

export default HomePage;
