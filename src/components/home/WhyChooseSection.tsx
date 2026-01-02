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
          <div className="glass-card p-8 md:p-12">
            <p className="text-muted-foreground text-lg leading-relaxed text-center">
              The Lebami management team was established by Group of professionals with wide range of experience within respective discipline and is keenly committed team, who deals with reputed companies in india as well as in Middle East. Lebami contributed highly qual¬ified and well compete labor force and attired in an innovative utilization of constructional ability and techniques upon design, develop, construct commercial, Residential projects and provide services to the Customer with an objective to exceed their expectations. Today the company name has become synonymous with the quality Construction business in india
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
