/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAF7F2",
          100: "#F5F0E8",
          200: "#EDE4D3",
          300: "#E2D4BD",
        },
        rosegold: {
          light: "#E8C39E",
          DEFAULT: "#E0A96D",
          dark: "#C57B57",
        },
        copper: {
          light: "#D49274",
          DEFAULT: "#C57B57",
          dark: "#A45A3B",
        },
        champagne: {
          light: "#F3E7D3",
          DEFAULT: "#E9D9BE",
          dark: "#D4BD96",
        },
        ink: {
          DEFAULT: "#2A2420",
          soft: "#4A3F38",
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(197, 123, 87, 0.12)",
        "glass-lg": "0 20px 60px rgba(197, 123, 87, 0.18)",
        glow: "0 0 40px rgba(224, 169, 109, 0.45)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "ripple": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        ripple: "ripple 4s ease-out infinite",
      },
    },
  },
  plugins: [],
};
