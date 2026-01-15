import { motion } from "framer-motion";
import aiLogo from "@assets/stock_images/adobe_illustrator_lo_9fc0dbdc.jpg";
import psLogo from "@assets/stock_images/adobe_photoshop_logo_0982c432.jpg";
import aeLogo from "@assets/stock_images/adobe_after_effects__1b741652.jpg";

const skills = [
  { name: "Adobe Illustrator", logo: aiLogo },
  { name: "Adobe Photoshop", logo: psLogo },
  { name: "Adobe After Effects", logo: aeLogo },
];

export function SkillsSlider() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-display font-bold text-center">Software & Skills</h2>
      </div>
      
      <div className="flex overflow-hidden group">
        <motion.div 
          className="flex gap-12 py-4 animate-scroll whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-4 bg-secondary/50 px-8 py-4 rounded-xl border border-border/50">
              <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain rounded-lg" />
              <span className="text-xl font-medium">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
