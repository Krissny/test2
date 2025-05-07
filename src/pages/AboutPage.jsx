
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Award, Users, Globe, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: "Accuracy",
      description: "We are committed to providing precise, reliable data and insights that our clients can trust for critical decision-making."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "We put our clients' needs first, tailoring our approach to deliver maximum value and address specific challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from research methodologies to final deliverables and client service."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We maintain a global outlook, understanding diverse markets and regulatory environments to provide comprehensive insights."
    }
  ];

  const team = [
    {
      name: "Dr. Emily Chen",
      position: "Founder & CEO",
      bio: "Former pharmaceutical executive with 20+ years of experience in global markets and strategic development.",
      image: "Professional headshot of Dr. Emily Chen, an Asian woman in her 50s wearing business attire"
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Research Officer",
      bio: "Expert in pharmaceutical market research with a background in biostatistics and data science.",
      image: "Professional headshot of Michael Rodriguez, a Latino man in his 40s with glasses"
    },
    {
      name: "Dr. Sarah Johnson",
      position: "Head of Strategic Consulting",
      bio: "Former strategy consultant with expertise in pharmaceutical portfolio optimization and market entry.",
      image: "Professional headshot of Dr. Sarah Johnson, a Black woman in her 30s with a confident smile"
    },
    {
      name: "David Kim",
      position: "Director of Client Services",
      bio: "Experienced client relationship manager specializing in the pharmaceutical and biotech sectors.",
      image: "Professional headshot of David Kim, an Asian man in his 30s in business attire"
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-orange-600">Synapse Biopharma</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                We are a specialized market analysis firm dedicated to helping pharmaceutical companies navigate complex markets and make informed strategic decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-orange-600 hover:bg-orange-700">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img  alt="Synapse Biopharma team" className="w-full h-auto" src="https://images.unsplash.com/photo-1559574326-b28980940fae" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="prose prose-lg max-w-none"
            >
              <p>
                Founded in 2010 by Dr. Emily Chen, Synapse Biopharma emerged from a recognition that pharmaceutical companies needed more specialized, data-driven market analysis to navigate increasingly complex global markets.
              </p>
              <p>
                With her background as a pharmaceutical executive and strategic consultant, Dr. Chen assembled a team of industry experts, data scientists, and market researchers with deep experience in the pharmaceutical sector.
              </p>
              <p>
                Over the past decade, Synapse Biopharma has grown from a small consultancy to a trusted partner for pharmaceutical companies worldwide, providing critical insights that drive strategic decisions and market success.
              </p>
              <p>
                Today, our team of over 50 specialists works with clients ranging from emerging biotech firms to global pharmaceutical leaders, helping them navigate market challenges, identify opportunities, and achieve their strategic objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and relationships with clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts behind Synapse Biopharma's success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img  alt={member.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Synapse Biopharma?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Industry Specialization</h3>
                    <p className="text-gray-600">We focus exclusively on the pharmaceutical industry, providing deeper insights than general market research firms.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Experienced Team</h3>
                    <p className="text-gray-600">Our analysts average 15+ years of experience in pharmaceutical markets and strategic analysis.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Proprietary Methodologies</h3>
                    <p className="text-gray-600">We've developed unique research approaches specifically for pharmaceutical market analysis.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-orange-600 mr-3 h-6 w-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Global Perspective</h3>
                    <p className="text-gray-600">Our research spans markets worldwide, providing truly global insights for international strategies.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-xl"
            >
              <img  alt="Synapse Biopharma analysis in action" className="w-full h-auto" src="https://images.unsplash.com/photo-1686061593213-98dad7c599b9" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today to discuss how Synapse Biopharma can help your company navigate the pharmaceutical market landscape.
            </p>
            <Button asChild className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
