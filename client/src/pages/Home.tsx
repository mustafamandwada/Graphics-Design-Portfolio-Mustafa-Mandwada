import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { SkillsSlider } from "@/components/sections/SkillsSlider";
import { GallerySection } from "@/components/sections/GallerySection";
import { Contact } from "@/components/sections/Contact";
import { PORTFOLIO_CATEGORIES } from "@/lib/constants";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <ImpactSection />
      <SkillsSlider />
      
      <div id="portfolio">
        {PORTFOLIO_CATEGORIES.map((category, index) => (
          <GallerySection
            key={category.id}
            id={category.id}
            title={category.title}
            description={category.description}
            count={category.count}
            isAlternate={index % 2 === 0}
          />
        ))}
      </div>

      <Contact />
    </div>
  );
}
