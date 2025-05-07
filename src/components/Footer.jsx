
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-orange-500">Synapse</span>
              <span className="text-2xl font-bold">Biopharma</span>
            </div>
            <p className="text-gray-400 mb-6">
              Providing cutting-edge market analysis services to pharmaceutical companies worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-orange-500 transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#market-analysis" className="text-gray-400 hover:text-orange-500 transition-colors">Market Analysis</Link>
              </li>
              <li>
                <Link to="/services#competitive-intelligence" className="text-gray-400 hover:text-orange-500 transition-colors">Competitive Intelligence</Link>
              </li>
              <li>
                <Link to="/services#trend-forecasting" className="text-gray-400 hover:text-orange-500 transition-colors">Trend Forecasting</Link>
              </li>
              <li>
                <Link to="/services#regulatory-insights" className="text-gray-400 hover:text-orange-500 transition-colors">Regulatory Insights</Link>
              </li>
              <li>
                <Link to="/services#strategic-consulting" className="text-gray-400 hover:text-orange-500 transition-colors">Strategic Consulting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Innovation Drive, Boston, MA 02110, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">info@synapsebiopharma.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Synapse Biopharma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
