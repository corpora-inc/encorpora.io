"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaBook, FaRobot, FaSchool } from "react-icons/fa";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Encorpora - AI-Powered Education</title>
        <meta name="description" content="Innovative AI-powered learning for K-12 students. Download free educational books and explore the future of learning." />
        <meta property="og:title" content="Encorpora - AI-Powered Education" />
        <meta property="og:description" content="Revolutionizing education with AI. Explore free resources and cutting-edge learning tools." />
        <meta property="og:image" content="/hexagon-logo.webp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <motion.h1
          className="text-5xl font-bold text-center text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Encorpora
        </motion.h1>
        <p className="text-lg text-gray-700 text-center mt-4 max-w-2xl">
          The future of education is bright.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Card className="w-80 shadow-lg">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <FaBook className="text-blue-500 text-5xl" />
              <h2 className="text-xl font-semibold mt-4">Free Educational Materials</h2>
              <p className="text-gray-600 mt-2">
                Download high-quality learning resources, including elemetary math books.
              </p>
              <Button className="mt-4">Explore Books</Button>
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
        <div className="mt-16 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold">Featured Books</h2>
          <p className="text-gray-700 mt-2">Explore our growing collection of free educational materials.</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold">2nd Grade Math</h3>
                <p className="text-gray-600">Foundational math concepts.</p>
                <Button className="mt-4">Download</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold">3rd Grade Math</h3>
                <p className="text-gray-600">Advancing arithmetic and problem-solving skills.</p>
                <Button className="mt-4">Download</Button>
              </CardContent>
            </Card>
            {/* College Algebra CLEP Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold">College Algebra CLEP</h3>
                <p className="text-gray-600">Prepare for the College Algebra CLEP exam.</p>
                <Button className="mt-4">Download</Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <footer className="mt-16 text-gray-500 text-sm">
          © {new Date().getFullYear()} Encorpora, Inc. All Rights Reserved.
        </footer>
      </div>
    </>
  );
}
