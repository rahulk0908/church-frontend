import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchLeadership } from "@/sanity/sanityApi";
type Leader = {
  name: string;
  designation: string;
  description: string;
  phone: string;
};

const LeadershipSection = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);

  useEffect(() => {
    fetchLeadership().then((data) => {
      setLeaders(data);
    });
  }, []);

  return (
    <section id="leadership" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
            Our Team
          </span>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Church Leadership
          </h2>

          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border shadow-elegant text-center group hover:border-secondary/40 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center shadow-gold">
                <span className="font-display text-2xl font-bold text-secondary-foreground">
                  {leader.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {leader.name}
              </h3>

              <p className="text-secondary font-body text-sm font-semibold mb-3">
                {leader.designation}
              </p>

              <p className="text-muted-foreground font-body text-sm mb-4 leading-relaxed">
                {leader.description}
              </p>

              <div className="flex items-center justify-center gap-3">
                <a
                  href={`tel:${leader.phone}`}
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
