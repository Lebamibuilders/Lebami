import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import completedProject1 from '../assets/completed-project-1.jpg';
import completedProject2 from '../assets/completed-project-2.jpg';
import completedProject3 from '../assets/completed-project-3.jpg';
import completedProject4 from '../assets/completed-project-4.jpg';
import completedProject5 from '../assets/completed-project-5.jpg';

// Filtered unique high-res images from user list
const projectImages = [
  completedProject1,
  completedProject2,
  completedProject3,
  completedProject4,
  completedProject5,
  "https://lebami.in/wp-content/uploads/2021/02/12.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery4.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/12.-1.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallary.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery1.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery3.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery7.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery5.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery2.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery6.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-gallery8.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/lebami-service.jpg",
  "https://lebami.in/wp-content/uploads/2021/02/JPEG-3...jpg"
];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = projectImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % projectImages.length;
      setSelectedImage(projectImages[nextIndex]);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage) {
      const currentIndex = projectImages.indexOf(selectedImage);
      const prevIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
      setSelectedImage(projectImages[prevIndex]);
    }
  };

  return (
    <main className="pt-24 min-h-screen">
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-orbitron text-primary tracking-[0.3em] text-sm mb-4">
              OUR WORK
            </p>
            <h1 className="section-title gradient-text mb-6">
              Completed Projects
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl glass-panel"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Project Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
