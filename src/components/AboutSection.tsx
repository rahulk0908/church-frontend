import { motion } from "framer-motion";
import {
  Heart,
  Users,
  BookOpen,
  Ship,
  Home,
  Factory,
  Church,
  Building,
  Cross,
  Bell,
  Lightbulb,
  Diamond,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Faith & Love",
    description:
      "Rooted in God's unconditional love, we seek to reflect His grace in everything we do.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are a family bound by faith, supporting one another through every season of life.",
  },
  {
    icon: BookOpen,
    title: "God's Word",
    description:
      "The Bible is our foundation. We are committed to teaching and living by its truths.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
            Who We Are
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            About Our Church
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-muted-foreground font-body leading-relaxed">
            The history of CSI Vishranthi Church can be traced back from the
            year 1806 to 1816, birth of an era of Peace Revolution in the place
            called Basel in the country of Switzerland. In the year 1815 Rev.
            Blumhardt of South Germany, Rev. M. Flone Basel of Wittenberg and
            another member of Chief Institution from Basel started an
            Organisation called "BASEL MISSION" Institution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-gold mx-auto mb-4 flex items-center justify-center shadow-gold">
                <value.icon className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
