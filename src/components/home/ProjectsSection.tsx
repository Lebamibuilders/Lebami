import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

// Top 9 images for Home Page Preview
const previewProjects = [
  "https://lebami.in/wp-content/uploads/2022/04/manaf-vaniyamkulam-scaled.jpg",
  "https://lebami.in/wp-content/uploads/2022/02/post3-01-2048x2048.jpg",
  "https://lebami.in/wp-content/uploads/2022/02/post4-01-2048x2048.jpg",
  "https://lebami.in/wp-content/uploads/2022/02/postno1-01-2048x2048.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/manaf-nellikkurissi-scaled.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/shebber-1-scaled.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/12-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/3-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8212-2048x1366.jpg",
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
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel">
                <img
                  src={image}
                  alt={`Project ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="image-overlay" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />

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
