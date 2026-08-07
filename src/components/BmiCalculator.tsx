import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Gauge, Activity } from "lucide-react";

function bmiCategory(bmi: number) {
  if (bmi < 18.5)
    return { label: "Underweight", color: "#7FB3D5", tip: "Focus on strength & protein intake." };
  if (bmi < 25)
    return { label: "Healthy", color: "#9CCB8A", tip: "Maintain your routine & recovery." };
  if (bmi < 30)
    return { label: "Overweight", color: "#E0A96D", tip: "Cardio + structured training advised." };
  return { label: "Obese", color: "#C57B57", tip: "Coached program recommended for safety." };
}

export default function BmiCalculator() {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(72);

  const bmi = useMemo(() => {
    const m = height / 100;
    return +(weight / (m * m)).toFixed(1);
  }, [height, weight]);

  const cat = bmiCategory(bmi);

  // gauge: map BMI 15-40 to 0-180deg
  const angle = Math.min(180, Math.max(0, ((bmi - 15) / (40 - 15)) * 180));

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[2rem] glass p-8 shadow-glass-lg sm:p-12"
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-copper">
                <Activity className="h-4 w-4" />
                Interactive BMI Calculator
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
                Know your <span className="text-gradient-gold">starting point</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                Adjust the sliders to see your body mass index and a tailored
                recommendation from our coaching team.
              </p>

              <div className="mt-8 space-y-7">
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">Height</span>
                    <span className="font-semibold text-copper">{height} cm</span>
                  </div>
                  <input
                    type="range"
                    min={140}
                    max={210}
                    value={height}
                    onChange={(e) => setHeight(+e.target.value)}
                    className="w-full"
                    style={{
                      background: `linear-gradient(90deg, #E0A96D ${(height - 140) / 70 * 100}%, #EDE4D3 ${(height - 140) / 70 * 100}%)`,
                    }}
                  />
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-medium text-ink">Weight</span>
                    <span className="font-semibold text-copper">{weight} kg</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={140}
                    value={weight}
                    onChange={(e) => setWeight(+e.target.value)}
                    className="w-full"
                    style={{
                      background: `linear-gradient(90deg, #C57B57 ${(weight - 40) / 100 * 100}%, #EDE4D3 ${(weight - 40) / 100 * 100}%)`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Gauge */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative h-52 w-52">
                <svg viewBox="0 0 200 110" className="h-full w-full overflow-visible">
                  {/* track */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#EDE4D3"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* colored segments */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 70 30"
                    fill="none"
                    stroke="#7FB3D5"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 70 30 A 80 80 0 0 1 115 24"
                    fill="none"
                    stroke="#9CCB8A"
                    strokeWidth="14"
                  />
                  <path
                    d="M 115 24 A 80 80 0 0 1 150 44"
                    fill="none"
                    stroke="#E0A96D"
                    strokeWidth="14"
                  />
                  <path
                    d="M 150 44 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#C57B57"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* needle */}
                  <motion.g
                    animate={{ rotate: angle - 90 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                    style={{ originX: "100px", originY: "100px" }}
                  >
                    <line
                      x1="100"
                      y1="100"
                      x2="100"
                      y2="28"
                      stroke="#2A2420"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="100" cy="28" r="4" fill={cat.color} />
                  </motion.g>
                  <circle cx="100" cy="100" r="8" fill="#2A2420" />
                  <circle cx="100" cy="100" r="3" fill="#E0A96D" />
                </svg>
                <div className="absolute inset-x-0 bottom-0 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <Gauge className="h-4 w-4 text-copper" />
                    <span className="font-display text-4xl font-semibold text-ink">
                      {bmi}
                    </span>
                  </div>
                  <span
                    className="mt-1 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: cat.color }}
                  >
                    {cat.label}
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-center text-xs leading-relaxed text-ink-soft">
                {cat.tip}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
