import heroPhoto from "@/assets/hero-photo.jpg";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Decorative background glows - aria-hidden so screen readers skip them */}
      <div aria-hidden="true" className="absolute top-20 left-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-[120px]" />
      <div aria-hidden="true" className="absolute bottom-20 right-10 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      <div aria-hidden="true" className="absolute top-40 right-1/3 w-48 h-48 bg-brand-pink/10 rounded-full blur-[100px]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-muted-foreground text-sm tracking-widest uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Building Modern{" "}
            <span className="text-gradient-gold">Web Applications</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground max-w-md text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I&apos;m a developer specializing in React, JavaScript, and backend
            technologies. I craft performant, scalable digital experiences.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <a
              href="#services"
              className="px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-gold text-background text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              Hire Me <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {/* Decorative avatar placeholders */}
            <div aria-hidden="true" className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-muted"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">50+</span> Satisfied Clients
            </span>
          </motion.div>
        </motion.div>

        {/* Right - Photo */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          <div className="relative w-80 h-96 rounded-2xl overflow-hidden glow-blue">
            <img
              src={heroPhoto}
              alt="Nhyira Samuel Kwame — Full Stack Developer"
              width={512}
              height={640}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badge — React Developer */}
          <motion.div
            className="absolute top-4 left-0 glass-card rounded-xl px-4 py-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-xs text-muted-foreground">React Developer</p>
            <p className="text-foreground font-semibold text-sm">Level 400</p>
          </motion.div>

          {/* Floating badge — Availability */}
          <motion.div
            className="absolute bottom-8 right-0 glass-card rounded-xl px-4 py-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-xs text-brand-green">Available for work</p>
            <p className="text-foreground font-semibold text-sm">Freelance / Full-time</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
