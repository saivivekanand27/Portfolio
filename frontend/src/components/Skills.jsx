import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    color: "#22d3ee",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    color: "#a855f7",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    color: "#3b82f6",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    color: "#f59e0b",
    skills: ["MongoDB", "MySQL", "Drizzle", "Prisma"],
  },
  {
    title: "Tools & Services",
    color: "#10b981",
    skills: ["Nodemailer", "Git", "Docker"],
  },
  {
    title: "Other",
    color: "#ec4899",
    skills: ["REST APIs", "JWT Auth", "Cloud Deploy", "ML Fundamentals"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
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
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: catIndex * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="glass rounded-2xl p-7 group hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300"
            >
              <h3
                className="text-lg font-semibold mb-5 flex items-center gap-3"
                style={{ color: category.color }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: catIndex * 0.08 + i * 0.05,
                    }}
                    className="px-4 py-2 text-sm rounded-lg bg-white/5 text-slate-300 border border-white/5 hover:border-opacity-40 hover:bg-opacity-20 hover:text-white hover:shadow-md transition-all duration-300 cursor-default"
                    style={{
                      "--tw-border-opacity": 0.1,
                      borderLeftWidth: "3px",
                      borderLeftColor: category.color,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 0 15px ${category.color}30`,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}