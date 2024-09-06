import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightPink: "#FDEBF9",
        lightsky: "#E8F0FB",
        lightOrange: "#FFEFE7", 
        textRed:"#FF5151",
        textsky:"#3786F1",
        textPink:"#EE61CF",
        buttbg:"#FF5151",
        activityboxbg:"#1B204A",
        textsidebar:"#686868",
        textlogo:"#0A337A",
        textonlcick:"#FF5151",
        boxbg:"#E0E0E0"





      },
    },
  },
  plugins: [],
};
export default config;





