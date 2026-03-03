import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); setFormData({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
    setLoading(false);
  };

  const socials = [
    { icon: Github, href: "https://github.com/saivivekanand27", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/vivek", label: "LinkedIn" },
    { icon: Mail, href: "mailto:namsanivivekanand@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="section-heading text-3xl md:text-5xl mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4">Let's build something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3 glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-cyan-400 font-['Outfit']"><Send size={18} />Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="floating-input-group">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder=" " required id="contact-name" />
                <label htmlFor="contact-name">Your Name</label>
              </div>
              <div className="floating-input-group">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder=" " required id="contact-email" />
                <label htmlFor="contact-email">Your Email</label>
              </div>
              <div className="floating-input-group">
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder=" " required id="contact-message" />
                <label htmlFor="contact-message">Your Message</label>
              </div>
              <button type="submit" disabled={loading} className="shimmer-btn w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 disabled:opacity-60">
                {loading ? (<><Loader2 size={16} className="animate-spin" />Sending...</>) : (<><Send size={16} />Send Message</>)}
              </button>
              {status === "success" && <p className="text-emerald-400 text-sm text-center">✅ Message sent successfully!</p>}
              {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-6 group hover:border-cyan-400/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><Mail size={20} className="text-white" /></div>
                <div><p className="text-sm text-slate-500">Email</p><p className="text-cyan-400 text-sm font-medium">namsanivivekanand@gmail.com</p></div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6 group hover:border-cyan-400/20 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"><MapPin size={20} className="text-white" /></div>
                <div><p className="text-sm text-slate-500">Location</p><p className="text-slate-300 text-sm font-medium">Hyderabad, India</p></div>
              </div>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-slate-500 mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/5 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300" aria-label={label}><Icon size={20} /></a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}