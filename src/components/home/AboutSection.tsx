import { motion } from "framer-motion";
import projectVilla from "@/assets/project-villa.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";
import heroImage from "@/assets/hero-building.jpg";

const expertiseAreas = [
  { title: "International Stadium Projects", image: heroImage },
  { title: "Roads & Infra Projects", image: projectInfra },
  { title: "Airport Runway Projects", image: projectInfra },
  { title: "Airport Building Projects", image: heroImage },
  { title: "High Rise Building Projects", image: projectCommercial },
  { title: "PEB / Steel Structures", image: projectCommercial },
  { title: "Military Base Projects", image: projectInfra },
  { title: "Residential Villa Projects", image: projectVilla },
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
            className="section-title text-white mb-8"
          >
            Strong Buildings. Good Work.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Lebami builds strong places for businesses. We work in India and Qatar. We are good at making places where people work and shop. We make sure every brick and beam is right.
          </motion.p>

          <div className="mt-20">
            <h3 className="font-orbitron font-bold text-3xl text-white mb-12">What We Build</h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {expertiseAreas.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-primary transition-all duration-500 relative mb-4 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <h4 className="font-orbitron font-semibold text-white/90 text-sm md:text-base max-w-[150px] leading-tight group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            <h3 className="font-orbitron font-bold text-2xl text-white mb-6">We Check Everything</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We have a strict list of checks. We check the materials. We check the work. We make sure everything follows the plan. We do this so your building is safe and lasts a long time.
            </p>
            <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/50 pl-4 py-2 bg-white/5 rounded-r-lg">
              Lebami wants to be the best builder. We promise to do good work for you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
