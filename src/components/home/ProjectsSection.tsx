import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

const projects = [
  { id: 1, title: "ABOOBACKAR", category: "VANIYAMKULAM", location: "India", image: "/img/1.png" },
  { id: 2, title: "KASIM EAST", category: "OTTAPALAM", location: "India", image: "/img/2.png" },
  { id: 3, title: "ABDUL MANAF", category: "NELLIKURUSHI", location: "India", image: "/img/3.png" },
  { id: 4, title: "BASHEER", category: "KONGAD", location: "India", image: "/img/4.png" },
  { id: 5, title: "PATHUTTY", category: "VANIYAMKULAM", location: "India", image: "/img/5.png" },
  { id: 6, title: "SALINI AND REGHU", category: "19-04-2022", location: "India", image: "/img/6.png" },
  { id: 7, title: "ABDUL MANAF", category: "NELLIKURUSHI", location: "India", image: "/img/7.png" },
  { id: 8, title: "MARAKKAR ALIKKAL", category: "KURUVATTUR", location: "India", image: "/img/8.png" },
  { id: 9, title: "VISWANATHAN", category: "VANIYAMKULAM", location: "India", image: "/img/9.png" },
  { id: 10, title: "ANEESH", category: "OTTAPALAM", location: "India", image: "/img/10.png" },
  { id: 11, title: "BAHSHEER", category: "THOTTAKARA", location: "India", image: "/img/11.png" },
  { id: 12, title: "BASHEER", category: "KONGAD", location: "India", image: "/img/12.png" },
  { id: 13, title: "MASJID", category: "KARAKKAD", location: "India", image: "/img/13.png" },
];

export const ProjectsSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              className="group cursor-pointer"
              onClick={() => setSelectedImage(project.image)}
            >
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Full Screen Viewer */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Full Screen Project"
                className="w-full h-full object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
