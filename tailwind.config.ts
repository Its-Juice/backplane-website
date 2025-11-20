import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#020617", // Very dark blue/black
                foreground: "#f8fafc", // Slate 50
                primary: {
                    DEFAULT: "#0f172a", // Slate 900
                    foreground: "#f8fafc",
                },
                secondary: {
                    DEFAULT: "#1e293b", // Slate 800
                    foreground: "#f8fafc",
                },
                accent: {
                    DEFAULT: "#38bdf8", // Sky 400
                    foreground: "#0f172a",
                },
                muted: {
                    DEFAULT: "#334155", // Slate 700
                    foreground: "#94a3b8", // Slate 400
                },
                border: "#1e293b",
            },
            fontFamily: {
                sans: ["var(--font-sans)", "sans-serif"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};
export default config;
