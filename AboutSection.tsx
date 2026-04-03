import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  className: string;
  textClass: string;
}

const STATS: Stat[] = [
  {
    value: "Level 400",
    label: "University of Cape Coast",
    className: "col-span-2 glow-gold",
    textClass: "text-4xl text-gradient-gold",
  },
  {
    value: "50+",
    label: "Projects Completed",
    className: "",
    textClass: "text-3xl text-brand-blue",
  },
  {
    value: "30+",
    label: "Happy Clients",
    className: "",
    textClass: "text-3xl text-brand-green",
  },
];

const STRENGTHS = [
  "Expert in React & JavaScript",
  "Backend API Development",
  "Clean, Maintainable Code",
  "Collaborative & Detail-oriented",
] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Stats cards */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`glass-card rounded-2xl p-6 ${stat.className}`}
            >
              <p className={`font-heading font-bold ${stat.textClass}`}>{stat.value}</p>
              <p className="text-muted-foreground mt-1 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right - About text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest">About Me</p>
          <h2
            id="about-heading"
            className="font-heading text-3xl md:text-4xl font-bold leading-tight"
          >
            Crafting scalable web solutions that{" "}
            <span className="text-gradient-gold">truly perform</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m a full-stack developer focused on building clean, performant web
            applications. With expertise in React, JavaScript, and backend technologies,
            I help businesses create engaging digital products.
          </p>
          <ul className="space-y-3" aria-label="Key strengths">
            {STRENGTHS.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-3 text-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <CheckCircle size={18} className="text-brand-yellow shrink-0" aria-hidden="true" />
                <span className="text-foreground">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
