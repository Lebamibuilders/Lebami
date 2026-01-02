import { motion } from "framer-motion";
import { Eye, Zap, Shield, Rocket } from "lucide-react";

const timelineItems = [
  {
    icon: Eye,
    title: "Vision-Driven Design",
    description: "Conceptualizing spaces that inspire and endure for generations.",
  },
  {
    icon: Zap,
    title: "Precision Engineering",
    description: "Technical excellence in every calculation and specification.",
  },
  {
    icon: Shield,
    title: "Transparent Execution",
    description: "Clear communication and accountability throughout the project lifecycle.",
  },
  {
    icon: Rocket,
    title: "Future-Ready Construction",
    description: "Building with tomorrow's technology and sustainability in mind.",
  },
];

export const WhyChooseSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
          >
            WHY LEBAMI
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text"
          >
            Our Philosophy
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />
          
          {timelineItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className="timeline-node animate-pulse-glow" />
              </div>
              
              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6"
                >
                  <div className={`flex items-center gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-orbitron text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
