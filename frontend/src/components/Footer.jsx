import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative pt-16 pb-8 px-6">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Logo */}
        <a href="#home" className="inline-block text-2xl font-['Outfit'] font-bold gradient-text mb-3">
          Vivek<span className="text-cyan-400">.</span>
        </a>
        <p className="text-slate-500 text-sm mb-6">
          Full Stack Developer &middot; Embedded Systems &middot; Problem Solver
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 mb-8">
          {[
            { icon: Github, href: "https://github.com/saivivekanand27" },
            { icon: Linkedin, href: "https://linkedin.com/in/vivek" },
            { icon: Mail, href: "mailto:namsanivivekanand@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-slate-500 hover:text-cyan-400 hover:border-cyan-400/20 transition-all duration-300">
              <Icon size={18} />
            </a>
          ))}
        </div>

        <p className="text-slate-600 text-xs">
          © {new Date().getFullYear()} Vivek. Crafted with React & Tailwind.
        </p>
      </div>

      {/* Scroll to top */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300" style={{ animation: "glow-pulse 3s infinite" }} aria-label="Scroll to top">
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}