import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, RefreshCw } from "lucide-react";
import { fetchBibleVerses } from "@/sanity/sanityApi";

type Verse = {
  verse: string;
  book: string;
};

const BibleVerseSection = () => {
  const [verses, setVerses] = useState<Verse[]>([]);
  const [currentVerse, setCurrentVerse] = useState(0);

  useEffect(() => {
    fetchBibleVerses().then((data) => {
      setVerses(data);

      // pick verse of the day
      const dayOfYear = Math.floor(
        (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
          86400000,
      );

      if (data.length > 0) {
        setCurrentVerse(dayOfYear % data.length);
      }
    });
  }, []);

  const getNewVerse = () => {
    if (verses.length === 0) return;
    setCurrentVerse((prev) => (prev + 1) % verses.length);
  };

  const verse = verses[currentVerse];

  if (!verse) return null;

  return (
    <section className="py-20 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-secondary/30 rotate-45" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
              Daily Bible Verse
            </span>
          </div>

          <motion.blockquote
            key={currentVerse}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 italic leading-relaxed mb-6">
              "{verse.verse}"
            </p>

            <cite className="text-secondary font-body text-lg not-italic font-semibold">
              — {verse.book}
            </cite>
          </motion.blockquote>

          <button
            onClick={getNewVerse}
            className="mt-8 inline-flex items-center gap-2 text-primary-foreground/50 hover:text-secondary transition-colors font-body text-sm"
          >
            <RefreshCw className="w-4 h-4" />
            Another Verse
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BibleVerseSection;
