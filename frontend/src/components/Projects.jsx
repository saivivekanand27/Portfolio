import useFadeIn from "../useFadeIn";
import { Github, ExternalLink } from "lucide-react";

// ✅ Import project images
import urlImg from "../assets/URL.jpeg";
import boatImg from "../assets/boat.jpeg";
import agriImg from "../assets/rope.jpeg";

const projects = [
  {
    title: "URL Shortener",
    desc: "A full-stack URL shortening application that generates short links, tracks click analytics, and ensures secure redirection. Built with modern backend and database integration.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/url-shortener",
    demo: "#",
    image: urlImg,
  },
  {
    title: "Boat Safety Monitoring System",
    desc: "An Arduino-based real-time monitoring system designed to detect water leakage, fire hazards, and environmental risks in boats. Integrated alert system ensures passenger safety.",
    tech: ["Arduino", "IoT", "Sensors"],
    github: "https://github.com/yourusername/boat-safety",
    demo: "#",
    image: boatImg,
  },
  {
    title: "Rope Guided Agriculture Bot",
    desc: "An automated agriculture robot designed to navigate fields using rope-guided movement. Optimized for precision farming tasks such as seed planting and crop monitoring.",
    tech: ["Embedded Systems", "Robotics", "IoT"],
    github: "https://github.com/yourusername/agriculture-bot",
    demo: "#",
    image: agriImg,
  },
];

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" ref={ref} className="fade-section py-24 px-6 bg-gray-50 dark:bg-black">
      <h2 className="text-4xl font-bold text-center mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-100 dark:bg-yellow-400/20 text-blue-600 dark:text-yellow-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-yellow-400 font-medium hover:underline"
                >
                  <Github size={16} />
                  Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-green-600 font-medium hover:underline"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}