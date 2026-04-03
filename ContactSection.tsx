import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import type { LucideIcon } from "lucide-react";

interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "nhyirasamuel4@gmail.com",
    href: "mailto:nhyirasamuel4@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+233 59 484 8177",
    href: "tel:+233594848177",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote / Worldwide",
    href: "",
  },
];

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // TODO: wire up to your preferred form submission service
    // e.g. Formspree, EmailJS, or your own API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // placeholder
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24">
      <div className="container max-w-4xl">
        <motion.div
          className="text-center space-y-3 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground uppercase tracking-widest">Get In Touch</p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl md:text-4xl font-bold"
          >
            Let&apos;s <span className="text-gradient-gold">Work Together</span>
          </h2>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {CONTACT_INFO.map((item, i) => (
            <motion.div
              key={item.label}
              className="glass-card rounded-2xl p-6 text-center space-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <item.icon
                size={24}
                className="mx-auto text-brand-yellow"
                aria-hidden="true"
              />
              <p className="text-sm text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-foreground font-medium text-sm hover:text-brand-yellow transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-foreground font-medium text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card rounded-2xl p-8 space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          aria-label="Contact form"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="sr-only">Your Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">Your Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" className="sr-only">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="contact-message" className="sr-only">Your Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Status feedback */}
          {status === "sent" && (
            <p role="status" className="text-brand-green text-sm text-center">
              ✅ Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-destructive text-sm text-center">
              ❌ Something went wrong. Please try again or email me directly.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full py-3 rounded-full bg-gradient-gold text-background font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
            whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
          >
            {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent ✓" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
