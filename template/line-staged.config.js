module.exports = {
  "**/*.{ts,tsx}": 'pretty-quick --staged --pattern "src/**/*.{ts,tsx}"',
  "src/**/*.{js,ts,jsx,tsx}": () => "yarn test:unit",
}
