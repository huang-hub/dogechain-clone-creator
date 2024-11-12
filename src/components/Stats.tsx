import { motion } from "framer-motion";
import { Users, Zap, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100K+",
    label: "Active Users",
  },
  {
    icon: Zap,
    value: "0.001s",
    label: "Block Time",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Secure",
  },
];

export const Stats = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg"
            >
              <stat.icon className="w-12 h-12 text-doge-purple mb-4" />
              <span className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</span>
              <span className="text-gray-600">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};