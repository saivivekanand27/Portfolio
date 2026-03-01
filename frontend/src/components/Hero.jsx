import useFadeIn from "../useFadeIn";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import vivekImg from "../assets/vivek.jpeg";

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
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
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
              className="hover:text-cyan-400 transition duration-300"
            >
              <Github />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:namsanivivekanand@gmail.com"
              className="hover:text-cyan-400 transition duration-300"
            >
              <Mail />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:scale-105 transition duration-300 shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition duration-300 flex items-center gap-2 justify-center"
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
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full
                       border-4 border-cyan-400
                       shadow-[0_0_40px_rgba(0,255,255,0.4)]
                       hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}