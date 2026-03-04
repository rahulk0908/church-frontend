import { fetchImages } from "@/sanity/sanityApi";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type GalleryImage = {
  src: string;
  alt: string;
};

interface LightboxProps {
  images: any;
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 md:left-8 text-white/80 hover:text-white z-10"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 md:right-8 text-white/80 hover:text-white z-10"
      >
        <ChevronRight className="w-10 h-10" />
      </button>
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-6 text-white/60 text-sm font-body">
        {currentIndex + 1} / {images.length}
      </div>
    </motion.div>
  </AnimatePresence>
);

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
            Our Church
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Gallery
          </h2>

          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {images.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl group"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3 bg-secondary text-secondary-foreground font-body font-semibold rounded-lg hover:bg-secondary/90 transition-colors tracking-wide uppercase text-sm"
          >
            More Images
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={images.slice(0, 6)}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex(
              (lightboxIndex - 1 + images.length) % images.length,
            )
          }
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </section>
  );
};

export default GallerySection;
