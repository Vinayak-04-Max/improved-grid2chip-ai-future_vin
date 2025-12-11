import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      // Fibonacci-based spacing scale
      spacing: {
        "fib-1": "0.0625rem",
        "fib-2": "0.125rem",
        "fib-3": "0.1875rem",
        "fib-5": "0.3125rem",
        "fib-8": "0.5rem",
        "fib-13": "0.8125rem",
        "fib-21": "1.3125rem",
        "fib-34": "2.125rem",
        "fib-55": "3.4375rem",
        "fib-89": "5.5625rem",
        "fib-144": "9rem",
        "fib-233": "14.5625rem",
      },
      // Golden ratio typography scale
      fontSize: {
        "phi-xs": ["0.618rem", { lineHeight: "1.5" }],
        "phi-sm": ["0.786rem", { lineHeight: "1.5" }],
        "phi-base": ["1rem", { lineHeight: "1.618" }],
        "phi-lg": ["1.272rem", { lineHeight: "1.5" }],
        "phi-xl": ["1.618rem", { lineHeight: "1.3" }],
        "phi-2xl": ["2.058rem", { lineHeight: "1.2" }],
        "phi-3xl": ["2.618rem", { lineHeight: "1.15" }],
        "phi-4xl": ["3.33rem", { lineHeight: "1.1" }],
        "phi-5xl": ["4.236rem", { lineHeight: "1.05" }],
        "phi-6xl": ["5.392rem", { lineHeight: "1" }],
        "phi-7xl": ["6.854rem", { lineHeight: "0.95" }],
        "phi-8xl": ["8.721rem", { lineHeight: "0.9" }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // Deep space layers
        void: "hsl(var(--void))",
        abyss: "hsl(var(--abyss))",
        deep: "hsl(var(--deep))",
        surface: "hsl(var(--surface))",
        elevated: "hsl(var(--elevated))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        g2c: {
          blue: "hsl(var(--primary))",
          "blue-glow": "hsl(var(--g2c-blue-glow))",
          green: "hsl(var(--accent))",
          "green-glow": "hsl(var(--g2c-green-glow))",
        },
        neon: {
          cyan: "hsl(var(--neon-cyan))",
          magenta: "hsl(var(--neon-magenta))",
          amber: "hsl(var(--neon-amber))",
          violet: "hsl(var(--neon-violet))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        fib: "0.5rem",
        "fib-lg": "0.8125rem",
        "fib-xl": "1.3125rem",
      },
      boxShadow: {
        "glow-sm": "0 0 0.8125rem hsl(var(--primary) / 0.3)",
        glow: "0 0 1.3125rem hsl(var(--primary) / 0.4), 0 0 3.4375rem hsl(var(--primary) / 0.2)",
        "glow-lg": "0 0 2.125rem hsl(var(--primary) / 0.4), 0 0 5.5625rem hsl(var(--primary) / 0.2), 0 0 8rem hsl(var(--primary) / 0.1)",
        "glow-accent": "0 0 1.3125rem hsl(var(--accent) / 0.4), 0 0 3.4375rem hsl(var(--accent) / 0.2)",
        "depth-1": "0 0.125rem 0.5rem hsl(222 47% 0% / 0.3)",
        "depth-2": "0 0.3125rem 1.3125rem hsl(222 47% 0% / 0.4)",
        "depth-3": "0 0.8125rem 3.4375rem hsl(222 47% 0% / 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 0.8125rem hsl(var(--primary) / 0.3)",
          },
          "50%": {
            boxShadow: "0 0 2.125rem hsl(var(--primary) / 0.6)",
          },
        },
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.5rem)" },
        },
        "float-3d": {
          "0%, 100%": {
            transform: "translateY(0) rotateX(0) rotateY(0)",
          },
          "25%": {
            transform: "translateY(-0.5rem) rotateX(2deg) rotateY(-2deg)",
          },
          "50%": {
            transform: "translateY(-0.8125rem) rotateX(0) rotateY(0)",
          },
          "75%": {
            transform: "translateY(-0.5rem) rotateX(-2deg) rotateY(2deg)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        orbit: {
          from: {
            transform: "rotate(0deg) translateX(100px) rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg) translateX(100px) rotate(-360deg)",
          },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.3125rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(220 100% 60% / 0.3)" },
          "50%": { boxShadow: "0 0 40px hsl(220 100% 60% / 0.6)" },
        },
        "border-flow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "float-subtle": "float-subtle 4s ease-in-out infinite",
        "float-3d": "float-3d 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "scan-line": "scan-line 4s ease-in-out infinite",
        orbit: "orbit 20s linear infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "border-flow": "border-flow 4s ease infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 40% 20%, hsl(var(--primary) / 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--accent) / 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--neon-violet) / 0.1) 0px, transparent 50%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;