
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, BarChart, Globe } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "100+",
    label: "Clients Worldwide",
    icon: Users,
    color: "text-orange-600",
  },
  {
    id: 2,
    value: "15+",
    label: "Years Experience",
    icon: Award,
    color: "text-blue-600",
  },
  {
    id: 3,
    value: "500+",
    label: "Market Reports",
    icon: BarChart,
    color: "text-green-600",
  },
  {
    id: 4,
    value: "30+",
    label: "Countries Covered",
    icon: Globe,
    color: "text-purple-600",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`${stat.color} mx-auto mb-4 w-12 h-12 rounded-full bg-opacity-10 flex items-center justify-center`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
