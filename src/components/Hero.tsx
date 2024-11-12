import { motion } from "framer-motion";
import { useState } from "react";

export const Hero = () => {
  const [coins, setCoins] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleDropCoin = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newCoin = {
      id: Date.now(),
      x,
      y,
    };

    setCoins(prev => [...prev, newCoin]);

    // 立即掉落
    setCoins(prev => prev.filter(coin => coin.id !== newCoin.id));
  };

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
            src="public\doge-mascot-coin-up.png"
            alt="Doge Mascot"
            className="w-64 h-64 mx-auto mb-8 animate-float"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">DogeCoin</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            "Dogecoin might be my fav cryptocurrency, it's pretty cool" - Elon Musk
          </p>
          
          <button className="bg-doge-purple hover:bg-opacity-90 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-0" onClick={handleDropCoin}>
        {coins.map(coin => (
          <motion.div
            key={coin.id}
            initial={{ opacity: 1, y: 0, x: coin.x }}
            animate={{ y: -100, x: coin.x + (Math.random() * 100 - 50), scale: 1.5 }}
            exit={{ opacity: 0 }}
            className="absolute w-16 h-16 text-4xl"
            style={{ top: coin.y, left: 0 }}
          >
            🪙
          </motion.div>
        ))}
      </div>
    </div>
  );
};
