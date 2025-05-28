"use client";

import { FC } from "react";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import ContactSection from "@/components/Contact";
import FeaturedBooks from "@/components/FeaturedBooks";
import WhySection from "@/components/WhySection";
import Features from "@/components/Features";

const HomePage: FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhySection />
      <Features />
      <FeaturedBooks />
      <ContactSection />
    </>
  );
};

export default HomePage;
// falta seccion de las apps
// seccion de la mision
// y dejar en en la seccion de featuers un botton que lleve a la seccion de los terminos y condiciones. 