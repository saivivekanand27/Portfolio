import useFadeIn from "../useFadeIn";

export default function Skills() {
  const ref = useFadeIn();

  const skillCategories = [
    {
      title: "Languages",
      skills: ["c","Java", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind", "Bootstrap"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Drizzle", "Prisma"],
    },
    {
      title: "Tools & Services",
      skills: ["Nodemailer", "Git", "Docker"],
    },
    {
      title: "Other",
      skills: ["REST APIs", "JWT Auth", "Cloud Deployment", "ML Fundamentals"],
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="fade-section py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Technical{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold text-purple-500 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}