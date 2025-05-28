import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

interface Book {
  id: string;
  title: string;
  description: string;
  link: string;
}

const FeaturedBooks = () => {
  const [books, setFeaturedBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("books")
        .select("id, title, description, link")
        .eq("is_featured", true)
        .order("title", { ascending: true });

      if (error) {
        console.error("Error fetching featured books:", error.message);
        setFeaturedBooks([]);
      } else {
        setFeaturedBooks(data || []);
      }
      setLoading(false);
    };

    fetchFeatured();
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-600">Loading featured resources...</p>
      </div>
    );
  }

  return (
    <section
      id="books"
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-white relative overflow-hidden"
    >
      {/* Refined decorative geometric elements */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gray-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gray-50 rounded-full translate-x-1/2 translate-y-1/2 z-0 opacity-70"></div>

      <div className="absolute top-1/4 right-8 sm:right-12 w-24 h-24 sm:w-32 sm:h-32 border border-gray-200 rounded-xl transform rotate-12 hidden md:block"></div>
      <div className="absolute bottom-1/4 left-8 sm:left-12 w-16 h-16 sm:w-24 sm:h-24 border border-gray-200 transform -rotate-12 hidden md:block"></div>

      <div className="absolute right-1/4 bottom-1/2 w-1 h-32 bg-gray-100 hidden lg:block"></div>
      <div className="absolute left-1/3 top-1/3 w-32 h-1 bg-gray-100 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-14 sm:mb-16 lg:mb-20 relative max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Refined decorative elements */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              className="h-[1px] w-0 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            ></motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-2 h-2 bg-black rounded-full"
            ></motion.div>
            <motion.div
              className="h-[1px] w-0 bg-black"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            ></motion.div>
          </div>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 text-black tracking-tight leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured educational resources
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-2xl mx-auto text-base sm:text-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Explore our collection of high-quality educational materials
            designed for effective learning.
          </motion.p>
        </motion.div>

        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-10"
          >
            {books.length === 0 ? (
              <motion.p
                variants={itemVariants}
                className="text-gray-600 col-span-full text-center py-16 italic"
              >
                No featured resources available at this time.
              </motion.p>
            ) : (
              books.map((book) => (
                <motion.div
                  key={book.id}
                  variants={itemVariants}
                  transition={{ duration: 0.5 }}
                  className="flex w-full"
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Card className="group h-full w-full overflow-hidden bg-white flex flex-col relative border-0 before:absolute before:inset-0 before:border before:border-gray-100 before:rounded-2xl after:absolute after:inset-[1px] after:rounded-[14px] after:bg-white after:z-0 before:transition-all before:duration-500 hover:before:border-black hover:before:shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                    <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col h-full relative z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-5 gap-2 sm:gap-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-black tracking-tight leading-tight">
                          {book.title}
                        </h3>
                      </div>

                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4 opacity-50 group-hover:from-gray-200 group-hover:via-black group-hover:to-gray-200 transition-all duration-500"></div>

                      <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm sm:text-base">
                        {book.description}
                      </p>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto relative"
                      >
                        <a
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button className="bg-white border border-gray-200 text-gray-900 hover:text-white w-full py-3 sm:py-5 font-medium tracking-wide rounded-xl overflow-hidden relative group transition-all duration-300">
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
                              <span>Access Resource</span>
                              <motion.span
                                initial={{ x: 0 }}
                                animate={{ x: [0, 5, 0] }}
                                transition={{
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  duration: 1.5,
                                  repeatDelay: 2,
                                }}
                                className="inline-block"
                              >
                                →
                              </motion.span>
                            </span>
                            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-black transition-transform duration-300 ease-in-out"></span>
                          </Button>
                        </a>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.div
            className="inline-block relative"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.a
              href="https://shop.encorpora.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium flex items-center gap-2 border border-transparent hover:border-gray-200 transition-all duration-300 text-base sm:text-lg px-5 py-3 rounded-full group relative overflow-hidden"
            >
              <span className="relative z-10">View Complete Collection</span>
              <span className="relative z-10 ml-1 group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
              <motion.span
                className="absolute inset-0 bg-gray-50 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              ></motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
    </div>
    </section>
  );
};

export default FeaturedBooks;
