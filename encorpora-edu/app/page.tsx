"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaBook, FaRobot, FaSchool } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Encorpora
      </motion.h1>
      <p className="text-lg text-gray-700 text-center mt-4">
        AI-Powered Education for the Future
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaBook className="text-blue-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">Free Educational Materials</h2>
            <p className="text-gray-600 mt-2">
              Download free math books and learning resources.
            </p>
            <Button className="mt-4">Explore Books</Button>
          </CardContent>
        </Card>
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaRobot className="text-green-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">AI-Powered Learning</h2>
            <p className="text-gray-600 mt-2">
              Experience cutting-edge educational AI tools that personalize learning.
            </p>
            <Button className="mt-4">Try AI Learning</Button>
          </CardContent>
        </Card>
        <Card className="w-80 shadow-lg">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <FaSchool className="text-red-500 text-5xl" />
            <h2 className="text-xl font-semibold mt-4">Accredited Programs</h2>
            <p className="text-gray-600 mt-2">
              Join our upcoming programs aligned with state educational standards.
            </p>
            <Button className="mt-4">Learn More</Button>
          </CardContent>
        </Card>
      </div>
      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Encorpora, Inc. All Rights Reserved.
      </footer>
    </div>
  );
}
