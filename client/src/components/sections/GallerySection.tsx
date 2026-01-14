import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOGO_ASSETS, POSTER_ASSETS, SOCIAL_ASSETS } from "@/lib/constants";

interface GallerySectionProps {
  id: string;
  title: string;
  description: string;
  count: number;
  isAlternate?: boolean;
}

export function GallerySection({ id, title, description, count, isAlternate = false }: GallerySectionProps) {
  const isLogoSection = id === 'logos';
  const isPosterSection = id === 'posters';
  const isSocialSection = id === 'social-media';
  const items = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <section 
      id={id} 
      className={cn(
        "py-24 border-t border-border/40",
        isAlternate ? "bg-muted/30" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-3xl">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            let assetImage = null;
            if (isLogoSection) {
              assetImage = LOGO_ASSETS[index] || null;
            } else if (isPosterSection) {
              assetImage = POSTER_ASSETS[index] || null;
            } else if (isSocialSection) {
              assetImage = SOCIAL_ASSETS[index] || null;
            }
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group aspect-square relative bg-secondary rounded-xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                {assetImage ? (
                  <img 
                    src={assetImage} 
                    alt={`${title} design ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground/40 group-hover:text-primary/60 transition-colors">
                    <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
                    <span className="text-sm font-medium">Design {item}</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
