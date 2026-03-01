import useFadeIn from "../useFadeIn";

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" ref={ref} className="fade-section py-24 px-6">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>

        <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
          I am a passionate and detail-oriented Full Stack Developer with strong
          expertise in React, Node.js, and MongoDB, focused on building
          scalable, high-performance web applications. I enjoy transforming
          ideas into real-world solutions by designing clean user interfaces and
          developing efficient backend systems. With a solid foundation in Data
          Structures, Algorithms, and Core Computer Science concepts, I approach
          problems with a structured and analytical mindset. I continuously
          strive to write optimized, maintainable code while following industry
          best practices to ensure performance, scalability, and
          maintainability. Beyond web development, I am deeply interested in
          understanding how systems work end-to-end — from frontend user
          experience to backend architecture and database optimization. I
          actively build projects to strengthen my problem-solving skills and
          gain practical exposure to real-world engineering challenges. In
          addition to software development, I have a strong interest in robotics
          and embedded systems, where I enjoy integrating hardware with software
          to build intelligent, real-world solutions. Exploring automation,
          sensor-based systems, and microcontroller-driven applications allows
          me to expand my technical perspective beyond traditional web
          development. I am constantly learning, experimenting with new
          technologies, and pushing myself to grow as a developer and engineer.
          My goal is to contribute to impactful projects, collaborate with
          strong technical teams, and evolve into a well-rounded software
          engineer capable of building reliable, scalable, and innovative
          digital products.
        </p>
      </div>
    </section>
  );
}
