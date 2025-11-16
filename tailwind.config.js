module.exports = {
  content: ["./src//*.{html,js}"],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-\[.*\]/,
    },
  ],
}