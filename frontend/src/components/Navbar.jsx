import { useEffect, useState } from "react";
import { FileDown, Menu, X } from "lucide-react";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-[#06080f]/90 backdrop-blur-xl border-b border-cyan-400/10 shadow-lg shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-['Outfit'] font-bold text-2xl gradient-text tracking-tight"
        >
          Vivek<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${active === link.id
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-slate-200"
                }`}
            >
              {active === link.id && (
                <span className="absolute inset-0 bg-cyan-400/10 rounded-full border border-cyan-400/20" />
              )}
              <span className="relative z-10">{link.label}</span>
            </button>
          ))}

          <a
            href="/resume.pdf"
            download
            className="ml-4 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg glass text-cyan-400"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 pb-6 pt-2 bg-[#06080f]/95 backdrop-blur-xl border-t border-cyan-400/10 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${active === link.id
                  ? "text-cyan-400 bg-cyan-400/10"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-cyan-400 hover:bg-cyan-400/10 rounded-xl transition"
          >
            <FileDown size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}