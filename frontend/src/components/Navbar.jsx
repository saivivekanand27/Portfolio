import { useEffect, useState } from "react";
import { Sun, Moon, FileDown } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");

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
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  const linkStyle = (id) =>
    `cursor-pointer transition-colors duration-300 ${
      active === id
        ? "text-blue-600 dark:text-yellow-400"
        : "hover:text-blue-600 dark:hover:text-yellow-400"
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 dark:bg-black/40 border-b border-gray-300 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="font-bold text-xl">Vivek</div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className={linkStyle("home")}>Home</a>
          <a href="#about" className={linkStyle("about")}>About</a>
          <a href="#skills" className={linkStyle("skills")}>Skills</a>
          <a href="#projects" className={linkStyle("projects")}>Projects</a>
          <a href="#contact" className={linkStyle("contact")}>Contact</a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-1 hover:text-green-500"
          >
            <FileDown size={16} /> Resume
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-110 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

      </div>
    </nav>
  );
}