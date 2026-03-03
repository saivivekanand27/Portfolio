import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ChevronDown } from "lucide-react";
import vivekImg from "../assets/vivek.jpeg";

const roles = [
  "Full Stack Developer",
  "Embedded Systems Engineer",
  "Problem Solver",
  "Tech Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(
          () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
          80
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(
          () => setDisplayText(displayText.slice(0, -1)),
          40
        );
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-24 md:py-32"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Side */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p
            variants={itemVariants}
            className="text-sm font-medium tracking-widest uppercase text-cyan-400 mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-['Outfit'] font-extrabold mb-4 leading-[1.1] tracking-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Vivek</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-slate-300 mb-8 h-10"
          >
            <span>{displayText}</span>
            <span
              className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 align-middle"
              style={{ animation: "cursor-blink 0.8s infinite" }}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base text-slate-400 mb-10 max-w-lg leading-relaxed"
          >
            Building scalable web applications and intelligent hardware-software
            systems. Passionate about creating impactful solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
          >
            <a
              href="#projects"
              className="shimmer-btn px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-3.5 border border-cyan-400/40 text-cyan-400 rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300 flex items-center gap-2 justify-center font-medium"
            >
              <FileDown size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/saivivekanand27", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/vivek", label: "LinkedIn" },
              { icon: Mail, href: "mailto:namsanivivekanand@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="p-3 rounded-xl glass text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Photo Side */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl scale-110" />

            {/* Animated Ring */}
            <div className="profile-ring rounded-full">
              <img
                src={vivekImg}
                alt="Vivek - Full Stack Developer"
                className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full relative z-10"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
        style={{ animation: "bounce-down 2s infinite" }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}