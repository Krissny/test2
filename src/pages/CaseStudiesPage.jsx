
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText, BarChart2, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: 1,
    title: "Market Entry Strategy for Novel Oncology Treatment",
    category: "Market Analysis",
    icon: BarChart2,
    color: "bg-orange-100 text-orange-600",
    challenge: "A mid-sized pharmaceutical company needed to develop a market entry strategy for their breakthrough oncology treatment targeting a specific genetic mutation.",
    solution: "We conducted comprehensive market sizing, competitive landscape analysis, and pricing strategy development across key global markets.",
    results: [
      "Identified optimal launch sequence across 12 markets",
      "Developed pricing strategy that maximized revenue while ensuring market access",
      "Mapped key opinion leader landscape for targeted engagement",
      "Forecasted market share scenarios with 90% accuracy"
    ],
    image: "Oncology treatment market analysis dashboard with patient population data and competitive landscape"
  },
  {
    id: 2,
    title: "Portfolio Optimization for Leading Biotech Firm",
    category: "Strategic Consulting",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    challenge: "A leading biotech company needed to optimize their R&D portfolio to maximize ROI and align with changing market dynamics.",
    solution: "We developed a comprehensive portfolio assessment framework, evaluating each asset based on market potential, competitive positioning, and strategic fit.",
    results: [
      "Identified 3 high-potential assets for accelerated development",
      "Recommended deprioritization of 2 underperforming programs",
      "Developed strategic partnerships to enhance 4 key pipeline assets",
      "Increased projected portfolio value by 35% over 5 years"
    ],
    image: "Biotech executives reviewing portfolio optimization recommendations in a boardroom setting"
  },
  {
    id: 3,
    title: "Competitive Intelligence Program for Specialty Pharma",
    category: "Competitive Intelligence",
    icon: Search,
    color: "bg-green-100 text-green-600",
    challenge: "A specialty pharmaceutical company needed to establish an ongoing competitive intelligence program to monitor threats and opportunities in their therapeutic areas.",
    solution: "We designed and implemented a comprehensive CI program with regular monitoring, alerts, and quarterly deep-dive analyses.",
    results: [
      "Early identification of competitor pipeline threats",
      "Anticipated regulatory changes affecting market dynamics",
      "Identified acquisition target 6 months before market awareness",
      "Enabled proactive strategy adjustments to maintain market leadership"
    ],
    image: "Competitive intelligence dashboard showing competitor pipeline tracking and strategic alerts"
  },
  {
    id: 4,
    title: "Market Forecast for Emerging Therapeutic Area",
    category: "Trend Forecasting",
    icon: TrendingUp,
    color: "bg-purple-100 text-purple-600",
    challenge: "A global pharmaceutical company needed to assess the market potential for an emerging therapeutic area with limited historical data.",
    solution: "We developed a sophisticated forecasting model combining epidemiological data, treatment paradigm analysis, and analogous market patterns.",
    results: [
      "Projected market size and growth with regional breakdowns",
      "Identified key market inflection points and drivers",
      "Mapped evolving treatment paradigms and adoption curves",
      "Provided scenario analysis for different market developments"
    ],
    image: "Data scientists working on market forecasting models with multiple screens showing projections"
  }
];

const CaseStudiesPage = () => {
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
              Case <span className="text-orange-600">Studies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Explore how we've helped pharmaceutical companies overcome challenges and achieve strategic objectives.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`${study.color} w-10 h-10 rounded-lg flex items-center justify-center mr-3`}>
                        <study.icon size={20} />
                      </div>
                      <span className="text-gray-600 font-medium">{study.category}</span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">{study.title}</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-2">Challenge</h3>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      
                      <h3 className="text-lg font-semibold mb-2">Solution</h3>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                      
                      <h3 className="text-lg font-semibold mb-2">Results</h3>
                      <ul className="space-y-2 mb-6">
                        {study.results.map((result, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-orange-600 mr-2">•</span>
                            <span className="text-gray-600">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="bg-orange-600 hover:bg-orange-700">
                      Request Similar Analysis
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-xl overflow-hidden shadow-xl"
                  >
                    <img  alt={study.title} className="w-full h-auto" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to discuss your specific challenges and how our expertise can help your pharmaceutical company succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;
