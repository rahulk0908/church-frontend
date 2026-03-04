import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Lightbox } from "@/components/GallerySection";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { fetchImages } from "@/sanity/sanityApi";
type GalleryImage = {
  src: string;
  alt: string;
};
const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const [images, setImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    fetchImages().then((data) => {
      setImages(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-body text-sm mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
                Our Church
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
                Photo Gallery
              </h1>
              <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
              <p className="max-w-2xl mx-auto mt-6 text-muted-foreground font-body leading-relaxed">
                Browse through moments captured at CSI Vshranthi Church — from
                worship services to community gatherings.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-xl group cursor-pointer aspect-square"
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
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
    </div>
  );
};

export default GalleryPage;
