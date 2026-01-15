import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import profilePic from "@assets/Profile_pic_1768413423892.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo Holder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-muted rounded-2xl overflow-hidden relative shadow-2xl">
              <img 
                src={profilePic} 
                alt="Mustafa Mandwada" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Decorative elements */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    11+
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Years of Experience</p>
                    <p className="text-sm text-muted-foreground">Delivering excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Who I Am</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a Creative Graphic Designer with over 11 years of experience in Logos, posters, banners, brochures, catalogues, and social media posts, focused on clean, modern & performance-driven design. Skilled in motion graphics, I have developed multiple explainer videos and motion graphs for different businesses. I have a strong visualization in creating ideas and creating visually compelling work that supports business growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Brand Identity", "Print Design", "Motion Graphics", "Explainer Videos"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-primary font-semibold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">
              Hire Me →
            </button>
          </motion.div>
        </div>
      </div>
      {/* Visual divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-primary/30 rounded-full" />
    </section>
  );
}
