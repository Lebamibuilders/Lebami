import { motion } from "framer-motion";
import { GlassCard } from "../GlassCard";
import { Link } from "react-router-dom";
import { 
  PenTool, 
  FileSearch, 
  HardHat, 
  Home, 
  Building2, 
  Mountain,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Architecture & Design",
    description: "Concept design, walkthroughs, and master planning with futuristic vision.",
  },
  {
    icon: FileSearch,
    title: "Planning & Feasibility",
    description: "Site analysis, zoning studies, and comprehensive feasibility reports.",
  },
  {
    icon: HardHat,
    title: "Construction Management",
    description: "End-to-end project execution with precision and excellence.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description: "Luxury villas, modern apartments, and bespoke living spaces.",
  },
  {
    icon: Building2,
    title: "Commercial Buildings",
    description: "Corporate offices, institutions, and convention centers.",
  },
  {
    icon: Mountain,
    title: "Infrastructure",
    description: "Large-scale development and land transformation projects.",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
          >
            WHAT WE DO
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title gradient-text"
          >
            Our Capabilities
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <GlassCard key={service.title} delay={i * 0.1}>
              <div className="p-2">
                <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-orbitron text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
