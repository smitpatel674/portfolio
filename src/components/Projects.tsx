import { motion } from "framer-motion";
import Section from "./Section";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Intelligent Traffic System",
    tag: "Computer Vision · YOLOv8",
    description:
      "Dynamic traffic signal controller adjusting green-light duration in real time based on vehicle count. Integrated emergency vehicle detection.",
    accent: "from-indigo-500/40 to-purple-500/10",
    href: "https://github.com/smitpatel674/ITS",
    image: "/project1.png",
  },
  {
    title: "Scientific Research Multi-Agent",
    tag: "AI Agents · LangGraph",
    description:
      "Multi-agent research pipeline to automate scientific analysis (query optimization, paper retrieval, ranking, summarization).",
    accent: "from-violet-500/40 to-blue-500/10",
    href: "https://github.com/smitpatel674/Scientific-Research-Multi-Agent-System",
    image: "/project2.png",
  },
  {
    title: "Video Q&A Agent",
    tag: "Multimodal AI · RAG",
    description:
      "Multimodal QA system combining Whisper, Tesseract OCR, and Ollama to answer questions about video content end-to-end.",
    accent: "from-fuchsia-500/40 to-indigo-500/10",
    href: "https://github.com/smitpatel674/video-qa-agent",
    image: "/project3.png",
  },
  {
    title: "PDF QA Agent",
    tag: "LangChain · RAG",
    description:
      "Intelligent text chunking with FAISS vector search, allowing users to ask questions over their uploaded PDF documents.",
    accent: "from-cyan-500/30 to-indigo-500/10",
    href: "https://github.com/smitpatel674/pdf-qa",
    image: "/project4.png",
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={
        <>
          Selected <span className="text-gradient-primary">work.</span>
        </>
      }
      description="A handful of recent projects built with care, craft and a healthy obsession with detail."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href || "#"}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative glass rounded-3xl p-8 overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
          >
            <div
              className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700`}
            />
            <div className="relative">
              <div className="flex items-start justify-between mb-8">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {p.tag}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary-glow group-hover:rotate-45 transition-all duration-500" />
              </div>
              <div className="aspect-[16/10] rounded-2xl bg-gradient-to-br from-surface-elevated to-surface border border-border mb-8 overflow-hidden relative">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
