import { Code2, Layout, Server, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

const SERVICES: Service[] = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "Responsive, modern UIs built with React and clean component architecture.",
    gradient: "bg-gradient-orange",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Apps",
    description: "Mobile-first designs that look and perform beautifully on every device.",
    gradient: "bg-gradient-pink",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable APIs and server-side logic with Node.js, Express, and databases.",
    gradient: "bg-gradient-green",
  },
  {
    icon: Code2,
    title: "Full Stack Solutions",
    description: "End-to-end web applications from concept to deployment and maintenance.",
    gradient: "bg-gradient-blue",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24">
      <div className="container">
        <motion.div
          className="text-center space-y-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest">My Services</p>
          <h2
            id="services-heading"
            className="font-heading text-3xl md:text-4xl font-bold"
          >
            What I <span className="text-gradient-gold">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            I build digital experiences that are not only visually appealing but also
            effective in achieving your business goals.
          </p>
        </motion.div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {SERVICES.map((service, i) => (
            <motion.li
              key={service.title}
              className="glass-card rounded-2xl p-6 space-y-4 hover:border-primary/30 transition-colors group list-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className={`w-14 h-14 rounded-xl ${service.gradient} flex items-center justify-center`}
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                aria-hidden="true"
              >
                <service.icon size={24} className="text-background" />
              </motion.div>
              <h3 className="font-heading font-semibold text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all focus-visible:outline-none focus-visible:underline"
                aria-label={`Contact me about ${service.title}`}
              >
                Let&apos;s Work →
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
