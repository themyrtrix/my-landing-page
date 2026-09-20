import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D1D1F",
        muted: "#6E6E73",
        canvas: "#FBFBFD",
        cloud: "#F5F5F7",
        accent: "#0071E3"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(29,29,31,.08), 0 2px 8px rgba(29,29,31,.04)",
        float: "0 28px 90px rgba(0,113,227,.16), 0 8px 24px rgba(29,29,31,.08)"
      },
      borderRadius: { "4xl": "2rem" }
    }
  },
  plugins: []
};
export default config;
