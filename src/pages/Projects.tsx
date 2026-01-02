import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, X } from "lucide-react";
import projectVilla from "@/assets/project-villa.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

const projects = [
  {
    id: 1,
    title: "Azure Heights Villa",
    category: "Residential",
    location: "Doha, Qatar",
    image: projectVilla,
    description: "A luxury waterfront villa featuring contemporary design with panoramic ocean views, smart home integration, and sustainable building practices.",
    scope: "Complete design and construction of a 5-bedroom luxury villa with infinity pool, landscaped gardens, and private beach access.",
    outcome: "Delivered ahead of schedule with LEED Gold certification for sustainable construction.",
  },
  {
    id: 2,
    title: "Nexus Corporate Tower",
    category: "Commercial",
    location: "Mumbai, India",
    image: projectCommercial,
    description: "A 25-story corporate headquarters featuring cutting-edge architecture, energy-efficient systems, and world-class amenities.",
    scope: "Full turnkey construction including MEP, interiors, and smart building management systems.",
    outcome: "Achieved 40% energy savings through innovative design and won Best Commercial Building Award 2023.",
  },
  {
    id: 3,
    title: "Skyline Bridge",
    category: "Infrastructure",
    location: "Al Wakrah, Qatar",
    image: projectInfra,
    description: "An iconic cable-stayed bridge spanning 800 meters, designed to become a landmark while serving critical transportation needs.",
    scope: "Design consultation and construction management for the main bridge structure and approach roads.",
    outcome: "Successfully completed connecting two major districts, reducing commute times by 45%.",
  },
  {
    id: 4,
    title: "Emerald Gardens",
    category: "Residential",
    location: "Bangalore, India",
    image: projectVilla,
    description: "A premium gated community featuring 120 luxury apartments with resort-style amenities and lush landscaping.",
    scope: "Master planning, architecture, and construction of the entire township including clubhouse and recreational facilities.",
    outcome: "100% sold out before completion, setting new benchmarks for residential quality in the region.",
  },
  {
    id: 5,
    title: "Metro Convention Center",
    category: "Commercial",
    location: "Delhi, India",
    image: projectCommercial,
    description: "A state-of-the-art convention center with flexible spaces capable of hosting international events and exhibitions.",
    scope: "Complete design and construction including acoustics engineering, AV systems, and modular hall configurations.",
    outcome: "Hosted G20 summit events, establishing itself as a premier venue for international gatherings.",
  },
  {
    id: 6,
    title: "Coastal Highway",
    category: "Infrastructure",
    location: "Lusail, Qatar",
    image: projectInfra,
    description: "A 12km coastal highway with integrated cycling paths, pedestrian walkways, and smart traffic management.",
    scope: "Engineering and construction of the highway including drainage systems, lighting, and landscaping.",
    outcome: "Improved coastal connectivity while creating a scenic recreational corridor for the community.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
              OUR PORTFOLIO
            </p>
            <h1 className="section-title gradient-text mb-6">
              Built Reality
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our portfolio of landmark projects spanning residential, 
              commercial, and infrastructure sectors across India and Qatar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-orbitron text-sm tracking-wider transition-all duration-300 rounded-lg ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-foreground"
                    : "glass-panel text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="image-overlay" />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 text-xs font-orbitron tracking-wider bg-primary/20 text-primary rounded-full mb-3 border border-primary/30">
                        {project.category}
                      </span>
                      <h3 className="font-orbitron text-xl font-semibold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </p>
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-panel max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="image-overlay" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 glass-panel flex items-center justify-center hover:bg-primary/20"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-orbitron tracking-wider bg-primary/20 text-primary rounded-full mb-4 border border-primary/30">
                  {selectedProject.category}
                </span>
                
                <h2 className="font-orbitron text-3xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h2>
                
                <p className="text-muted-foreground flex items-center gap-1 mb-6">
                  <MapPin className="w-4 h-4" />
                  {selectedProject.location}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-orbitron text-lg font-semibold text-primary mb-2">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.description}</p>
                  </div>
                  
                  <div className="glow-line" />
                  
                  <div>
                    <h3 className="font-orbitron text-lg font-semibold text-primary mb-2">Scope</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.scope}</p>
                  </div>
                  
                  <div className="glow-line" />
                  
                  <div>
                    <h3 className="font-orbitron text-lg font-semibold text-primary mb-2">Outcome</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.outcome}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link to="/contact" className="btn-neon">
                    <span className="flex items-center gap-2">
                      Start Similar Project
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Have a Project in Mind?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life with the same excellence.
            </p>
            <Link to="/contact" className="btn-neon">
              <span>Start Your Project</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
