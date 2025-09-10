import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx}",
    "./app/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        "zarea-primary-orange": "#F46600",
        "zarea-success": "#2DBE73",
        "zarea-light-gray": "#F5F5F5",
        "zarea": "#242423",
      },
    },
  },
};

export default config;
