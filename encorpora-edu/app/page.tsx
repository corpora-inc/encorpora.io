"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
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
    <motion.div
      className="min-h-screen bg-gray-100 flex flex-col items-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.h1
        className="text-5xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.25, ease: "easeOut" }}
      >
        Welcome to Encorpora
      </motion.h1>

      <motion.p
        className="text-2xl text-gray-700 text-center mt-4 max-w-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.33, ease: "easeOut", delay: 0.8 }}
      >
        Education Engineered for You
      </motion.p>

      {/* Top-Level Calls to Action */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {/* 1. Free Educational Materials */}
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaBook className="text-blue-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">Free Educational Materials Available Now</h2>
            <p className="text-gray-600 mt-2">
              Download our free, high-quality resources including textbooks, worksheets, and more.
            </p>
            <a href="/books" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4">Explore Books</Button>
            </a>
          </CardContent>
        </Card>

        {/* 2. Personalized Learning Journeys (Coming Soon) */}
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaUserGraduate className="text-green-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">
              Personalized Learning Journeys (Coming Soon)
            </h2>
            <p className="text-gray-600 mt-2">
              Our curriculum evolves with you, delivering custom lessons for your unique learning path.
            </p>
            <Button className="mt-4" disabled>
              Launching Soon
            </Button>
          </CardContent>
        </Card>

        {/* 3. Top-Quality Textbooks (Coming Soon) */}
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaSchool className="text-red-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">
              Accredited Programs (Coming Soon)
            </h2>
            <p className="text-gray-600 mt-2">
              We craft specialized textbooks for K-12, CLEP, and AP, inspired by real homeschooling success.
            </p>
            <Button className="mt-4" disabled>
              Stay Tuned
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Consulting & Partnerships */}
      <motion.div
        className="mt-12 w-full max-w-3xl px-6 text-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
      >
        <h2 className="text-3xl font-semibold flex flex-col items-center">
          <FaHandshake className="text-blue-500 text-4xl mb-2" />
          Consulting &amp; Partnerships
        </h2>
        <p className="text-gray-700 mt-2">
          We offer <strong>custom books, dynamic learning solutions, and tailored software development</strong>.
        </p>
        <p className="text-gray-600 mt-2">
          Whether you&apos;re looking for a partnership in education technology or a fully customized learning experience,
          we can build something amazing together.
        </p>
        <motion.div
          className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-lg font-semibold"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: "easeOut", delay: 3 }}
        >
          <a href="mailto:team@encorpora.io" className="text-blue-600 hover:underline flex items-center gap-2">
            <FaEnvelope className="text-xl" /> team@encorpora.io
          </a>
          <a href="tel:+17703765331" className="text-blue-600 hover:underline flex items-center gap-2">
            <FaPhone className="text-xl" /> 770-376-5331
          </a>
        </motion.div>
      </motion.div>

      {/* About Encorpora Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            {/* New icon and heading */}
            <FaBookReader className="text-blue-500 text-5xl mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">
              Personalized Learning Tools
            </h2>
            <p className="text-gray-600 mt-2">
              We craft custom textbooks tailored to your unique interests. Our
              approach ensures every learner is challenged and engaged.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <FaLightbulb className="text-yellow-500 text-5xl mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">
              Empowering Student Potential
            </h2>
            <p className="text-gray-600 mt-2">
              We believe education should be truly interactive and adaptable.
              Experience a dynamic platform that sparks curiosity and exploration.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <FaRocket className="text-red-500 text-5xl mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">
              Revolutionizing Education Together
            </h2>
            <p className="text-gray-700 mt-2">
              We blend software and teaching expertise together into a platform
              that drives students to thrive. We are Encorpora.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Featured Books */}
      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-3xl font-semibold">Featured Books</h2>
        <p className="text-gray-700 mt-2">
          Explore our growing collection of free educational materials.
        </p>
      </div>

      {/* Featured Books List */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {loading ? (
          <p className="text-gray-600">Loading featured books...</p>
        ) : featuredBooks.length === 0 ? (
          <p className="text-gray-600">No featured books available.</p>
        ) : (
          featuredBooks.map((book) => (
            <Card key={book.id} className="w-80 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600">{book.description}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4">Download</Button>
                </a>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* View All Books Link */}
      <div className="mt-6">
        <a
          href="/books"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All Books →
        </a>
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Corpora Inc - All Rights Reserved.
      </footer>
    </motion.div>
  );
};

export default HomePage;
