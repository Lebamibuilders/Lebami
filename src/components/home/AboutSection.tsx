import { motion } from "framer-motion";


const expertiseAreas = [
  { title: "International Stadium Projects", image: "https://images.unsplash.com/photo-1487466365202-1afdb86c764e?q=80&w=2070&auto=format&fit=crop" },
  { title: "Roads & Infra Projects", image: "https://images.unsplash.com/photo-1545276070-ec815f01c687?q=80&w=2070&auto=format&fit=crop" },
  { title: "Airport Runway Projects", image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2070&auto=format&fit=crop" },
  { title: "Airport Building Projects", image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop" },
  { title: "High Rise Building Projects", image: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2074&auto=format&fit=crop" },
  { title: "PEB / Steel Structures", image: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=2070&auto=format&fit=crop" },
  { title: "Military Base Projects", image: "https://images.unsplash.com/photo-1559627755-6677c77d4db2?q=80&w=2042&auto=format&fit=crop" },
  { title: "Residential Villa Projects", image: "https://images.unsplash.com/photo-1600596542815-2a4d04774c71?q=80&w=2075&auto=format&fit=crop" },
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
