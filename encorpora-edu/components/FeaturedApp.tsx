"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { APPS_INFO } from "@/lib/appsInfo";

const FeaturedApps = () => {
  return (
    <section
      id="apps"
      className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background Elements - Unique to FeaturedApps */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.03]">
          {Array(36).fill(null).map((_, i) => (
            <div key={i} className="border-[0.5px] border-black"></div>
          ))}
        </div>
        
        {/* Accent elements */}
        <div className="absolute top-12 right-12 w-32 h-32">
          <motion.svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.5, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.rect 
              x="20" 
              y="20" 
              width="60" 
              height="60" 
              stroke="black" 
              strokeWidth="0.5" 
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="30" 
              stroke="black" 
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.svg>
        </div>
        
        {/* Subtle code-like symbols */}
        <div className="absolute bottom-24 left-12 opacity-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl font-light text-black"
          >
            {`{ }`}
          </motion.div>
        </div>
        
        {/* Minimalist dot pattern */}
        <div className="absolute top-1/4 left-1/4 grid grid-cols-3 gap-4 opacity-10 hidden lg:grid">
          {Array(9).fill(null).map((_, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="w-1 h-1 rounded-full bg-black"
            ></motion.div>
          ))}
        </div>
        
        {/* Abstract device outlines */}
        <motion.div 
          className="absolute -right-12 bottom-1/3 w-40 h-40 opacity-5 hidden xl:block"
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.05 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="10" width="60" height="80" rx="4" stroke="black" strokeWidth="2" />
            <circle cx="50" cy="80" r="4" stroke="black" strokeWidth="1" />
            <line x1="35" y1="20" x2="65" y2="20" stroke="black" strokeWidth="1" />
          </svg>
        </motion.div>
        
        {/* Connecting lines */}
        <motion.div 
          className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        ></motion.div>
        
        <motion.div 
          className="absolute right-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-0"
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
        ></motion.div>
        
        {/* Diagonal accent shapes */}
        <div className="absolute -left-8 top-96 opacity-10 hidden lg:block">
          <motion.svg 
            width="100" 
            height="100" 
            viewBox="0 0 100 100"
            initial={{ rotate: 45, scale: 0.8 }}
            whileInView={{ rotate: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <motion.path 
              d="M10,50 L90,50" 
              stroke="black" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.path 
              d="M50,10 L50,90" 
              stroke="black" 
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </motion.svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block h-px w-12 bg-black mb-6"
          ></motion.span>

          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Educational Apps
          </motion.h2>

          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Offline-first learning applications designed to eliminate
            distractions and help you focus on what matters most.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {APPS_INFO.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10"
            >
              {/* Card corner accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-black opacity-5"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black opacity-5"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black opacity-5"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-black opacity-5"></div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
                    {app.icon ? (
                      <img
                        src={app.icon}
                        alt={`${app.title} icon`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-xl font-bold text-gray-800">
                          {app.title.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{app.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {app.description}
                </p>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full bg-black hover:bg-gray-800 text-white font-medium rounded-lg">
                      <Download className="h-4 w-4 mr-2" />
                      <span>Download</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="!w-full min-w-[200px] bg-white border border-gray-100 shadow-lg rounded-lg">
                    {app.platforms.map((platform, idx) => (
                      <DropdownMenuItem
                        key={idx}
                        asChild
                        className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer"
                      >
                        <a
                          href={platform.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 w-full"
                        >
                          <div className="w-5 h-5 flex items-center justify-center">
                            {platform.icon}
                          </div>
                          <span className="font-medium">{platform.name}</span>
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Final decorative element */}
        <motion.div
          className="flex justify-center items-center mt-16 lg:mt-20 opacity-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-[1px] h-8 bg-black mx-1"></div>
          <div className="w-[1px] h-5 bg-black mx-1"></div>
          <div className="w-[1px] h-3 bg-black mx-1"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedApps;