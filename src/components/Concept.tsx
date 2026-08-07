import { motion } from "framer-motion";
import { Cpu, Dumbbell, Users, Award } from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "State-of-the-Art Machinery",
    desc: "Premium cardio and strength equipment calibrated for performance and quiet precision.",
  },
  {
    icon: Dumbbell,
    title: "Elite Coaching",
    desc: "Certified trainers craft personalized programs that respect your rhythm and goals.",
  },
  {
    icon: Users,
    title: "Boutique Community",
    desc: "An intimate space where every member is known — never crowded, always inspiring.",
  },
  {
    icon: Award,
    title: "Luxury Wellness",
    desc: "From pool to nutrition bar, every detail is designed to feel effortless and refined.",
  },
];

export default function Concept() {
  return (
    <section id="concept" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            The Concept
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Where performance meets <span className="text-gradient-gold">serenity</span>
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            YOUR GYM is a curated fitness sanctuary on the coast of Kélibia —
            engineered for results, designed for calm.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group glass rounded-3xl p-7 shadow-glass transition-shadow duration-300 hover:shadow-glass-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rosegold/20 to-copper/20 text-copper transition-transform duration-300 group-hover:scale-110">
                <p.icon className="h-7 w-7" strokeWidth={1.6} />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
