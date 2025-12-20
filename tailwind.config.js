/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        /* ===== Brand Colors ===== */
        primary: {
          DEFAULT: "#0D2548", // Dark Blue
          light: "#163A6B",
          dark: "#08172D",
        },

        accent: {
          DEFAULT: "#2DBBC5", // Teal
          light: "#6AD5DC",
          dark: "#1C8E96",
        },

        /* ===== Neutral System ===== */
        background: "#F7F9FA",
        surface: "#FFFFFF",

        text: {
          primary: "#0F172A",   // Near-black
          secondary: "#6B7280", // Muted grey
          muted: "#9CA3AF",
        },

        border: "#E5E7EB",
      },

      /* ===== Typography ===== */
      fontFamily: {
        heading: ["Montserrat", "ui-sans-serif", "system-ui"],
        body: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
      },

      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px" }],
        "4xl": ["36px", { lineHeight: "44px" }],
        "5xl": ["48px", { lineHeight: "56px" }],
      },

      /* ===== Spacing Scale ===== */
      spacing: {
        xs: "8px",
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },

      /* ===== Radius ===== */
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },

      /* ===== Shadows ===== */
      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
        md: "0 4px 12px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 25px rgba(0, 0, 0, 0.15)",
      },

      /* ===== Animations ===== */
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      transitionDuration: {
        fast: "150ms",
        normal: "300ms",
        slow: "500ms",
      },
    },
  },

  plugins: [],
};
