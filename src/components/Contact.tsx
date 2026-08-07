import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "06:00 – 22:00" },
  { day: "Saturday", time: "07:00 – 21:00" },
  { day: "Sunday", time: "08:00 – 14:00" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-copper">
            Location & Contact
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">
            Find us in <span className="text-gradient-gold">Kélibia</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="glass rounded-2xl p-6 shadow-glass">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold/20 to-copper/20 text-copper">
                  <MapPin className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Address
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft">
                    Rue Ibn Khaldoun, Kélibia, Tunisia
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 shadow-glass">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold/20 to-copper/20 text-copper">
                  <Phone className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Phone
                  </h3>
                  <a
                    href="tel:+21672000000"
                    className="mt-1 block text-sm text-ink-soft transition-colors hover:text-copper"
                  >
                    +216 72 000 000
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 shadow-glass">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold/20 to-copper/20 text-copper">
                  <Clock className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Opening Hours
                  </h3>
                  <ul className="mt-2 space-y-1.5">
                    {hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex justify-between text-sm text-ink-soft"
                      >
                        <span>{h.day}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-glass-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink" />
            {/* grid overlay */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(224,169,109,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224,169,109,0.3) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            {/* glow */}
            <div
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(224,169,109,0.6), transparent 70%)",
              }}
            />
            {/* roads */}
            <div className="absolute left-0 top-1/3 h-1 w-full -rotate-6 bg-rosegold/30" />
            <div className="absolute left-1/4 top-0 h-full w-1 rotate-12 bg-copper/20" />

            {/* pin */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <div className="relative">
                <div className="absolute -inset-4 animate-ripple rounded-full border border-rosegold/60" />
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rosegold to-copper shadow-glow">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
              </div>
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="glass-dark rounded-2xl p-5">
                <p className="font-display text-lg font-semibold text-white">
                  YOUR GYM — Kélibia
                </p>
                <p className="mt-1 text-sm text-champagne-light/80">
                  Rue Ibn Khaldoun
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rue+Ibn+Khaldoun+Kelibia+Tunisia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-rosegold transition-colors hover:text-champagne-light"
                >
                  <Navigation className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
