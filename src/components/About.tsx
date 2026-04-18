import { motion } from "framer-motion";
import Section from "./Section";

const stats = [
  { value: "7.8", label: "CGPA (B.E. Comp Engg)" },
  { value: "5+", label: "AI/ML Projects Built" },
  { value: "2", label: "Data & ML Internships" },
  { value: "10+", label: "Technologies Mastered" },
];

const About = () => {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          An engineer building
          <br />
          <span className="text-gradient-primary">impactful solutions.</span>
        </>
      }
      description="I'm passionate about building production-ready, AI-driven applications that combine performance, scalability, and real-world impact. I specialize in designing end-to-end AI pipelines using LLMs, LangChain, RAG, and computer vision models."
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="font-display text-4xl sm:text-5xl font-bold text-gradient-primary">
              {s.value}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;
