import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

export const PetDoge = () => {
  const [coins, setCoins] = useState<{ id: number; x: number; y: number }[]>([]);
  const { toast } = useToast();
  
  const handlePetDoge = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newCoin = {
      id: Date.now(),
      x,
      y,
    };
    
    setCoins(prev => [...prev, newCoin]);
    
    toast({
      title: "Much wow!",
      description: "You petted the Doge! +1 virtual Dogecoin",
    });
    
    // Remove coin after animation
    setTimeout(() => {
      setCoins(prev => prev.filter(coin => coin.id !== newCoin.id));
    }, 1000);
  };

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-16"
        >
          Pet the <span className="text-gradient">Doge</span>
        </motion.h2>
        
        <div className="relative inline-block">
          <motion.img
            src="/click-on-dogecoin.png"
            alt="Dogecoin Mascot"
            className="w-64 h-64 cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            onClick={handlePetDoge}
          />
          
          <AnimatePresence>
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
          </AnimatePresence>
        </div>
        
        <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
          Click on Doge to show some love! Each pet generates a virtual Dogecoin. 
          Remember, 1 DOGE = 1 DOGE, but happiness is priceless! 🐕
        </p>
      </div>
    </div>
  );
};
