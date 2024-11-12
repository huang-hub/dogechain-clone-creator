import { motion } from "framer-motion";
import { Twitter, Github, MessageSquare } from "lucide-react";

export const Community = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16"
        >
          Join Our <span className="text-gradient">Community</span>
        </motion.h2>
        
        <div className="flex justify-center space-x-8">
          {[Twitter, Github, MessageSquare].map((Icon, index) => (
            <motion.a
              key={index}
              href="https://github.com/huang-hub/dogechain-clone-creator?tab=readme-ov-file"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <Icon className="w-8 h-8 text-doge-purple" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
