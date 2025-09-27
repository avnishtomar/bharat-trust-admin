/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#08A66D",
          light: "#34C98C",
          dark: "#067852",
          hover: "#0A915F",
          foreground: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#2E3133",
          light: "#94A3B8",
          dark: "#475569",
          hover: "#55677D",
          foreground: "#FFFFFF",
        },

        success: {
          DEFAULT: "#22C55E",
          light: "#4ADE80",
          dark: "#15803D",
          foreground: "#FFFFFF",
        },

        warning: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#B45309",
          foreground: "#FFFFFF",
        },

        danger: {
          DEFAULT: "#EF4444",
          light: "#F87171",
          dark: "#B91C1C",
          foreground: "#FFFFFF",
        },

        info: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#1D4ED8",
          foreground: "#FFFFFF",
        },

        background: {
          DEFAULT: "#F9FAFB",
          dark: "#111827",
          card: "#FFFFFF",
          muted: "#F3F4F6",
        },

        text: {
          primary: "#111827",
          secondary: "#374151",
          muted: "#6B7280",
          inverted: "#FFFFFF",
        },

        border: {
          DEFAULT: "#E5E7EB",
          dark: "#374151",
          light: "#F3F4F6",
        },

        accent: {
          DEFAULT: "#0A915F",
          light: "#34C98C",
          dark: "#067852",
          foreground: "#FFFFFF",
        },

        hover: {
          DEFAULT: "#0A915F",
          light: "#34C98C",
          dark: "#067852",
          foreground: "#FFFFFF",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem",
        "3xl": "3rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
