import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { TrendingUp, Award, Globe, Settings } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "10+", label: "Years Experience" },
  { icon: Award, value: "100+", label: "Projects Delivered" },
  { icon: Globe, value: "2", label: "Countries" },
  { icon: Settings, value: "360°", label: "Solutions" },
];

export const AboutSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
          >
            WHO WE ARE
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text mb-8"
          >
            Building Excellence
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            LEBAMI is a future-driven construction and engineering firm delivering architectural 
            excellence, intelligent planning, and precision-built projects across residential, 
            commercial, and infrastructure sectors. With operations spanning India and Qatar, 
            we bring world-class standards to every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1}>
              <div className="text-center py-6">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="block font-orbitron text-3xl md:text-4xl font-bold gradient-text-blue mb-2"
                >
                  {stat.value}
                </motion.span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
