/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./wpTheme/**/*.php"], //corregido con "T" mayúscula y todos los archivos PHP
  theme: {
    extend: {
      // Asegúrate de que los colores estén disponibles
      colors: {
        white: "#ffffff",
        red: {
          500: "#ef4444",
        },
        gray: {
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
  safelist: ["text-white", "text-red-500", "bg-gray-900", "font-bold"],
};
