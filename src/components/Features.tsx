import { motion } from "framer-motion";
import { Rocket, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Experience blazing fast transactions with minimal fees",
  },
  {
    icon: Lock,
    title: "Secure",
    description: "Built with industry-leading security standards",
  },
  {
    icon: Zap,
    title: "Scalable",
    description: "Handles thousands of transactions per second",
  },
];

export const Features = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose <span className="text-gradient">DogeChain</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-doge-purple mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};