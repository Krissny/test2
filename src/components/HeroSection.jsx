
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Pharma with{" "}
              <span className="gradient-text">Data-Driven Insights</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Synapse Biopharma delivers comprehensive market analysis and strategic intelligence to help pharmaceutical companies make informed decisions and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img  alt="Client logo 1" className="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1601786276696-b73f46a87c40" />
                <img  alt="Client logo 2" className="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1687198793624-ff5354d95272" />
                <img  alt="Client logo 3" className="h-10 w-10 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1687198793624-ff5354d95272" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Trusted by</span> leading pharmaceutical companies
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img  alt="Pharmaceutical market analysis" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1559574326-b28980940fae" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
