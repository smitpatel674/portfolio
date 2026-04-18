import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import CodeWindow from "./CodeWindow";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute top-1/3 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />

      <div className="container mx-auto relative z-10 px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-primary-glow animate-glow-pulse" />
              Open to AI Engineer & Backend Roles
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
            >
              Building
              <br />
              <span className="text-gradient-primary">intelligent</span>
              <br />
              systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              AI Engineer specializing in Python, LLMs, and real-time systems. 
              I build scalable APIs, multimodal AI agents, and production-ready ML solutions using LangChain and modern AI frameworks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-medium glow hover:bg-primary/90 transition-all"
              >
                View Projects
                <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-medium hover:bg-surface transition-all"
              >
                Get in touch
              </a>
            </motion.div>
          </div>

          {/* Right: code editor */}
          <div className="relative">
            <CodeWindow />
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest uppercase"
      >
        <span className="block animate-float">scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
