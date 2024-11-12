import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-20 z-0" />
      
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.img
            src="https://dogechain.dog/assets/doge-computer.png"
            alt="Doge Mascot"
            className="w-64 h-64 mx-auto mb-8 animate-float"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">DogeChain</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The Most Powerful Layer 2 for Dogecoin
          </p>
          
          <button className="bg-doge-purple hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};