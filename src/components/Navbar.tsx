import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-5"
    >
      <nav className="container mx-auto flex items-center justify-between glass rounded-full px-6 py-3">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          <span className="text-gradient-primary">◆</span>{" "}
          <span className="text-foreground">Smit Patel</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-foreground transition-colors duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Resume
        </a>
      </nav>
    </motion.header>
  );
};

export default Navbar;
