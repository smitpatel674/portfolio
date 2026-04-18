import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="relative py-28 sm:py-36">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary-glow mb-5">
            <span className="h-px w-8 bg-primary-glow" /> {eyebrow}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
