"use client";

import { FC, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaBook, FaRobot, FaSchool } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-5xl font-bold text-center text-gray-900">
        Welcome to Encorpora
      </h1>
      <p className="text-lg text-gray-700 text-center mt-4 max-w-2xl">
        The future of education is bright.
      </p>

      {/* Top-Level Calls to Action */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">
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

      {/* About Encorpora Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-6">

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Personalizing Learning</h2>
            <p className="text-gray-600 mt-2">
              We create <strong>custom textbooks</strong> tailored to your interests and needs. Our AI-powered platform <strong>adapts to your learning style</strong> and <strong>challenges you</strong> to grow.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Empowering Students</h2>
            <p className="text-gray-600 mt-2">
              The future of education isn't static—it's <strong>interactive, adaptive, and designed just for you</strong>.
              Encorpora delivers a dynamic learning experience that <strong>inspires curiosity</strong> and <strong>encourages exploration</strong>.
            </p>
          </CardContent>
        </Card>

        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold text-gray-900">Revolutionizing Education</h2>
            <p className="text-gray-700 mt-2">
              We are turning <strong>decades of software engineering</strong> and <strong>education experience</strong> into a platform that <strong>empowers students</strong> to learn in new ways. We are <strong>Encorpora</strong>.
            </p>
          </CardContent>
        </Card>
      </div >

      {/* Featured Books */}
      < div className="mt-16 text-center max-w-3xl" >
        <h2 className="text-3xl font-semibold">Featured Books</h2>
        <p className="text-gray-700 mt-2">
          Explore our growing collection of free educational materials.
        </p>
      </div >

      {/* Featured Books List */}
      < div className="mt-10 flex flex-wrap justify-center gap-6" >
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
    </div >
  );
};

export default HomePage;
