import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Concept from "./components/Concept";
import Piscine from "./components/Piscine";
import Nutrition from "./components/Nutrition";
import BmiCalculator from "./components/BmiCalculator";
import Pricing from "./components/Pricing";
import BookingForm from "./components/BookingForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorLight from "./components/CursorLight";

/** Soft parallax floating orbs that move on scroll for 4D depth. */
function ParallaxOrbs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (ref.current) {
          const orbs = ref.current.querySelectorAll<HTMLElement>("[data-depth]");
          orbs.forEach((o) => {
            const d = parseFloat(o.dataset.depth || "0");
            o.style.transform = `translate3d(0, ${y * d}px, 0)`;
          });
        }
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        data-depth="0.04"
        className="absolute -left-20 top-[20%] h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(224,169,109,0.4), transparent 70%)" }}
      />
      <div
        data-depth="0.07"
        className="absolute right-[-60px] top-[60%] h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(197,123,87,0.4), transparent 70%)" }}
      />
      <div
        data-depth="0.03"
        className="absolute left-[30%] top-[120%] h-64 w-64 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(243,231,211,0.6), transparent 70%)" }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream-50">
      <CursorLight />
      <ParallaxOrbs />
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Piscine />
        <Nutrition />
        <BmiCalculator />
        <Pricing />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
