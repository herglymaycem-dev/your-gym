import { motion } from "framer-motion";
import { Waves, Flame, Sparkles, Droplets } from "lucide-react";
import { useState } from "react";

/** Animated water ripple pool — SVG layers with expanding ripples on hover. */
function PoolRipples() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-3xl"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* water gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-copper/30 via-rosegold/20 to-champagne-dark/40" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 120%, rgba(255,255,255,0.4), transparent 60%)",
        }}
      />

      {/* shimmer surface */}
      <motion.div
        className="absolute inset-x-0 top-1/3 h-px bg-white/40"
        animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [0.8, 1.1, 0.8] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* expanding ripples */}
      {[0, 1.3, 2.6].map((d, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50"
          animate={{ scale: hover ? [1, 3.2] : [1, 2.4], opacity: [0.5, 0] }}
          transition={{
            duration: hover ? 3 : 4,
            repeat: Infinity,
            delay: d,
            ease: "easeOut",
          }}
        />
      ))}

      {/* floating droplet */}
      <motion.div
        className="absolute right-8 top-10 text-white/70"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Droplets className="h-8 w-8" />
      </motion.div>
    </div>
  );
}

const features = [
  {
    icon: Waves,
    title: "Indoor Heated Pool",
    desc: "A climate-controlled piscine kept at the perfect temperature year-round for lap swimming and recovery.",
  },
  {
    icon: Flame,
    title: "Sauna & Spa",
    desc: "Traditional sauna and steam rituals to relax muscles, flush toxins, and restore the mind.",
  },
  {
    icon: Sparkles,
    title: "Aqua-Fitness",
    desc: "Low-impact, high-result aquatic classes guided by certified aqua-fitness coaches.",
  },
];

export default function Piscine() {
  return (
    <section id="piscine" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
              Piscine & Aquatic Zone
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              The luxury indoor
              <br />
              <span className="text-gradient-gold">heated pool</span> & spa
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-ink-soft">
              Step from the training floor into a tranquil aquatic world. Our
              heated indoor pool, sauna, and aqua-fitness studio form a complete
              recovery ecosystem — the soft-luxury heart of YOUR GYM.
            </p>

            <div className="mt-9 space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-4 rounded-2xl glass p-5 shadow-glass"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold/20 to-copper/20 text-copper">
                    <f.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-glass-lg ring-1 ring-white/40"
          >
            <PoolRipples />
            <div className="absolute inset-x-0 bottom-0 z-10 glass-dark p-6">
              <p className="font-display text-2xl font-semibold text-white">
                28°C year-round
              </p>
              <p className="mt-1 text-sm text-champagne-light/80">
                Hover the pool to feel the ripples
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
