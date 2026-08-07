import { Dumbbell, Instagram, Facebook, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-cream-300 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rosegold to-copper text-white">
              <Dumbbell className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-semibold text-ink">
              YOUR <span className="text-gradient-gold">GYM</span>
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <a href="#concept" className="transition-colors hover:text-copper">Concept</a>
            <a href="#piscine" className="transition-colors hover:text-copper">Piscine & Spa</a>
            <a href="#nutrition" className="transition-colors hover:text-copper">Pack Nutrition</a>
            <a href="#tarifs" className="transition-colors hover:text-copper">Tarifs</a>
            <a href="#contact" className="transition-colors hover:text-copper">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink transition-colors hover:text-copper"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-ink transition-colors hover:text-copper"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-cream-200 pt-6 text-xs text-ink-soft sm:flex-row">
          <p>© {new Date().getFullYear()} YOUR GYM Kélibia. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart className="h-3.5 w-3.5 text-copper" /> in Tunisia
          </p>
        </div>
      </div>
    </footer>
  );
}
