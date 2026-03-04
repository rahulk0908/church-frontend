import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/church.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Vishranthi Church at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-secondary font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Welcome to
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight"
        >
          Vishranthi Church
          <br />
          <span className="text-gradient-gold">Bockapatna</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-primary-foreground/80 font-body text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          A place of worship, community, and faith. Join us as we walk together
          in the light of God's love.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-secondary" />
            <span className="font-body">
              Sunday Service: 8:30 AM to 10:00 AM
            </span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-secondary" />
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="font-body">Bockapatna Mangalore 575003</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
