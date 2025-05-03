"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaBook,
  FaSchool,
  FaUserGraduate,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaEnvelope,
  FaPhone,
  FaBookReader,
} from "react-icons/fa";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import { PrivacyBanner } from "@/components/PrivacyBanner";
import { ProductHighlights } from "@/components/ProductHighlights";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";

// Define Book type
interface Book {
  id: string;
  title: string;
  description: string;
  link: string;
}

const HomePage: FC = () => {
  const [featuredBooks, setFeaturedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch Featured Books from Supabase
  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("books")
        .select("*")
        .eq("is_featured", true)
        .limit(3);

      if (error) {
        console.error("Error fetching featured books:", error.message);
      } else {
        setFeaturedBooks(data);
      }
      setLoading(false);
    };

    fetchFeaturedBooks();
  }, []);

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
