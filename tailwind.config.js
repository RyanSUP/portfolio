module.exports = {
  content: ["./src/index.html", "./src/riffin/index.html"],
  theme: {
    extend: {
      colors: {
        'murica': '#0477B8',
        'salmon': '#F39189',
        'smoke': '#F39189',
        'white': '#FFFFFF',
        'nord-0': '#2E3440',
        'nord-2': '#434C5E',
        'nord-frost': '#8FBCBB',
        'dr-mario-bg': '#0b042e'
      },
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
        'ultra': ['Ultra', 'serif'],
      },
      backgroundImage: {
        'dr-mario-space-pattern': "url(/src/dr-mario/images/Space-Background.png)"
      },
    },
  },
  plugins: [],
}
