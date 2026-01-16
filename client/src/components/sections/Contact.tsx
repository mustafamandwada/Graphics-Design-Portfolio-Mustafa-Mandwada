import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MapPin, Linkedin, MessageCircle } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-primary-foreground">Let's Create Something Amazing</h2>
          <p className="text-xl text-primary-foreground/80">
            Ready to elevate your brand? Reach out to me for a consultation or quote.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <motion.a 
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="flex flex-col items-center p-6 bg-black rounded-2xl border border-white/10 hover:bg-black/80 transition-colors shadow-xl"
          >
            <div className="w-12 h-12 bg-[#25D366]/20 rounded-full flex items-center justify-center mb-4 text-[#25D366]">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-white">WhatsApp</h3>
            <p className="text-sm text-white/70">{CONTACT_INFO.whatsapp}</p>
          </motion.a>

          <motion.a 
             href={`mailto:${CONTACT_INFO.email}`}
             whileHover={{ y: -5 }}
             className="flex flex-col items-center p-6 bg-black rounded-2xl border border-white/10 hover:bg-black/80 transition-colors shadow-xl"
          >
            <div className="w-12 h-12 bg-[#EA4335]/20 rounded-full flex items-center justify-center mb-4 text-[#EA4335]">
              <Mail className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-white">Email</h3>
            <p className="text-sm text-white/70 truncate w-full text-center">{CONTACT_INFO.email}</p>
          </motion.a>

          <motion.a 
             href={CONTACT_INFO.linkedin}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ y: -5 }}
             className="flex flex-col items-center p-6 bg-black rounded-2xl border border-white/10 hover:bg-black/80 transition-colors shadow-xl"
          >
            <div className="w-12 h-12 bg-[#0077B5]/20 rounded-full flex items-center justify-center mb-4 text-[#0077B5]">
              <Linkedin className="w-6 h-6 fill-current" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-white">LinkedIn</h3>
            <p className="text-sm text-white/70">Let's connect</p>
          </motion.a>

          <motion.a 
             href="#"
             whileHover={{ y: -5 }}
             className="flex flex-col items-center p-6 bg-black rounded-2xl border border-white/10 hover:bg-black/80 transition-colors shadow-xl"
          >
            <div className="w-12 h-12 bg-[#E4405F]/20 rounded-full flex items-center justify-center mb-4 text-[#E4405F]">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-white">Instagram</h3>
            <p className="text-sm text-white/70">{CONTACT_INFO.instagram}</p>
          </motion.a>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Mustafa Mandwada. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
