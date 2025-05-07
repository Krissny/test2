
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Synapse Biopharma's market analysis was instrumental in our successful product launch. Their insights helped us identify key market opportunities and optimize our go-to-market strategy.",
    author: "Sarah Johnson",
    position: "VP of Marketing, PharmaTech Inc.",
    rating: 5,
  },
  {
    id: 2,
    content: "The competitive intelligence provided by Synapse gave us a clear advantage in a crowded market. Their thorough analysis helped us differentiate our product and capture market share.",
    author: "Michael Chen",
    position: "Chief Strategy Officer, BioInnovate",
    rating: 5,
  },
  {
    id: 3,
    content: "Working with Synapse Biopharma has transformed our approach to market research. Their team delivers actionable insights that directly impact our strategic decisions.",
    author: "Elena Rodriguez",
    position: "Director of Business Development, MediCore",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-orange-600">Clients Say</span>
          </h2>
          <p className="text-gray-600">
            We've helped pharmaceutical companies of all sizes achieve their strategic goals through data-driven insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md p-6 relative card-hover"
            >
              <div className="absolute -top-4 left-6 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">"</span>
              </div>
              <div className="flex mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img  alt={testimonial.author} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590926932353-01713ae6848a" />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
