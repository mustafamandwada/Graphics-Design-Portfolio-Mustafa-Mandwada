import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
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
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-tr from-muted to-muted/50">
                 {/* This would be the real photo */}
                 <span className="text-lg font-medium">Profile Photo Placeholder</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-sm rounded-xl border border-border shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    10+
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
              I Transform Ideas into Visual Masterpieces
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I am a dedicated graphic designer passionate about creating unique visual identities. 
              From the smallest business card to the largest billboard, I approach every project with 
              creativity, precision, and a commitment to excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {["Brand Identity", "Print Design", "Digital Marketing", "Packaging Solutions"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="text-primary font-semibold border-b-2 border-primary pb-1 hover:opacity-70 transition-opacity">
              Get in Touch →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
