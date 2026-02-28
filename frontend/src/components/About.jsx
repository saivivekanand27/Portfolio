import useFadeIn from "../useFadeIn";

export default function About() {
  const ref = useFadeIn();

  return (
    <section
      id="about"
      ref={ref}
      className="fade-section py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center md:text-left">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          Passionate Full Stack Developer skilled in React, Node.js, MongoDB
          and building scalable, real-world applications. I enjoy solving
          complex problems, optimizing performance, and creating clean,
          responsive user interfaces.
        </p>

      </div>
    </section>
  );
}