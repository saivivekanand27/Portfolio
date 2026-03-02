import useFadeIn from "../useFadeIn";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";
import vivekImg from "../assets/vivek.jpeg";

export default function Hero() {
  const ref = useFadeIn();

  return (
    <section
      id="home"
      ref={ref}
      className="fade-section min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        <div className="text-center md:text-left">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_#22D3EE]">
              Vivek
            </span>
          </h1>

          <p className="text-lg text-slate-400 mb-8 max-w-xl">
            Full Stack Developer focused on building scalable web applications 
            and intelligent hardware-software systems.
          </p>

          <div className="flex justify-center md:justify-start gap-6 text-2xl mb-8">
            <a href="#" className="hover:text-cyan-400 transition"><Github /></a>
            <a href="#" className="hover:text-cyan-400 transition"><Linkedin /></a>
            <a href="mailto:namsanivivekanand@gmail.com" className="hover:text-cyan-400 transition"><Mail /></a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl shadow-lg shadow-cyan-500/40 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-xl hover:bg-cyan-400/10 transition flex items-center gap-2 justify-center"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={vivekImg}
            alt="Vivek"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full
                       border-4 border-cyan-400
                       shadow-[0_0_40px_rgba(34,211,238,0.5)]
                       hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}