/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ["var(--barlow)"],
        "fraunces": ["var(--fraunces)"]
      },
      colors:{
        "yellow": ["var(--yellow)"],
        "photographyText": ["var(--photographyText)"],
        "graphicDesignText": ["var(--graphicDesignText)"]
      },
    
    },
  },
  plugins: [],
}
