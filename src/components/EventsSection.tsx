import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "8:30 AM & 10:00 AM",
    location: "Church",
    description:
      "Praise and worship starts at 8:00AM. Join us for praise, worship, and a powerful message from God's Word.",
    featured: true,
  },
  {
    title: "Youth Fellowship",
    date: "March 1, 2026",
    time: "10:00 AM",
    location: "Youth Hall",
    description: "Youth meet is conducted 1st Sunday of every month",
  },
  {
    title: "Women's Bible Study",
    date: "March 10, 2026",
    time: "10:00 AM",
    location: "Church",
    description:
      "Dive deeper into scripture with our women's weekly Bible study group.",
  },
  {
    title: "Senior Citizens Prayer Meeting",
    date: "March 1, 2026",
    time: "10:00 AM",
    location: "Church Hall",
    description:
      "Senior Citizens Prayer Meeting is conducted 1st Sunday of every month",
  },
  {
    title: "Sunday School",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "Church",
    description:
      "Sunday school for kids is conducted every Sunday post church service.",
  },
];

const EventsSection = () => {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-body text-sm tracking-[0.2em] uppercase">
            Upcoming
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            Church Events
          </h2>
          <div className="w-16 h-1 bg-gradient-gold mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl p-6 border transition-all hover:shadow-elegant group ${
                event.featured
                  ? "bg-primary text-primary-foreground border-secondary/30 md:col-span-2"
                  : "bg-card text-card-foreground border-border hover:border-secondary/40"
              }`}
            >
              {event.featured && (
                <span className="inline-block text-xs font-body font-semibold tracking-wider uppercase bg-secondary text-secondary-foreground px-3 py-1 rounded-full mb-3">
                  Weekly Service
                </span>
              )}
              <h3 className="font-display text-xl font-bold mb-2">
                {event.title}
              </h3>
              <p
                className={`font-body text-sm mb-4 ${event.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {event.description}
              </p>
              <div
                className={`flex flex-wrap gap-4 text-sm font-body ${event.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}
              >
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-secondary" /> {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-secondary" /> {event.time}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-secondary" /> {event.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
