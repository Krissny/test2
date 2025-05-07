
import React from "react";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, Search, FileText, BrainCircuit, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    id: "market-analysis",
    title: "Market Analysis",
    description: "Comprehensive analysis of pharmaceutical markets to identify opportunities and challenges.",
    icon: BarChart2,
    color: "bg-orange-100 text-orange-600",
    benefits: [
      "Detailed market size and growth projections",
      "Segmentation analysis by product, geography, and customer type",
      "Identification of unmet needs and market gaps",
      "Pricing analysis and reimbursement landscape",
      "Market access barriers and opportunities"
    ],
    image: "Pharmaceutical market analysis dashboard with charts and graphs"
  },
  {
    id: "competitive-intelligence",
    title: "Competitive Intelligence",
    description: "In-depth analysis of competitors' strategies, pipelines, and market positioning.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
    benefits: [
      "Competitor profiling and benchmarking",
      "Pipeline analysis and development tracking",
      "Strategic initiatives and partnership monitoring",
      "SWOT analysis of key competitors",
      "Early warning signals of competitive threats"
    ],
    image: "Business team analyzing competitive intelligence data on multiple screens"
  },
  {
    id: "trend-forecasting",
    title: "Trend Forecasting",
    description: "Predictive analysis of emerging trends, technologies, and market shifts in the pharmaceutical industry.",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
    benefits: [
      "Identification of emerging therapeutic areas",
      "Technology adoption forecasting",
      "Patient and physician behavior trends",
      "Digital health integration opportunities",
      "Long-term market evolution scenarios"
    ],
    image: "Futuristic trend forecasting visualization with predictive analytics"
  },
  {
    id: "regulatory-insights",
    title: "Regulatory Insights",
    description: "Analysis of regulatory environments and their impact on pharmaceutical market dynamics.",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
    benefits: [
      "Regulatory landscape mapping by region",
      "Impact analysis of policy changes",
      "Approval pathway optimization strategies",
      "Risk assessment and mitigation planning",
      "Regulatory trend monitoring and alerts"
    ],
    image: "Professional reviewing regulatory documents in a modern office"
  },
  {
    id: "strategic-consulting",
    title: "Strategic Consulting",
    description: "Expert guidance on market entry, product positioning, portfolio optimization, and growth strategies.",
    icon: BrainCircuit,
    color: "bg-amber-100 text-amber-600",
    benefits: [
      "Market entry and expansion strategies",
      "Product positioning and messaging",
      "Portfolio optimization recommendations",
      "Partnership and acquisition target identification",
      "Commercial excellence frameworks"
    ],
    image: "Strategic consulting session with pharmaceutical executives around a conference table"
  }
];

const ServicesPage = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="text-orange-600">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Comprehensive market analysis services tailored to the unique needs of pharmaceutical companies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`${service.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                      <service.icon size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="text-orange-600 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link to="/contact">Request More Information</Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-xl overflow-hidden shadow-xl"
                  >
                    <img  alt={service.title} className="w-full h-auto" src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss how our services can help your pharmaceutical company achieve its strategic goals.
            </p>
            <Button asChild className="bg-orange-600 hover:bg-orange-700 px-8 py-6 text-lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
