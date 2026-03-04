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
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 py-24 md:py-32 relative"
    >
      <motion.div
        className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT SIDE */}
        <div className="text-center md:text-left order-2 md:order-1">
          <motion.p
            variants={itemVariants}
            className="text-sm uppercase tracking-widest text-cyan-400 mb-4"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-cyan-400">Vivek</span>
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-10"
          >
            <span>{displayText}</span>
            <span
              className="inline-block w-[3px] h-6 bg-cyan-400 ml-1 align-middle animate-pulse"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 mb-10 max-w-lg"
          >
            Building scalable web applications and intelligent hardware-software
            systems. Passionate about creating impactful solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
          >
            <a
              href="#projects"
              className="px-7 py-3 bg-cyan-500 text-black font-semibold rounded-xl hover:bg-cyan-600 transition"
            >
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400/10 transition flex items-center gap-2 justify-center"
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
              {
                icon: Github,
                href: "https://github.com/saivivekanand27",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/vivek",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:namsanivivekanand@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="p-3 rounded-xl bg-black/40 border border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl scale-110" />
            <img
              src={vivekImg}
              alt="Vivek - Full Stack Developer"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full relative z-10 border-4 border-cyan-500/40"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-cyan-400"
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}