import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Link } from "react-router-dom";
import {
  PenTool,
  HardHat,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  Key
} from "lucide-react";
import { BlueprintOverlay } from "@/components/BlueprintOverlay";

const workflow = [
  {
    icon: MessageSquare,
    title: "1. Consultation",
    desc: "Understanding your vision and requirements."
  },
  {
    icon: PenTool,
    title: "2. Design",
    desc: "Creating technical drawings and 3D models."
  },
  {
    icon: HardHat,
    title: "3. Construction",
    desc: "Executing with precision and quality materials."
  },
  {
    icon: Key,
    title: "4. Handover",
    desc: "Delivering your project ready for use."
  }
];

const services = [
  {
    id: "design-development",
    icon: PenTool,
    title: "PLANNING & DESIGN",
    subtitle: "We Draw Your Dream",
    description: "We make the drawings for your building. We plan where everything goes—the walls, the lights, and the pipes. We make sure it is easy to build and looks great.",
    features: [
      "Drawing Plans",
      "Checking the Land",
      "Making Models",
      "Show Pictures of Building",
      "Planning Big Areas",
      "Designing Houses",
      "Designing Offices",
      "Checking Costs",
      "Fixing Old Buildings"
    ],
  },
  {
    id: "construction-development",
    icon: HardHat,
    title: "BUILDING CONSTRUCTION",
    subtitle: "We Build It For You",
    description: "We build the building. We manage the workers and the materials. We talk to you, the architect, and the workers to make sure everyone is happy. We build it strong and fast.",
    features: [
      "Building Villas",
      "Building Apartments",
      "Building Malls",
      "Building Shops",
      "Building Offices",
      "Building Banks",
      "Building Schools",
      "Building Gyms",
      "Building Stadiums",
      "Fixing Interiors",
      "Making Land Ready"
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="bg-blueprint-grid opacity-30 absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4">
              OUR CAPABILITIES
            </p>
            <h1 className="section-title gradient-text mb-6">
              Engineering Excellence
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From initial blueprints to final handover, we deliver end-to-end construction solutions with precision and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Workflow Section (New) */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
              The Lebami Process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <GlassCard key={index} className="text-center relative">
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-primary/30 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                id={service.id}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <span className="inline-block mt-1 px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded border border-primary/30">
                          SERVICE_ID: 0{i + 1}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8 border-l-2 border-primary/30 pl-4">
                      {service.description}
                    </p>

                    <Link
                      to="/contact"
                      className="btn-neon inline-flex"
                    >
                      <span className="flex items-center gap-2">
                        Start This Service
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>

                  {/* Features Card - Using GlassCard with new Ruler Markings */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <GlassCard hover={true} className="h-full relative overflow-hidden group">
                      <BlueprintOverlay />
                      <div className="p-4 md:p-6 relative z-10">
                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                          <h3 className="font-orbitron text-lg font-semibold text-foreground">
                            Technical Scope
                          </h3>
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-1" />
                              <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </motion.div>
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
            className="glass-panel p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h3 className="font-orbitron text-3xl font-bold gradient-text mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-muted-foreground mb-8">
                Every project is unique. Let's discuss how we can tailor our services to your specific needs.
              </p>
              <Link to="/contact" className="btn-neon">
                <span>Request Consultation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
