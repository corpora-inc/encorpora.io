"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  FaBook, FaRobot, FaSchool,
  FaUserGraduate, FaLightbulb, FaRocket,
  FaHandshake, FaEnvelope, FaPhone,
} from "react-icons/fa";
// import {FaUserGraduate, FaLightbulb, FaRocket} from "react-icons/fa";
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
      transition={{ duration: 1.5, ease: "easeOut" }}
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
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaBook className="text-blue-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">Free Educational Materials</h2>
            <p className="text-gray-600 mt-2">
              Download high-quality learning resources, including elementary math books.
            </p>
            {/* open link in new tab - /books */}
            {/* <Button className="mt-4">Explore Books</Button> */}
            <a href="/books" target="_blank" rel="noopener noreferrer">
              <Button className="mt-4">Explore Books</Button>
            </a>
          </CardContent>
        </Card>
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaRobot className="text-green-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">AI-Powered Learning (Coming Soon)</h2>
            <p className="text-gray-600 mt-2">
              Our AI-driven learning experience will soon be available!
            </p>
            <Button className="mt-4" disabled>Launching Soon</Button>
          </CardContent>
        </Card>
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaSchool className="text-red-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">Accredited Programs (Coming Soon)</h2>
            <p className="text-gray-600 mt-2">
              We are working towards accredited K-12 learning programs.
            </p>
            <Button className="mt-4" disabled>Stay Tuned</Button>
          </CardContent>
        </Card>
      </div>

      {/* Consulting & Partnerships */}

      <motion.div
        className="mt-12 w-full max-w-3xl px-6 text-center"
        initial={{ opacity: 0, scale: 0, x: -1000 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 2 }}
      >
        <h2 className="text-3xl font-semibold flex flex-col items-center">
          <FaHandshake className="text-blue-500 text-4xl mb-2" />
          Consulting &amp; Partnerships
        </h2>
        <p className="text-gray-700 mt-2">
          We offer <strong>custom books, AI-powered learning solutions, and tailored software development</strong>.
        </p>
        <p className="text-gray-600 mt-2">
          Whether you&apos;re looking for <strong>a partnership in education technology</strong> or a <strong>fully customized learning experience</strong>,
          we can build something amazing together.
        </p>
        <motion.div
          className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 text-lg font-semibold"
          initial={{ x: 5000, zIndex: -1000, opacity: 0, scale: 0 }}
          animate={{ x: 0, zIndex: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 5, ease: "easeOut", delay: 1 }}
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
            <FaUserGraduate className="text-blue-500 text-5xl mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">Personalizing Learning</h2>
            <p className="text-gray-600 mt-2">
              We create <strong>custom textbooks</strong> tailored to your interests and needs. Our AI-powered platform <strong>adapts to your learning style</strong> and <strong>challenges you</strong> to grow.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <FaLightbulb className="text-yellow-500 text-5xl mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">Empowering Students</h2>
            <p className="text-gray-600 mt-2">
              The future of education isn&apos;t static—it&apos;s <strong>interactive, adaptive, and designed just for you</strong>.
              Encorpora delivers a dynamic learning experience that <strong>inspires curiosity</strong> and <strong>encourages exploration</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <FaRocket className="text-red-500 text-5xl mx-auto" />
            <h2 className="text-xl font-semibold text-gray-900 mt-4">Revolutionizing Education</h2>
            <p className="text-gray-700 mt-2">
              We are turning <strong>decades of software engineering</strong> and <strong>education experience</strong> into a platform that <strong>empowers students</strong> to learn in new ways. We are <strong>Encorpora</strong>.
            </p>
          </CardContent>
        </Card>

      </div>

      {/* Featured Books */}
      < div className="mt-16 text-center max-w-3xl" >
        <h2 className="text-3xl font-semibold">Featured Books</h2>
        <p className="text-gray-700 mt-2">
          Explore our growing collection of free educational materials.
        </p>
      </div >

      {/* Featured Books List */}
      <div className="mt-10 flex flex-wrap justify-center gap-6" >
        {
          loading ? (
            <p className="text-gray-600" > Loading featured books...</p>
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
      </div >

      {/* View All Books Link */}
      < div className="mt-6" >
        <a
          href="/books"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All Books →
        </a>
      </div >

      <footer className="mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} Corpora Inc - All Rights Reserved.
      </footer>
    </motion.div>
  );
};

export default HomePage;
