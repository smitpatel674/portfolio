import { motion } from "framer-motion";
import Section from "./Section";
import { Code2, Boxes, Sparkles, Layers, Cpu, Palette } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Programming Languages",
    items: ["Python", "JavaScript", "SQL"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    items: ["LLMs", "RAG", "FAISS", "Whisper", "Vector Embeddings"],
  },
  {
    icon: Boxes,
    title: "Deep Learning & Vision",
    items: ["PyTorch", "OpenCV", "YOLO", "Scikit-learn", "Tesseract OCR"],
  },
  {
    icon: Layers,
    title: "Agentic Frameworks",
    items: ["LangChain", "LangGraph", "FireCrawl"],
  },
  {
    icon: Sparkles,
    title: "Backend Frameworks",
    items: ["FastAPI", "Flask", "REST APIs"],
  },
  {
    icon: Palette,
    title: "Tools & Platforms",
    items: ["Streamlit", "Gradio", "Ollama", "N8N", "Git"],
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={
        <>
          Tools of the <span className="text-gradient-primary">trade.</span>
        </>
      }
      description="A focused stack honed across product, brand and experimental work."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="group glass rounded-2xl p-7 hover:border-primary/40 transition-all hover:-translate-y-1 duration-500"
          >
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary-glow" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-muted-foreground bg-surface/60 rounded-full px-3 py-1 border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
