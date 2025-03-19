// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your JS/JSX files
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Use Inter as the default sans font
          poppins: ["Poppins", "sans-serif"], // Add Poppins as a custom font
        },
        colors: {
          "cream-grey": "#e9e9e9", // Add your custom cream grey color
        },
      },
    },
    plugins: [],
  };