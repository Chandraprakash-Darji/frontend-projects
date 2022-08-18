/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#f9cdcd",
                dark: "#252422",
                light: "#f4f4f4",
            },
        },
    },
    plugins: [],
};
