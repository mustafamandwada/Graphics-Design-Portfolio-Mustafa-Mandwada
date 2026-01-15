import { motion } from "framer-motion";

const stats = [
  { label: "Projects Done", value: "2000+" },
  { label: "Clients Served", value: "1000+" },
  { label: "Years Experience", value: "11+" },
];

export function ImpactSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-6xl md:text-7xl font-display font-bold mb-4">{stat.value}</div>
              <div className="text-xl opacity-80 uppercase tracking-widest font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
