import { motion } from "framer-motion";
import aiLogo from "@assets/Adobe_Illustrator_CC_icon.svg_1768444067639.png";
import psLogo from "@assets/Adobe_Photoshop_CC_icon.svg_1768444071677.png";
import aeLogo from "@assets/Adobe_After_Effects_CC_icon.svg_1768444075812.png";

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
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {skills.map((skill, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-secondary/50 px-8 py-4 rounded-xl border border-border/50 hover:bg-secondary transition-colors"
            >
              <img src={skill.logo} alt={skill.name} className="w-10 h-10 object-contain rounded-lg" />
              <span className="text-xl font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
