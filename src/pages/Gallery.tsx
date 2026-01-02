import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Cleaned list of high-res images
const galleryImages = [
  "https://lebami.in/wp-content/uploads/2022/04/manaf-vaniyamkulam-scaled.jpg",
  "https://lebami.in/wp-content/uploads/2022/02/post3-01-2048x2048.jpg",
  "https://lebami.in/wp-content/uploads/2022/02/post4-01-2048x2048.jpg",
  "https://lebami.in/wp-content/uploads/2022/02/postno1-01-2048x2048.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/manaf-nellikkurissi-scaled.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/shebber-1-scaled.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/12-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/3-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8212-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/1234567-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8201-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8211-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8197-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8232-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8227-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8235-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/2-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8236-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8229-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8234-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/RIYA8226-2048x1366.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/manaf-nellikkurissi-1-2048x1156.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/SREEJITH-@-VANIYAMKULAM-3-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/FAROOQ-@-THOTTAKARA-1-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/FAROOQ-@-THOTTAKARA-3-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/SREEJITH-@-VANIYAMKULAM5-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/19-04-2022-SALINI-AND-REGHU-03-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/SREEJITH-@-VANIYAMKULAM-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/SREEJITH-@-VANIYAMKULAM-2-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/FAROOQ-@-THOTTAKARA2-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/shebber-3-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/shabeer-pallakkad-2048x1152.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery4.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery1.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery6.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery5.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery3..jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery7.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery9.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery10.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery2.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery11.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery12.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery14.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery8.jpg",
  "https://lebami.in/wp-content/uploads/2021/03/lebami-gallery13.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/kasim-ottappalam.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/shareef-vaniyaamkulam.jpeg",
  "https://lebami.in/wp-content/uploads/2022/04/basheer-thottakara-1536x855.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/204060995_190191946453378_7422190149670825225_n.jpg",
  "https://lebami.in/wp-content/uploads/2022/04/240526500_233683952104177_1811288714353957071_n.jpg",
  "https://lebami.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-30-at-12.31.41-PM-1536x1152.jpeg",
  "https://lebami.in/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-30-at-12.31.40-PM-1536x1152.jpeg",
  "https://lebami.in/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-11.33.45-AM.jpeg",
  "https://lebami.in/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-05-at-11.31.13-AM.jpeg",
  "https://lebami.in/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-11.14.38-AM.jpeg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
              Explore our collection of architectural achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group cursor-pointer relative aspect-square rounded-lg md:rounded-xl overflow-hidden glass-panel"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={src}
                  alt={`Project ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors duration-300" />
                <div className="absolute inset-0 rounded-lg md:rounded-xl border border-transparent group-hover:border-primary/50 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
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
              className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 glass-panel flex items-center justify-center hover:bg-primary/20 z-20 rounded-full border border-primary/20"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:left-6 w-10 h-10 md:w-12 md:h-12 glass-panel flex items-center justify-center hover:bg-primary/20 z-10 rounded-full"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:right-6 w-10 h-10 md:w-12 md:h-12 glass-panel flex items-center justify-center hover:bg-primary/20 z-10 rounded-full"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-hidden rounded-lg shadow-2xl border border-primary/20">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`Project ${selectedImage + 1}`}
                  className="w-full h-auto max-h-[85vh] object-contain bg-black/50"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
