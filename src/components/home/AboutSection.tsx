import { motion } from "framer-motion";
import { useRef } from "react";
import militaryImg from "@/assets/project-military.png";
import airportImg from "@/assets/project-airport.png";
import roadsImg from "@/assets/project-roads.png";
import stadiumImg from "@/assets/project-stadium.png";
import runwayImg from "@/assets/project-runway.png";
import highriseImg from "@/assets/project-highrise.png";
import steelImg from "@/assets/project-steel.png";
import villaImg from "@/assets/project-villa.png";

const projects = [
  {
    title: "Defense Infrastructure",
    description: "Strategic military facilities & command centers",
    image: militaryImg,
  },
  {
    title: "Aviation Hubs",
    description: "International terminals & logistic gateways",
    image: airportImg,
  },
  {
    title: "Civil Networks",
    description: "Highways, bridges & urban connectivity",
    image: roadsImg,
  },
  {
    title: "Sports Complexes",
    description: "World-class arenas & performance centers",
    image: stadiumImg,
  },
  {
    title: "Aeronautical Pavement",
    description: "Precision runway & taxiway engineering",
    image: runwayImg,
  },
  {
    title: "Vertical Developments",
    description: "Iconic high-rise commercial towers",
    image: highriseImg,
  },
  {
    title: "Industrial Steel",
    description: "Large-span PEB & manufacturing structures",
    image: steelImg,
  },
  {
    title: "Luxury Estates",
    description: "Premium residential villa communities",
    image: villaImg,
  },
];

export const AboutSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-32 relative overflow-hidden bg-[#09090b]">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-white mb-4"
          >
            Sectors of Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm uppercase tracking-[0.3em] font-light"
          >
            Comprehensive Engineering Capabilities
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 md:gap-8 px-6 pb-12 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex-shrink-0 w-[260px] md:w-[380px] snap-center group relative cursor-pointer"
          >
            {/* Card Container */}
            <div className="relative h-[380px] md:h-[500px] w-full rounded-[20px] overflow-hidden transform transition-all duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">

              {/* Image Layer */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                {/* Dark Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
              </div>

              {/* Content Layer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end h-full">
                <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 font-montserrat leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-xs md:text-sm font-light tracking-wide border-l-[1px] border-primary/0 pl-0 transition-all duration-500 group-hover:border-primary group-hover:pl-4">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Gold Accent (Border Glow) */}
              <div className="absolute inset-0 rounded-[20px] border border-primary/0 transition-all duration-500 group-hover:border-primary/50 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none rounded-b-[20px]" />
            </div>
          </motion.div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="w-6 flex-shrink-0" />
      </div>
    </section>
  );
};
