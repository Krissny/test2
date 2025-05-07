
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, BarChart2, TrendingUp, Search, FileText, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "market-analysis",
    title: "Market Analysis",
    description: "Comprehensive analysis of pharmaceutical markets, including size, growth, trends, and competitive landscape.",
    icon: BarChart2,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "competitive-intelligence",
    title: "Competitive Intelligence",
    description: "In-depth analysis of competitors' strategies, pipelines, and market positioning to identify opportunities and threats.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "trend-forecasting",
    title: "Trend Forecasting",
    description: "Predictive analysis of emerging trends, technologies, and market shifts in the pharmaceutical industry.",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "regulatory-insights",
    title: "Regulatory Insights",
    description: "Analysis of regulatory environments and their impact on pharmaceutical market dynamics and opportunities.",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "strategic-consulting",
    title: "Strategic Consulting",
    description: "Expert guidance on market entry, product positioning, portfolio optimization, and growth strategies.",
    icon: BrainCircuit,
    color: "bg-amber-100 text-amber-600",
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-gray-600">
            We provide comprehensive market analysis services tailored to the pharmaceutical industry's unique needs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-lg"
          >
            View all services <ChevronRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
