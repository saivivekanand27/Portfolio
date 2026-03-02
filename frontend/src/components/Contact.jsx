import { useState } from "react";
import useFadeIn from "../useFadeIn";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const ref = useFadeIn();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 bg-transparent"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-black/40 backdrop-blur-lg border border-cyan-500/20 p-6 rounded-2xl shadow-xl">
            
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-cyan-300">
              <Mail size={18} />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-cyan-400 transition"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-cyan-400 transition"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-sm focus:outline-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-cyan-500 hover:bg-cyan-600 transition text-sm text-black font-semibold disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully ✅
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-black/40 backdrop-blur-lg border border-cyan-500/20 p-6 rounded-2xl shadow-xl">
            
            <h3 className="text-xl font-semibold mb-6 text-cyan-300">
              Contact Information
            </h3>

            <div className="space-y-6 text-sm">

              <div>
                <p className="text-gray-400 mb-1">Email</p>
                <p className="text-cyan-400">
                  namsanivivekanand@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Location</p>
                <p className="flex items-center gap-2 text-gray-300">
                  <MapPin size={16} className="text-cyan-400" />
                  Hyderabad, India
                </p>
              </div>

              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="mt-4 px-4 py-2 text-sm rounded-md border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                Back to Top
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}