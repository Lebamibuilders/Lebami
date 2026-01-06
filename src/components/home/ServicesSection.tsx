import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PenTool,
  HardHat,
  Leaf,
  Map,
  ArrowRight,
  Ruler
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "ARCHITECTURAL DESIGN",
    subtitle: "CONCEPT TO BLUEPRINT",
    description: "Comprehensive blueprint development, structural analysis, and feasibility studies to ensure project viability and design excellence.",
  },
  {
    icon: HardHat,
    title: "CONSTRUCTION MANAGEMENT",
    subtitle: "PRECISION EXECUTION",
    description: "End-to-end site supervision, resource allocation, and timeline management to deliver complex structures with precision and efficiency.",
  },
  {
    icon: Leaf,
    title: "SUSTAINABLE ENGINEERING",
    subtitle: "FUTURE-PROOF SOLUTIONS",
    description: "Integrating eco-friendly technologies and materials to create energy-efficient, LEED-certified structures for a greener tomorrow.",
  },
  {
    icon: Map,
    title: "URBAN PLANNING",
    subtitle: "COMMUNITY ARCHITECTURE",
    description: "Designing cohesive urban environments that blend residential, commercial, and public spaces for optimal functionality and flow.",
  },
];

export const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  // Parallax for floating particles
  const yParticles = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section ref={containerRef} className="py-16 md:py-32 relative bg-[#0a0a0a] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bmw-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-bmw-gold/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay" />
      </div>

      {/* Floating Particles */}
      <motion.div style={{ y: yParticles }} className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-bmw-gold/30 rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column - Sticky Title */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 self-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-bmw-gold font-montserrat font-medium tracking-[0.4em] text-sm uppercase block mb-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
                OUR <br /> EXPERTISE
              </h2>
              <div className="h-1 w-20 bg-bmw-gold mb-8" />
              <p className="text-white/60 text-lg font-light leading-relaxed mb-8 max-w-sm">
                We deliver excellence across every phase of the project lifecycle. From visionary concepts to precise execution, our capabilities are defined by quality and innovation.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-white font-montserrat font-medium text-sm tracking-widest uppercase group hover:text-bmw-gold transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative"
                >
                  {/* Card Background & Border */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-500 group-hover:border-bmw-gold/50 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)]" />

                  {/* Inner Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-bmw-gold/5 to-transparent pointer-events-none" />

                  <div className="relative p-8 flex flex-col h-full transition-transform duration-500 group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-12 h-12 mb-6 rounded-lg border border-white/10 flex items-center justify-center bg-black/20 group-hover:border-bmw-gold/40 group-hover:bg-bmw-gold/10 transition-all duration-300">
                      <service.icon strokeWidth={1.5} className="w-6 h-6 text-white/80 group-hover:text-bmw-gold transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="font-montserrat text-xl font-bold text-white mb-1 group-hover:text-bmw-gold transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs font-montserrat tracking-widest text-white/40 uppercase mb-4 block">
                      {service.subtitle}
                    </span>

                    <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-white/50 text-xs font-bold tracking-widest uppercase group-hover:text-bmw-gold transition-colors">
                      Learn More
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
