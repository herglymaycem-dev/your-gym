import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, CalendarCheck, User, Phone, Clock } from "lucide-react";
import { supabase } from "../lib/supabase";

type Status = "idle" | "loading" | "success" | "error";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("09:00");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      setError("Please fill in your name and phone number.");
      return;
    }
    setStatus("loading");
    setError("");
    const { error: dbError } = await supabase
      .from("day_pass_bookings")
      .insert({ name: name.trim(), phone: phone.trim(), preferred_time: time });
    if (dbError) {
      setStatus("error");
      setError("Something went wrong. Please try again or call us.");
      return;
    }
    setStatus("success");
    setName("");
    setPhone("");
    setTime("09:00");
  };

  return (
    <section id="booking" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] glass p-8 shadow-glass-lg sm:p-10"
        >
          <div className="mb-7 text-center">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-copper">
              <CalendarCheck className="h-4 w-4" />
              Free Day-Pass
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Book your <span className="text-gradient-gold">complimentary pass</span>
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              One free day to experience the full YOUR GYM universe — no commitment.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-rosegold/10 to-copper/10 p-8 text-center"
              >
                <CheckCircle2 className="h-14 w-14 text-copper" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  You're booked!
                </h3>
                <p className="mt-2 text-sm text-ink-soft">
                  We'll call to confirm your visit. See you soon at YOUR GYM Kélibia.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full glass px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-copper"
                >
                  Book another pass
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={submit}
                className="space-y-5"
              >
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
                    <User className="h-4 w-4 text-copper" />
                    Nom
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-cream-300 bg-white/60 px-4 py-3 text-ink placeholder:text-ink-soft/50 transition-all focus:border-rosegold focus:outline-none focus:ring-2 focus:ring-rosegold/30"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
                    <Phone className="h-4 w-4 text-copper" />
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+216 ..."
                    className="w-full rounded-xl border border-cream-300 bg-white/60 px-4 py-3 text-ink placeholder:text-ink-soft/50 transition-all focus:border-rosegold focus:outline-none focus:ring-2 focus:ring-rosegold/30"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
                    <Clock className="h-4 w-4 text-copper" />
                    Heure
                  </label>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-cream-300 bg-white/60 px-4 py-3 text-ink transition-all focus:border-rosegold focus:outline-none focus:ring-2 focus:ring-rosegold/30"
                  />
                </div>

                {status === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rosegold to-copper px-6 py-4 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:scale-[1.02] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Booking...
                    </>
                  ) : (
                    "Reserve My Free Pass"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
