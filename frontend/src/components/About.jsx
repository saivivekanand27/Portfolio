import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

const stats = [
  {
    icon: Code2,
    value: "3+",
    label: "Projects Built",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Cpu,
    value: "10+",
    label: "Technologies",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Rocket,
    value: "1+",
    label: "Years Experience",
    color: "from-amber-400 to-orange-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-3xl md:text-5xl mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Text Column */}
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I’m a Full Stack Developer who enjoys building things that
              actually work — not just look good. I started with embedded
              systems and automation, which taught me how software interacts
              with the real world.
            </p>

            <p className="text-slate-400 leading-relaxed">
              From developing a Rope Guided Agriculture Bot to creating a Boat
              Safety Monitoring System, I’ve worked on projects where hardware
              and logic come together to solve practical problems. Later, I
              moved into full-stack development and built applications like a
              URL shortener with analytics tracking.
            </p>

            <p className="text-slate-400 leading-relaxed">
              I’m especially interested in system design, performance
              optimization, and building scalable applications. My goal is
              simple — build solutions that are reliable, efficient, and
              meaningful.
            </p>

            {/* <div className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="shimmer-btn inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </a>
            </div> */}
          </motion.div>
          {/* Stats Column */}
          <motion.div
            className="lg:col-span-2 grid gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 flex items-center gap-5 hover:border-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold font-['Outfit'] text-white">
                    {value}
                  </p>
                  <p className="text-sm text-slate-400">{label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>{" "}
          {/* ← was missing */}
        </div>
      </div>
    </section>
  );
}
