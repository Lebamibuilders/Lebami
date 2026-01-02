import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projectVilla from "@/assets/project-villa.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";

const projects = [
  { id: 1, title: "ABOOBACKAR", category: "VANIYAMKULAM", location: "India", image: projectVilla },
  { id: 2, title: "KASIM EAST", category: "OTTAPALAM", location: "India", image: projectCommercial },
  { id: 3, title: "ABDUL MANAF", category: "NELLIKURUSHI", location: "India", image: projectInfra },
  { id: 4, title: "BASHEER", category: "KONGAD", location: "India", image: projectVilla },
  { id: 5, title: "PATHUTTY", category: "VANIYAMKULAM", location: "India", image: projectCommercial },
  { id: 6, title: "SALINI AND REGHU", category: "Residential", location: "India", image: projectInfra },
  { id: 7, title: "MARAKKAR ALIKKAL", category: "KURUVATTUR", location: "India", image: projectVilla },
  { id: 8, title: "VISWANATHAN", category: "VANIYAMKULAM", location: "India", image: projectCommercial },
  { id: 9, title: "ANEESH", category: "OTTAPALAM", location: "India", image: projectInfra },
  { id: 10, title: "BAHSHEER", category: "THOTTAKARA", location: "India", image: projectVilla },
  { id: 11, title: "MASJID", category: "KARAKKAD", location: "India", image: projectCommercial },
];

export const ProjectsSection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4"
            >
              OUR WORK
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title gradient-text"
            >
              Project Gallery
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary font-orbitron text-sm tracking-wider hover:gap-3 transition-all duration-300"
            >
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/projects`} className="block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="image-overlay" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 glass-panel backdrop-blur-md bg-white/10 border border-white/20 rounded-xl transition-all duration-300 group-hover:bg-white/20">
                    <span className="inline-block px-3 py-1 text-xs font-orbitron tracking-wider bg-black/40 text-primary rounded-full mb-2 border border-primary/30">
                      {project.category}
                    </span>
                    <h3 className="font-orbitron text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs">{project.location}</p>
                  </div>

                  {/* Hover Border Glow */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
