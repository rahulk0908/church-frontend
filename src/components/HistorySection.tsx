import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchTimelines } from "@/sanity/sanityApi";

const HistorySection = () => {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    fetchTimelines().then((data) => {
      setMilestones(data);
    });
  }, []);

  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
            Our Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Church History
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground font-body leading-relaxed">
            From humble beginnings to a thriving community of faith — trace the
            milestones that have shaped CSI Vishranthi Church over the decades.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((milestone: any, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background -translate-x-1/2 mt-1 z-10 shadow-gold" />

                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft
                      ? "md:pr-0 md:mr-auto md:text-right"
                      : "md:pl-0 md:ml-auto md:text-left"
                  }`}
                >
                  <span className="inline-block text-secondary font-display text-2xl font-bold mb-1">
                    {milestone.year}
                  </span>

                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {milestone.headline}
                  </h3>

                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
