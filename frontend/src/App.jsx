import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0)

  // ─── Starfield Canvas ───
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const stars = [];
    for (let i = 0; i < 400; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.2,
        baseOpacity: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      stars.forEach((star) => {
        const opacity =
          star.baseOpacity +
          Math.sin(time * star.twinkleSpeed + star.phase) * 0.3;
        ctx.fillStyle = `rgba(200, 220, 255, ${Math.max(0, Math.min(1, opacity))})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  // ─── Custom Cursor ───
  // useEffect(() => {
  //   const cursor = cursorRef.current;
  //   if (!cursor) return;

  //   // Hide on touch devices
  //   if ("ontouchstart" in window) {
  //     cursor.style.display = "none";
  //     return;
  //   }

  //   const moveCursor = (e) => {
  //     cursor.style.left = e.clientX - 6 + "px";
  //     cursor.style.top = e.clientY - 6 + "px";
  //   };

  //   const addHover = () => cursor.classList.add("hovering");
  //   const removeHover = () => cursor.classList.remove("hovering");

  //   document.addEventListener("mousemove", moveCursor);

  //   const attachHovers = () => {
  //     document
  //       .querySelectorAll("a, button, [role='button'], .swiper-button-prev, .swiper-button-next")
  //       .forEach((el) => {
  //         el.addEventListener("mouseenter", addHover);
  //         el.addEventListener("mouseleave", removeHover);
  //       });
  //   };

  //   attachHovers();
  //   const observer = new MutationObserver(attachHovers);
  //   observer.observe(document.body, { childList: true, subtree: true });

  //   return () => {
  //     document.removeEventListener("mousemove", moveCursor);
  //     observer.disconnect();
  //   };
  // }, []);

  // ─── Scroll Progress ───
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#06080f] text-slate-200">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block" />

      {/* Starfield Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}