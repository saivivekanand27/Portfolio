import { Github, ExternalLink } from "lucide-react";
import ropeBotImg from "../assets/rope.jpeg";
import boatSafetyImg from "../assets/boat.jpeg";
import urlImg from "../assets/URL.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "URL Shortener",
      desc: "A full-stack URL shortening application that generates short links, tracks click analytics, and ensures secure redirection. Built with modern backend and database integration.",
      tech: ["HTML", "CSS", "EJS", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/yourusername/url-shortener",
      demo: "#", // Replace with live link later
      image: urlImg,
    },
    {
      title: "Rope Guided Agriculture Bot",
      desc: "Designed and developed a rope-guided autonomous agriculture robot for precision farming. Implemented embedded C logic for navigation control and sensor-based monitoring.",
      tech: ["Arduino", "Embedded C", "IoT", "Sensors"],
      github: "https://github.com/yourusername/rope-bot",
      demo: null,
      image: ropeBotImg,
    },
    {
      title: "Boat Safety Monitoring System",
      desc: "An Arduino-based real-time monitoring system to detect water leakage, gas leaks, and fire hazards. Integrated alert system ensures passenger safety.",
      tech: ["Arduino", "Embedded C", "MQ Sensor", "GSM Module"],
      github: "https://github.com/yourusername/boat-safety",
      demo: null,
      image: boatSafetyImg,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition duration-500"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-800 text-white rounded-full border border-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
                  >
                    <Github size={16} />
                    Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}