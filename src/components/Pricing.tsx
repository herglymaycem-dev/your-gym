import { motion } from "framer-motion";
import { Check, Crown, Star, Dumbbell, Waves, Sparkles } from "lucide-react";

const tiers = [
  {
    name: "Pass Fitness",
    price: 100,
    icon: Dumbbell,
    features: [
      "Access to weightlifting zone",
      "Cardio machines unlimited",
      "Locker room & showers",
      "Open 06:00 – 22:00",
    ],
    popular: false,
  },
  {
    name: "Pass VIP + Piscine",
    price: 170,
    icon: Waves,
    features: [
      "Everything in Pass Fitness",
      "Heated indoor pool access",
      "Sauna & steam room",
      "Pack Nutrition discount",
      "Priority aqua-fitness classes",
    ],
    popular: true,
  },
  {
    name: "Pass Elite Gold 4D",
    price: 300,
    icon: Crown,
    features: [
      "All-inclusive full access",
      "Private 1-on-1 coaching",
      "Unlimited Piscine & Spa",
      "VIP lounge access",
      "Free daily Pack Nutrition (Shot + Protéine + Créatine)",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="tarifs" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Tarifs
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Choose your <span className="text-gradient-gold">membership</span>
          </h2>
          <p className="mt-5 leading-relaxed text-ink-soft">
            Transparent monthly pricing in Tunisian Dinars. Cancel anytime, no
            long-term contracts.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col rounded-3xl p-8 shadow-glass transition-shadow duration-300 hover:shadow-glass-lg ${
                t.popular
                  ? "glass-dark text-white ring-2 ring-rosegold/60 lg:scale-105"
                  : "glass text-ink"
              }`}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-rosegold to-copper px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-glow">
                  <Star className="h-3 w-3" />
                  Most Popular
                </span>
              )}

              <div
                className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                  t.popular
                    ? "bg-gradient-to-br from-rosegold to-copper text-white"
                    : "bg-gradient-to-br from-rosegold/20 to-copper/20 text-copper"
                }`}
              >
                <t.icon className="h-7 w-7" strokeWidth={1.6} />
              </div>

              <h3
                className={`font-display text-2xl font-semibold ${
                  t.popular ? "text-white" : "text-ink"
                }`}
              >
                {t.name}
              </h3>

              <div className="mt-4 flex items-end gap-1">
                <span
                  className={`font-display text-5xl font-semibold ${
                    t.popular ? "text-gradient-gold" : "text-ink"
                  }`}
                >
                  {t.price}
                </span>
                <span
                  className={`mb-1.5 text-sm font-medium ${
                    t.popular ? "text-champagne-light/80" : "text-ink-soft"
                  }`}
                >
                  DT / mois
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        t.popular ? "text-rosegold" : "text-copper"
                      }`}
                    />
                    <span
                      className={t.popular ? "text-champagne-light/90" : "text-ink-soft"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  t.popular
                    ? "bg-gradient-to-r from-rosegold to-copper text-white shadow-glow hover:scale-105"
                    : "glass text-ink hover:text-copper hover:scale-105"
                }`}
              >
                <Sparkles className="h-4 w-4" />
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
