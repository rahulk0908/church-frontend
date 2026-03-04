import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchImages } from "@/sanity/sanityApi";
import { urlFor } from "@/sanity/image";

type GalleryImage = {
  src: string;
  alt: string;
};

const GallerySection = () => {
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
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl group"
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
      </div>
    </section>
  );
};

export default GallerySection;
