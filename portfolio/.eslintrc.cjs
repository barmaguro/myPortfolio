module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  plugins: ["unused-imports"],
  settings: {
    tailwindcss: {
      cssFiles: ['/app/globals.css'],
    },
  },
};