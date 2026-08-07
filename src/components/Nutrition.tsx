import { motion } from "framer-motion";
import { Zap, Dumbbell, FlaskConical, Coffee, Check } from "lucide-react";
import { useState } from "react";

const pack = [
  {
    icon: Zap,
    name: "Shot Express",
    tag: "Pre-workout",
    desc: "An energy booster taken before training to sharpen focus and fuel intensity.",
    color: "from-rosegold to-copper",
  },
  {
    icon: Dumbbell,
    name: "Dose Protéine",
    tag: "Post-workout",
    desc: "High-quality protein intake to repair muscle and accelerate recovery.",
    color: "from-copper to-rosegold",
  },
  {
    icon: FlaskConical,
    name: "Dose Créatine",
    tag: "Performance",
    desc: "Pure creatine dose for explosive performance and deeper muscle recovery.",
    color: "from-champagne-dark to-copper",
  },
];

/** Tilt-on-hover shaker card. */
function ShakerCard({
  icon: Icon,
  name,
  tag,
  desc,
  color,
  delay,
}: {
  icon: typeof Zap;
  name: string;
  tag: string;
  desc: string;
  color: string;
  delay: number;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 12, ry: px * 12 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: "preserve-3d",
      }}
      className="group relative overflow-hidden rounded-3xl glass p-7 shadow-glass transition-shadow duration-300 hover:shadow-glass-lg"
    >
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${color} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-40`}
      />
      <div
        className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-glow`}
        style={{ transform: "translateZ(40px)" }}
      >
        <Icon className="h-8 w-8" strokeWidth={1.6} />
      </div>
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper">
        {tag}
      </span>
      <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{desc}</p>

      <div className="mt-6 flex items-center gap-2 text-xs font-medium text-copper">
        <Coffee className="h-4 w-4" />
        Served at the Nutrition Bar
      </div>
    </motion.div>
  );
}

export default function Nutrition() {
  return (
    <section id="nutrition" className="relative py-28">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(224,169,109,0.12), transparent 55%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Gym Nutrition Bar
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Pack Express <span className="text-gradient-gold">Energy & Recovery</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            A complete three-step nutrition ritual — energy before, protein and
            creatine after. Available at the Nutrition Bar, included in VIP
            packages or as an add-on.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pack.map((p, i) => (
            <ShakerCard key={p.name} {...p} delay={i * 0.12} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl glass-dark px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-6"
        >
          <span className="flex items-center gap-2 text-sm font-medium text-champagne-light">
            <Check className="h-4 w-4 text-rosegold" />
            Included in Pass VIP & Elite Gold
          </span>
          <span className="hidden h-4 w-px bg-rosegold/40 sm:block" />
          <span className="text-sm text-champagne-light/80">
            Or order à la carte at the bar
          </span>
        </motion.div>
      </div>
    </section>
  );
}
