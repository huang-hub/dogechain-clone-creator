import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { Community } from "@/components/Community";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <Community />
    </main>
  );
};

export default Index;