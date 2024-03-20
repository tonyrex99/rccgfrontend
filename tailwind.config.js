/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        //    custom: 'var(--custom-color)',
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  safelist: [
    // Basic background positioning syntax
    "bg-[position]",
    {
      pattern: /bg-(.+)/, // Capture any combination of values (left, right, top, bottom, center)
      variants: ["lg", "md", "sm"], // Target desired screen sizes for variations
    },

    // Background sizing variations
    "h-[size]",
    {
      pattern: /h-(.+)/, // Capture any height value (px, %, etc.)
      variants: ["lg", "md", "sm"], // Target desired screen sizes for variations
    },

    // Your specific example (optional, for clarity)
    "bg-left_calc(-200%)_top_calc(0%) lg:h-[664.49343px] md:bg-top",
  ],
};
