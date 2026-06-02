import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import ropeBotImg from "../assets/rope.jpeg";
import boatSafetyImg from "../assets/boat.jpeg";
import urlImg from "../assets/URL.jpeg";

import prepFlowImg from "../assets/prepflow.jpeg";
import visionForgeImg from "../assets/visionforge.jpeg";
import secureSightImg from "../assets/securesight.jpeg";
import taskLiteImg from "../assets/tasklite.jpeg";

const projects = [
  {
    title: "PrepFlowAI",
    desc: "An AI-powered interview preparation platform built with the MERN stack and SambaNova AI. Features AI-generated interview questions, company-wise preparation, coding practice, session management, authentication, and a modern SaaS-inspired dashboard.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "SambaNova AI",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    github: "https://github.com/saivivekanand27/PrepFlowAI",
    demo: null,
    image: prepFlowImg,
    featured: true,
  },

  {
    title: "SecureSight",
    desc: "An AI-powered cybersecurity exposure intelligence platform that discovers assets, analyzes open ports, evaluates security risks using local LLMs, and generates remediation recommendations automatically.",
    tech: [
      "TypeScript",
      "Node.js",
      "Express",
      "Ollama",
      "Llama 3",
      "Shodan API",
      "Docker",
    ],
    github: "https://github.com/saivivekanand27/aethronix",
    demo: null,
    image: secureSightImg,
    featured: true,
  },

  {
    title: "VisionForge",
    desc: "A full-stack AI image generation platform that creates stunning images from text prompts using Hugging Face models. Includes Cloudinary storage, MongoDB integration, public image sharing, search, and downloads.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Cloudinary",
      "Hugging Face",
      "Express",
    ],
    github: "https://github.com/saivivekanand27/VisionForge",
    demo: null,
    image: visionForgeImg,
    featured: true,
  },

  {
    title: "TaskLite",
    desc: "A modern task management application built with ASP.NET Core MVC featuring task tracking, dashboard analytics, status filtering, SQLite database integration, and responsive Bootstrap UI.",
    tech: [
      ".NET 8",
      "ASP.NET MVC",
      "C#",
      "Entity Framework Core",
      "SQLite",
      "Bootstrap 5",
    ],
    github: "https://github.com/saivivekanand27/TaskLite",
    demo: null,
    image: taskLiteImg,
    featured: true,
  },

  {
    title: "QuickShark",
    desc: "A full-stack URL shortening app that generates short links, tracks click analytics, and ensures secure redirection.",
    tech: ["HTML", "CSS", "EJS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/saivivekanand27/QuickShrink",
    demo: null,
    image: urlImg,
  },

  {
    title: "Rope Guided Agriculture Bot",
    desc: "An autonomous agriculture robot for precision farming with embedded C logic for navigation and sensor-based monitoring.",
    tech: ["Arduino", "Embedded C", "IoT", "Sensors"],
    github: "https://github.com/yourusername/rope-bot",
    demo: null,
    image: ropeBotImg,
  },

  {
    title: "Boat Safety Monitoring",
    desc: "Arduino-based real-time monitoring system to detect water leakage, gas leaks, and fire hazards with integrated alerts.",
    tech: ["Arduino", "Embedded C", "MQ Sensor", "GSM Module"],
    github: "https://github.com/yourusername/boat-safety",
    demo: null,
    image: boatSafetyImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-3xl md:text-5xl mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass rounded-2xl overflow-hidden group hover:border-cyan-400/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-[#06080f]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <p className="text-sm text-slate-300 leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.desc}
                  </p>
                </div>

                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-sm">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-['Outfit'] mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Github size={16} />
                    Source Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}