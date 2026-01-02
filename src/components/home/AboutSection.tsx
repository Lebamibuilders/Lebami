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

          <div className="mt-16 text-left">
            <h3 className="font-orbitron font-bold text-2xl gradient-text mb-6">Our Team Experts In</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-muted-foreground mb-12">
              <li>International stadium Projects</li>
              <li>Roads & Infra structural Projects</li>
              <li>Airport Runway Projects</li>
              <li>Airport Building Projects</li>
              <li>High rise Building Projects</li>
              <li>PEB Building / Steel Structural Projects</li>
              <li>Military Base Projects</li>
              <li>Residential Villa Projects</li>
            </ul>

            <h3 className="font-orbitron font-bold text-2xl gradient-text mb-6">Quality Assurance</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We maintain a strict Quality Control System on all projects. The system includes clearly defined inspection and test plans and procedures adherent with project specifications and requirements. Plans and procedures are regularly monitored and audited, both at project and corporate levels, to ensure compliance with contractual requirements.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lebami builders & developers pvt. ltd. is committed to operating a quality management system to ensure its continuity and its development to a successful Pan-India civil contractor with prestigiousand vitalprojects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <GlassCard key={stat.label} delay={i * 0.1} className="!rounded-full border-white/20 bg-white/5">
              <div className="text-center py-4 px-6 flex flex-col items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="block font-orbitron text-2xl md:text-3xl font-bold text-white mb-1"
                >
                  {stat.value}
                </motion.span>
                <span className="text-gray-300 text-xs uppercase tracking-wider">{stat.label}</span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
