import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
<<<<<<< HEAD
        primary: "#f8fafc",
        secondary: "#b91c1c",
=======
>>>>>>> fb3bfc07ec47d6b6163842852bc401c9904a902d
      },
    },
  },
  plugins: [],
} satisfies Config;
<<<<<<< HEAD

// note css
=======
>>>>>>> fb3bfc07ec47d6b6163842852bc401c9904a902d
