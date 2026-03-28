/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

=======
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // ✅ MUST
};
>>>>>>> 143f172 (upadted)
