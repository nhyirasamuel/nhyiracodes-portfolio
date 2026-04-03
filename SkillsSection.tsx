import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const SKILLS: Skill[] = [
  { name: "React",       level: 95, color: "bg-brand-blue"   },
  { name: "JavaScript", level: 90, color: "bg-brand-yellow" },
  { name: "HTML / CSS", level: 92, color: "bg-brand-orange" },
  { name: "Node.js",    level: 85, color: "bg-brand-green"  },
  { name: "TypeScript", level: 80, color: "bg-brand-pink"   },
];

const STATS: Stat[] = [
  { value: "50+",   label: "Happy Clients",      icon: "👥" },
  { value: "60+",   label: "Projects Completed", icon: "⏱"  },
  { value: "1000+", label: "Hours Worked",        icon: "📋" },
  { value: "10+",   label: "Case Studies",        icon: "✏️" },
];

const SkillsSection = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24">
      <div className="container grid lg:grid-cols-2 gap-16 items-start">
        {/* Left - Heading */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest">My Skills</p>
          <h2
            id="skills-heading"
            className="font-heading text-3xl md:text-4xl font-bold"
          >
            Top Tools{" "}
            <span className="text-muted-foreground font-normal">I Use as a</span>{" "}
            <span className="text-gradient-gold">Developer</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Here are the core technologies I use to build modern, responsive, and
            scalable web applications.
          </p>
        </motion.div>

        {/* Right - Skill bars */}
        <div className="space-y-5" role="list" aria-label="Skill proficiency levels">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              role="listitem"
              className="space-y-2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="flex justify-between text-sm">
                <span className="text-foreground font-medium">{skill.name}</span>
                <span
                  className={`px-2 py-0.5 rounded text-xs font-semibold ${skill.color} text-background`}
                  aria-label={`${skill.level} percent`}
                >
                  {skill.level}%
                </span>
              </div>
              <div
                className="h-2 rounded-full bg-muted overflow-hidden"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${skill.name} proficiency`}
              >
                <motion.div
                  className={`h-full rounded-full ${skill.color}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="container mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="glass-card rounded-2xl p-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <p className="text-2xl mb-2" aria-hidden="true">{stat.icon}</p>
            <p className="font-heading text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
