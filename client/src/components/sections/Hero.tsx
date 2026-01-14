import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_dark_creative_graphic_design_background.png";

export function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-30 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary/80 text-sm font-medium mb-6 tracking-wide uppercase">
            Professional Graphic Design Studio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-primary">
            Design That <br className="hidden md:block" /> Speaks Volumes
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I craft visual experiences that define brands. From logos to packaging, I turn ideas into iconic designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('logos')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:opacity-90 transition-opacity min-w-[160px]"
            >
              View Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-full font-medium text-lg hover:bg-secondary/80 transition-colors min-w-[160px]"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToWork}
      >
        <ArrowDown className="animate-bounce w-8 h-8" />
      </motion.div>
    </section>
  );
}
