import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Community } from "@/components/Community";
import { PriceTracker } from "@/components/PriceTracker";
import { About } from "@/components/About";
import { XFeed } from "@/components/XFeed";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <About />
      <PriceTracker />
      <Features />
      <XFeed />
      <Community />
    </main>
  );
};

export default Index;