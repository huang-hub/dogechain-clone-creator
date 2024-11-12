
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Community } from "@/components/Community";
import { PriceTracker } from "@/components/PriceTracker";
import { About } from "@/components/About";
import { XFeed } from "@/components/XFeed";
import { RFQ } from "@/components/RFQ";
import { PetDoge } from "@/components/PetDoge";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dogecoin (DOGE) - The People's Cryptocurrency | Real-time Price & Information</title>
        <meta name="description" content="Explore Dogecoin (DOGE), the people's cryptocurrency. Get real-time prices, learn about mining, trading, and join the friendly community. Much wow!" />
        <meta name="keywords" content="Dogecoin, DOGE, cryptocurrency, Dogecoin price, buy Dogecoin, Dogecoin mining, Dogecoin wallet, crypto, blockchain, Elon Musk Dogecoin" />
        <meta property="og:title" content="Dogecoin (DOGE) - The People's Cryptocurrency" />
        <meta property="og:description" content="Explore Dogecoin (DOGE), the people's cryptocurrency. Get real-time prices, learn about mining, trading, and join the friendly community. Much wow!" />
        <meta property="og:image" content="public\doge-mascot-coin-up.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://doge-coin.top" />
      </Helmet>
      
      <main className="min-h-screen">
        <Hero />
        <PetDoge />
        <Stats />
        <About />
        <PriceTracker />
        <Features />
        <PetDoge />
        <RFQ />
        <XFeed />
        <Community />
      </main>
    </>
  );
};

export default Index;
