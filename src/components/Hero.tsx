import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles, Waves, Dumbbell, HeartPulse } from "lucide-react";

/** Floating metallic dumbbell — pure CSS/SVG, tilts on hover. */
function FloatingDumbbell() {
  return (
    <motion.div
      className="absolute left-[6%] top-[28%] z-10 hidden md:block"
      animate={{ y: [0, -22, 0], rotate: [-3, 3, -3] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.08, rotate: 8 }}
    >
      <div className="relative h-28 w-28 drop-shadow-2xl">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-champagne-light via-rosegold to-copper opacity-90 blur-md" />
        <Dumbbell className="relative h-28 w-28 text-ink" strokeWidth={1.4} />
      </div>
    </motion.div>
  );
}

/** Floating energy shaker — tilts on hover. */
function FloatingShaker() {
  return (
    <motion.div
      className="absolute right-[8%] top-[22%] z-10 hidden lg:block"
      animate={{ y: [0, -16, 0], rotate: [2, -4, 2] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      whileHover={{ scale: 1.1, rotate: -10 }}
    >
      <div className="flex h-36 w-20 flex-col items-center justify-end rounded-b-3xl rounded-t-xl bg-gradient-to-b from-champagne-light to-copper/80 p-2 shadow-2xl ring-1 ring-white/40">
        <div className="mb-2 h-2 w-full rounded-full bg-white/70" />
        <div className="flex flex-1 w-full items-end justify-center rounded-b-2xl bg-gradient-to-t from-copper to-rosegold/40">
          <span className="pb-3 text-[10px] font-bold tracking-widest text-white">
            ENERGY
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/** Floating cardio machine icon. */
function FloatingCardio() {
  return (
    <motion.div
      className="absolute right-[16%] bottom-[16%] z-10 hidden md:block"
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      whileHover={{ scale: 1.08 }}
    >
      <div className="glass flex h-20 w-20 items-center justify-center rounded-2xl shadow-glass-lg">
        <HeartPulse className="h-10 w-10 text-copper" strokeWidth={1.6} />
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* depth layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-100 via-cream-50 to-cream-200" />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 70% 20%, rgba(224,169,109,0.25), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(197,123,87,0.18), transparent 55%)",
        }}
      />
      {/* decorative rings */}
      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-rosegold/20"
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper/10"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <FloatingDumbbell />
      <FloatingShaker />
      <FloatingCardio />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-20 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-copper"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Kélibia · Tunisia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="font-display text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl md:text-7xl"
        >
          Redefining
          <br />
          <span className="text-gradient-gold">Luxury Fitness</span>
          <br />
          in Kélibia
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          State-of-the-art machinery, a heated indoor pool, and elite coaching —
          an immersive wellness experience crafted for those who expect more.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rosegold to-copper px-8 py-4 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:scale-105"
          >
            Claim Your Free Pass
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#piscine"
            className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold text-ink transition-colors hover:text-copper"
          >
            <Waves className="h-4 w-4 text-copper" />
            Explore Piscine & Spa
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-copper/40 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-copper/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
