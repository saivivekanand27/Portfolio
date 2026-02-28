import useFadeIn from "../useFadeIn";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import vivekImg from "../assets/vivek.jpeg";   // ✅ Correct image import

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section
      id="home"
      ref={ref}
      className="fade-section min-h-screen flex items-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-yellow-400">
              Vivek
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-6">
            Full Stack Developer passionate about building scalable web
            applications and solving real-world problems.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:namsanivivekanand@gmail.com"
              className="hover:text-blue-600 dark:hover:text-yellow-400 transition"
            >
              <Mail />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition flex items-center gap-2 justify-center"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src={vivekImg}
            alt="Vivek"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-blue-600 dark:border-yellow-400 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}