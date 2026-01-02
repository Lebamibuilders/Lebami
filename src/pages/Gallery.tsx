import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import projectVilla from "@/assets/project-villa.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";
import projectInfra from "@/assets/project-infrastructure.jpg";
import heroImage from "@/assets/hero-building.jpg";

const galleryImages = [
  { id: 1, src: heroImage, title: "Futuristic Tower Complex", category: "Commercial" },
  { id: 2, src: projectVilla, title: "Azure Heights Villa", category: "Residential" },
  { id: 3, src: projectCommercial, title: "Nexus Corporate Tower", category: "Commercial" },
  { id: 4, src: projectInfra, title: "Skyline Bridge", category: "Infrastructure" },
  { id: 5, src: projectVilla, title: "Emerald Gardens", category: "Residential" },
  { id: 6, src: projectCommercial, title: "Metro Convention Center", category: "Commercial" },
  { id: 7, src: projectInfra, title: "Coastal Highway", category: "Infrastructure" },
  { id: 8, src: heroImage, title: "Innovation Hub", category: "Commercial" },
];

const categories = ["All", "Residential", "Commercial", "Infrastructure"];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
  };

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
              VISUAL SHOWCASE
            </p>
            <h1 className="section-title gradient-text mb-6">
              Project Gallery
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Explore our collection of architectural achievements and
              construction excellence through stunning visuals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 font-orbitron text-sm tracking-wider transition-all duration-300 rounded-lg ${activeCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-foreground shadow-[0_0_20px_rgba(0,102,255,0.3)]"
                    : "glass-panel text-muted-foreground hover:text-foreground hover:border-primary/50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer relative aspect-square rounded-xl overflow-hidden glass-panel"
                  onClick={() => setSelectedImage(galleryImages.indexOf(image))}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div>
                      <span className="text-xs font-orbitron text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20 backdrop-blur-sm mb-2 inline-block">
                        {image.category}
                      </span>
                      <h3 className="font-orbitron text-sm font-semibold text-foreground">{image.title}</h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 glass-panel flex items-center justify-center hover:bg-primary/20 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 w-12 h-12 glass-panel flex items-center justify-center hover:bg-primary/20 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 w-12 h-12 glass-panel flex items-center justify-center hover:bg-primary/20 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="glass-panel overflow-hidden">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <span className="text-sm font-orbitron text-primary">
                    {galleryImages[selectedImage].category}
                  </span>
                  <h3 className="font-orbitron text-xl font-semibold text-foreground">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {selectedImage + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
