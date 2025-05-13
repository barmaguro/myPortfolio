module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
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