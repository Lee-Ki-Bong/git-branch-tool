import type { Config } from "tailwindcss"
import { PluginAPI } from "tailwindcss/types/config"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "4rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      }
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neonRed: "var(--neon-red)",
        neonOrange: "var(--neon-orange)",
        neonPurple: "var(--neon-purple)",
        neonBlue: "var(--neon-blue)",
        neonNormal: "var(--neon-normal)",
        neonWhite: "var(--neon-white)"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addUtilities, theme }: PluginAPI) {}
  ]
} satisfies Config
