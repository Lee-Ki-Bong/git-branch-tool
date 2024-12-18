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
        neonWhite: "var(--neon-white)",
        neonGreen: "var(--neon-green)"
      },
      keyframes: {
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } }
      },
      animation: {
        blink: "blink 1s infinite"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    function ({ addUtilities, theme }: PluginAPI) {
      const newUtilities = {
        ".text-shadow-neon": {
          textShadow: `
          0 0 4px rgba(255, 255, 255, 0.6), 
          0 0 10px rgba(255, 255, 255, 0.8), 
          0 0 20px rgba(0, 215, 195, 0.3), 
          0 0 40px rgba(0, 215, 195, 0.3)`
        },
        ".text-shadow-neon-green": {
          textShadow: `
            0 0 4px rgba(51, 255, 51, 0.6), 
            0 0 8px rgba(51, 255, 51, 0.8), 
            0 0 12px rgba(0, 255, 0, 0.6), 
            0 0 22px rgba(0, 153, 0, 0.5)`
        },
        ".text-shadow-neon-orange": {
          textShadow: `
            0 0 4px rgba(255, 153, 0, 0.6), 
            0 0 8px rgba(255, 153, 0, 0.8), 
            0 0 12px rgba(255, 153, 0, 0.6), 
            0 0 22px rgba(255, 102, 0, 0.5)`
        }
      }
      addUtilities(newUtilities)
    }
  ]
} satisfies Config
