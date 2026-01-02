import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Target, Eye, Heart, Globe, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const timeline = [
  { year: "2014", event: "LEBAMI founded in India" },
  { year: "2016", event: "First major commercial project completed" },
  { year: "2018", event: "Expanded operations to Qatar" },
  { year: "2020", event: "100+ projects milestone reached" },
  { year: "2022", event: "ISO 9001:2015 certification achieved" },
  { year: "2024", event: "Launched sustainable construction initiative" },
];

const values = [
  {
    icon: Eye,
    title: "Vision",
    description: "To be the leading force in transforming architectural dreams into sustainable, future-ready structures that define skylines and inspire communities.",
  },
  {
    icon: Target,
    title: "Mission",
    description: "Delivering exceptional construction solutions through innovative design, precision engineering, and unwavering commitment to quality and client satisfaction.",
  },
  {
    icon: Heart,
    title: "Philosophy",
    description: "We believe that every structure tells a story. Our philosophy centers on creating spaces that harmonize functionality, aesthetics, and sustainability.",
  },
];

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "OHSAS 18001 Health & Safety",
  "Green Building Council Member",
];

const About = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="grid-bg opacity-30" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4">
              ABOUT LEBAMI
            </p>
            <h1 className="section-title gradient-text mb-6">
              Engineering Excellence Since 2014
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A decade of transforming visions into landmark structures across 
              India and Qatar, setting new standards in construction excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Philosophy */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <GlassCard key={value.title} delay={i * 0.15}>
                <div className="p-4">
                  <div className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-2xl font-semibold mb-4 gradient-text-blue">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Geographical Presence */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
            >
              GLOBAL PRESENCE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title gradient-text"
            >
              Where We Operate
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <GlassCard delay={0}>
              <div className="p-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-orbitron text-2xl font-semibold mb-3 text-foreground">India</h3>
                <p className="text-muted-foreground">
                  Headquarters and primary operations spanning multiple states, 
                  delivering residential, commercial, and infrastructure projects.
                </p>
              </div>
            </GlassCard>
            <GlassCard delay={0.15}>
              <div className="p-6 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-orbitron text-2xl font-semibold mb-3 text-foreground">Qatar</h3>
                <p className="text-muted-foreground">
                  Strategic Middle East operations focusing on luxury residential 
                  and landmark commercial developments.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
            >
              OUR JOURNEY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title gradient-text"
            >
              Timeline of Growth
            </motion.h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/20" />
            
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="timeline-node" />
                </div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-panel p-4">
                    <span className="font-orbitron text-primary font-bold">{item.year}</span>
                    <p className="text-foreground mt-1">{item.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
            >
              STANDARDS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title gradient-text"
            >
              Certifications & Standards
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, i) => (
              <GlassCard key={cert} delay={i * 0.1}>
                <div className="p-4 text-center">
                  <Award className="w-10 h-10 text-primary mx-auto mb-4" />
                  <p className="text-foreground text-sm font-medium">{cert}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="font-orbitron text-3xl font-bold gradient-text mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <Link to="/contact" className="btn-neon">
              <span>Get in Touch</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
