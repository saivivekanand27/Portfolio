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
  const [status, setStatus] = useState(null); // success | error

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
        setFormData({
          name: "",
          email: "",
          message: "",
        });
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
      className="fade-section py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get in{" "}
          <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg">

            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Mail size={18} className="text-purple-500" />
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
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:border-purple-500"
              />

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-sm focus:outline-none focus:border-purple-500"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition text-sm text-white font-medium disabled:opacity-60"
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

              {/* Status Message */}
              {status === "success" && (
                <p className="text-green-600 text-sm text-center">
                  Message sent successfully ✅
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Try again.
                </p>
              )}

            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow-lg">

            <h3 className="text-xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 text-sm">

              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">
                  Email
                </p>
                <p className="text-purple-600 dark:text-purple-400">
                  namsanivivekanand@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-500" />
                  Hyderabad, India
                </p>
              </div>

              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="mt-4 px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
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