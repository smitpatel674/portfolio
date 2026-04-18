import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative glass rounded-[2.5rem] p-10 sm:p-16 lg:p-24 overflow-hidden text-center"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary-glow mb-6">
              Let's create
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Got an idea worth
              <br />
              <span className="text-gradient-primary">building?</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-lg">
              I'm currently looking for full-time opportunities in Python development and AI/ML. Let's connect and build something impactful.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:smitp5553@gmail.com"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-medium glow hover:bg-primary/90 transition-all"
              >
                <Mail className="h-5 w-5" />
                smitp5553@gmail.com
              </a>
              <a
                href="tel:+919408611281"
                className="inline-flex items-center gap-3 rounded-full border border-border px-8 py-4 text-lg font-medium hover:bg-surface transition-all"
              >
                <Phone className="h-5 w-5 text-muted-foreground" />
                +91 94086 11281
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              {[
                { icon: Github, href: "https://github.com/smitpatel674" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/smitkumar-k-patel/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="h-11 w-11 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} — Smit Patel.</p>
          <p>Building real-world AI systems.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
