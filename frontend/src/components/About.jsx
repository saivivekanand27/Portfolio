import React from "react";
// import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          I am a passionate Full Stack Developer with strong foundations in
          MERN stack development and embedded systems. I focus on building
          scalable, real-world solutions that solve practical problems.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          I have developed hardware-based automation systems like a
          Rope Guided Agriculture Bot and a Boat Safety Monitoring System,
          along with full-stack applications such as a URL Shortener with
          analytics tracking.
        </p>

        <p className="text-gray-400 mt-4 leading-relaxed">
          My goal is to build intelligent, impactful software solutions and
          continuously improve my problem-solving and system design skills.
        </p>

        <div className="mt-8">
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold rounded-full transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;