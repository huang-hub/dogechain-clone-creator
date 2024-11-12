import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          About <span className="text-gradient">Dogecoin</span>
        </motion.h2>
        
        <Card className="backdrop-blur-sm bg-white/10">
          <CardContent className="p-6">
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="mb-4">
                Dogecoin, created by software engineers Billy Markus and Jackson Palmer in 2013, started as a playful take on cryptocurrency speculation but evolved into a vibrant digital currency with a passionate community.
              </p>
              <p className="mb-4">
                As the first "meme coin" and "dog coin," Dogecoin features the beloved Shiba Inu dog Kabosu as its mascot. Despite its humorous origins, it has grown into a legitimate cryptocurrency with a market cap that once exceeded $85 billion.
              </p>
              <p className="mb-4">
                Built on blockchain technology, Dogecoin uses proof-of-work consensus and was created from Litecoin's open-source code. Its low transaction fees and friendly community make it perfect for microtransactions and online tipping.
              </p>
              <p>
                With no maximum supply limit and an inflation rate of 5 billion DOGE per year, Dogecoin maintains a consistent growth rate while remaining accessible to new users. The community's charitable initiatives and support from figures like Elon Musk have helped establish Dogecoin as more than just a meme.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};