import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Link } from "react-router-dom";
import {
  PenTool,
  FileSearch,
  HardHat,
  Home,
  Building2,
  Mountain,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: "design-development",
    icon: PenTool,
    title: "DESIGN DEVELOPMENT",
    subtitle: "Innovation in Design & Execution",
    description: "The innovation is explicitly visible in the design development and the presentation of Lebami builders & developers pvt. ltd. The architectural, electrical, mechanical and structural systems are made to perfectly blend with the whole design concept; with a clear focus on implementation, execution and estimation.",
    features: [
      "Architecture & Planning",
      "Site Evaluation and Analysis",
      "Preliminary Design, Report and Presentation",
      "Detailed Design and Reports",
      "Presentation Drawings",
      "Walkthroughs & Animation",
      "Architectural Scale Models",
      "Master Plans",
      "Urban Design & Applications",
      "Zonal Development Plan",
      "Township Housing / Low Cost Housing / Villa Project",
      "Technical & Financial Feasibility Study",
      "Heritage & Conservation",
      "Redevelopment & Revitalization",
      "Regional Planning"
    ],
  },
  {
    id: "construction-development",
    icon: HardHat,
    title: "CONSTRUCTION DEVELOPMENT",
    subtitle: "Partners in Building Success",
    description: "Lebami work as a Construction Manager’s and Project Manager’s for our clients on a routine basis. Becoming part of the team to work effectively towards the successful completion of the projects goal. Our years of experience in preliminary design, estimating and construction stages have enabled us to become solid partners focused on the needs of our clients. Building a team between the owner, architect and general contractor promotes the development of a harmonious working relationship and a unified focus toward the successful completion of the project",
    features: [
      "Residential Villa Project",
      "Multi-family Residential Complexes",
      "Multi-family Residential Villa Project",
      "Convention Centers",
      "Commercial Buildings",
      "Resort Projects",
      "Specialty Retail Buildings",
      "Class A Office Buildings",
      "Banking",
      "Performing Arts Centers",
      "Public Safety Facilities",
      "Government Facilities",
      "Student Life Facilities",
      "Field Houses and Athletic Facilities",
      "Turf football Stadiums",
      "Recreation and Fitness Centers",
      "Dining Commons",
      "Campus Energy",
      "Campus Infrastructure",
      "Secondary Education school office",
      "Pharmacies",
      "Corporate Interiors",
      "Residential Interiors",
      "Commercial Interiors",
      "Land Development"
    ],
  },
];

const Services = () => {
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
              OUR SERVICES
            </p>
            <h1 className="section-title gradient-text mb-6">
              Comprehensive Construction Solutions
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              The Lebami Management team was established by Group of professionals with wide range of experience within respective discipline and is keenly committed team, who deals with reputed companies in India as well as in Middle East
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 }}
                id={service.id}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-primary text-sm font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-8">
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

                  {/* Features Card */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <GlassCard hover={false}>
                      <div className="p-8">
                        <h3 className="font-orbitron text-lg font-semibold mb-6 text-foreground">
                          Key Capabilities
                        </h3>
                        <ul className="space-y-4">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </GlassCard>
                  </div>
                </div>

                {i < services.length - 1 && (
                  <div className="glow-line mt-20" />
                )}
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
            <div className="relative">
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
