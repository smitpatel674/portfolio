import { motion } from "framer-motion";
import Section from "./Section";

const timeline = [
  {
    year: "Jan 2025 — Apr 2025",
    role: "Machine Learning Intern",
    company: "BISAG-N",
    description:
      "Built a real-time traffic management system using Python, OpenCV, and YOLOv8 with >90% vehicle detection accuracy.",
  },
  {
    year: "Jun 2024 — Jul 2024",
    role: "Data Science Intern",
    company: "BrainyBeam Info-Tech",
    description:
      "Performed exploratory data analysis on the AQI dataset, uncovering seasonal pollution trends and key correlations.",
  },
  {
    year: "2021 — 2025",
    role: "B.E. in Computer Engineering",
    company: "Gujarat Power Engineering and Research Institute (GTU)",
    description:
      "Graduated with a CGPA of 7.8/10. Built foundational skills in computer science, software engineering, and AI/ML.",
  },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={
        <>
          A path of <span className="text-gradient-primary">building.</span>
        </>
      }
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 ${
                i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"
              }`}
            >
              <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:pl-12"}`}>
                <span className="text-sm tracking-widest text-primary-glow">{item.year}</span>
                <h3 className="font-display text-2xl font-bold mt-2">{item.role}</h3>
                <p className="text-muted-foreground mt-1">{item.company}</p>
              </div>
              <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
              <span className="absolute left-4 sm:left-1/2 top-2 -translate-x-1/2 h-3 w-3 rounded-full bg-primary glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
