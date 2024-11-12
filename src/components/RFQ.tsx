import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const RFQ = () => {
  return (
    <div className="py-20 bg-white/5">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Frequently Asked Questions about <span className="text-gradient">Dogecoin</span>
        </motion.h2>
        
        <img src="/02dogecoin.png" alt="Dogecoin Poster 2" className="mb-4 w-full" />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/10">
              <CardHeader>
                <CardTitle className="text-xl">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is Dogecoin?",
    answer: "Dogecoin is a peer-to-peer digital currency, created as a 'joke' cryptocurrency featuring the Shiba Inu dog from the 'Doge' meme. Despite its humorous origins, it has grown into a significant cryptocurrency."
  },
  {
    question: "How does Dogecoin mining work?",
    answer: "Dogecoin uses a Proof-of-Work consensus mechanism similar to Bitcoin. Miners solve complex mathematical problems to validate transactions and are rewarded with new Dogecoins."
  },
  {
    question: "What makes Dogecoin unique?",
    answer: "Dogecoin stands out for its strong community, low transaction fees, and infinite supply. It's often used for tipping and charitable causes within its vibrant ecosystem."
  },
  {
    question: "Is Dogecoin a good investment?",
    answer: "Like all cryptocurrencies, Dogecoin carries risks. Its value can be volatile, and it's important to do thorough research and never invest more than you can afford to lose."
  },
  {
    question: "How can I buy Dogecoin?",
    answer: "You can buy Dogecoin on major cryptocurrency exchanges like Binance, Coinbase, and Kraken. You'll need to create an account, verify your identity, and transfer funds."
  },
  {
    question: "What is the future of Dogecoin?",
    answer: "Dogecoin continues to evolve with ongoing development and growing adoption. Its future depends on community support, technological improvements, and market conditions."
  }
];
