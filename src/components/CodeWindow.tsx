import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "from typing import List", tokens: [{ t: "from ", c: "text-[#c084fc]" }, { t: "typing ", c: "text-[#7dd3fc]" }, { t: "import ", c: "text-[#c084fc]" }, { t: "List", c: "text-[#7dd3fc]" }] },
  { text: "import ai_frameworks", tokens: [{ t: "import ", c: "text-[#c084fc]" }, { t: "ai_frameworks", c: "text-[#7dd3fc]" }] },
  { text: "", tokens: [] },
  { text: "class SmitPatel(AIEngineer):", tokens: [{ t: "class ", c: "text-[#c084fc]" }, { t: "SmitPatel", c: "text-[#fbbf24]" }, { t: "(", c: "text-foreground/80" }, { t: "AIEngineer", c: "text-[#4ade80]" }, { t: "):", c: "text-foreground/80" }] },
  { text: "    def __init__(self):", tokens: [{ t: "    def ", c: "text-[#c084fc]" }, { t: "__init__", c: "text-[#a78bfa]" }, { t: "(", c: "text-foreground/80" }, { t: "self", c: "text-[#f472b6]" }, { t: "):", c: "text-foreground/80" }] },
  { text: "        self.skills: List[str] = [", tokens: [{ t: "        ", c: "" }, { t: "self", c: "text-[#f472b6]" }, { t: ".skills: ", c: "text-foreground/80" }, { t: "List", c: "text-[#7dd3fc]" }, { t: "[", c: "text-foreground/80" }, { t: "str", c: "text-[#7dd3fc]" }, { t: "] = [", c: "text-foreground/80" }] },
  { text: "            'Python', 'LLMs', 'RAG',", tokens: [{ t: "            ", c: "" }, { t: "'Python'", c: "text-[#a3e635]" }, { t: ", ", c: "text-foreground/80" }, { t: "'LLMs'", c: "text-[#a3e635]" }, { t: ", ", c: "text-foreground/80" }, { t: "'RAG'", c: "text-[#a3e635]" }, { t: ",", c: "text-foreground/80" }] },
  { text: "            'LangChain', 'Computer Vision'", tokens: [{ t: "            ", c: "" }, { t: "'LangChain'", c: "text-[#a3e635]" }, { t: ", ", c: "text-foreground/80" }, { t: "'Computer Vision'", c: "text-[#a3e635]" }] },
  { text: "        ]", tokens: [{ t: "        ]", c: "text-foreground/80" }] },
  { text: "        self.status = 'Ready to Build'", tokens: [{ t: "        ", c: "" }, { t: "self", c: "text-[#f472b6]" }, { t: ".status = ", c: "text-foreground/80" }, { t: "'Ready to Build'", c: "text-[#a3e635]" }] },
  { text: "", tokens: [] },
  { text: "# ✨ shipping impactful AI solutions", tokens: [{ t: "# ✨ shipping impactful AI solutions", c: "text-muted-foreground italic" }] },
];

const CodeWindow = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= codeLines.length) {
      const restart = setTimeout(() => {
        setLineIndex(0);
        setCharIndex(0);
      }, 2200);
      return () => clearTimeout(restart);
    }
    const current = codeLines[lineIndex].text;
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const next = setTimeout(() => {
      setLineIndex((l) => l + 1);
      setCharIndex(0);
    }, current.length === 0 ? 120 : 220);
    return () => clearTimeout(next);
  }, [lineIndex, charIndex]);

  const renderLine = (idx: number) => {
    const line = codeLines[idx];
    if (idx < lineIndex) {
      // fully typed
      return line.tokens.map((tok, i) => (
        <span key={i} className={tok.c}>
          {tok.t}
        </span>
      ));
    }
    if (idx === lineIndex) {
      // partially typed
      let remaining = charIndex;
      const out: JSX.Element[] = [];
      for (let i = 0; i < line.tokens.length; i++) {
        const tok = line.tokens[i];
        if (remaining <= 0) break;
        const slice = tok.t.slice(0, remaining);
        out.push(
          <span key={i} className={tok.c}>
            {slice}
          </span>,
        );
        remaining -= tok.t.length;
      }
      return (
        <>
          {out}
          <span className="inline-block w-[7px] h-[1.05em] -mb-[2px] bg-primary-glow animate-glow-pulse ml-[1px]" />
        </>
      );
    }
    return <span className="opacity-0">.</span>;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 1200 }}
      className="relative w-full max-w-xl mx-auto"
    >
      {/* Glow */}
      <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />

      <div className="relative glass rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(240_84%_30%/0.6)]">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-surface/60">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            agent.py
          </span>
          <span className="text-[11px] text-muted-foreground/60 font-mono">⌘K</span>
        </div>

        {/* Code body */}
        <div className="flex font-mono text-[13px] leading-[1.65] bg-background/40">
          {/* Line numbers */}
          <div className="select-none px-3 py-5 text-right text-muted-foreground/40 border-r border-border/40">
            {codeLines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          {/* Code */}
          <div className="px-4 py-5 flex-1 overflow-hidden">
            {codeLines.map((_, i) => (
              <div key={i} className="whitespace-pre min-h-[1.65em]">
                {renderLine(i)}
              </div>
            ))}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border/60 bg-surface/60 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-glow-pulse" />
            <span>training • epoch 12</span>
          </div>
          <span className="font-mono">utf-8 · python 3.12</span>
        </div>
      </div>
    </motion.div>
  );
};

export default CodeWindow;
