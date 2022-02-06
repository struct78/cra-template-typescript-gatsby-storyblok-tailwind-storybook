/* eslint-disable max-lines */
const base = 16
const percentages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const units = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 33, 34, 36, 40, 42, 48, 50, 56, 60, 62, 64, 67, 70, 72, 76, 78,
  80, 86, 88, 90, 92, 96, 100, 104, 106, 110, 112, 120, 121, 122, 123, 128, 130, 136, 140, 144, 150, 151, 160, 168, 176, 180, 190, 200, 208, 213, 220,
  232, 250, 272, 280, 288, 292, 300, 320, 330, 336, 360, 376, 400, 410, 420, 430, 436, 440, 450, 456, 470, 490, 500, 592, 600, 630, 660, 700, 720,
  770, 800, 900, 1000, 1200, 1440,
]
const screens = {
  xsm: "23.5rem",
  sm: "26rem",
  md: "48rem",
  mlg: "64rem",
  lg: "85.375rem",
  xl: "105rem",
}
const space = {}
const negativeSpace = {}
percentages.forEach(percentage => {
  for (var index = 1; index < percentage; index++) {
    const key = `${index}/${percentage}`
    const value = `${(index / percentage) * 100}%`

    space[key] = value
  }
})

units.forEach(unit => {
  const key = (unit / 10).toString().replace(".", "-")
  const value = `${unit / base}rem`

  space[key] = value
  negativeSpace[`-${key}`] = `-${value}`
})

const spacing = {
  auto: "auto",
  none: "none",
  full: "100%",
  double: "200%",
  "full-vh": "100vh",
  "6/10-vh": "60vh",
  "6/10-vw": "60vw",
  "7/10-vh": "70vh",
  "8/10-vh": "80vh",
  "8/10-vw": "80vw",
  "full-vw": "100vw",
  ...screens,
  ...space,
}

module.exports = {
  content: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
    screens,
    spacing: spacing,
    width: spacing,
    height: spacing,
    maxWidth: spacing,
    maxHeight: spacing,
    minWidth: spacing,
    minHeight: spacing,
    borderRadius: spacing,
    inset: {
      auto: "auto",
      none: "none",
      full: "100%",
      "full-vh": "100vh",
      "8/10-vh": "80vh",
      "full-vw": "100vw",
      ...screens,
      ...space,
      ...negativeSpace,
    },
    translate: {
      ...spacing,
      ...negativeSpace,
    },
    fontFamily: {
      headings: ["serif"],
      body: ["sans-serif"],
    },
    fontSize: {
      11: "0.6875rem", // 11px
      12: "0.75rem", // 12px
      13: "0.8125rem", // 13px
      14: "0.875rem", // 14px
      15: "0.9375rem", // 15px
      16: "1rem", // 16px
      18: "1.125rem", // 18px
      19: "1.1875rem", // 19px
      20: "1.25rem", // 20px
      22: "1.375rem", // 22px
      24: "1.5rem", // 22px
      26: "1.625rem", // 26px
      28: "1.75rem", // 28px
      32: "2rem", // 32px
      38: "2.375rem", //38px
      44: "2.75rem", //44px
      56: "3.5rem", // 56px
      80: "5rem", // 80px,
      100: "6.25rem", // 100px
    },
    letterSpacing: {
      normal: 0,
      relaxed: "0.04em",
      loose: "0.07em",
    },
    lineHeight: {
      1: 1,
      1.5: 1.5,
    },
    colors: {
      "black": "#000",
      "white": "#fff",
    },
    aspectRatio: {
      square: [1, 1],
      landscape: [16, 9],
      "3-4": [3, 4],
      "4-3": [4, 3],
      "4-5": [4, 5],
      "6-5": [5, 6],
      "7-10": [7, 10],
      "8-9": [8, 9],
      "9-10": [9, 10],
      "9-16": [9, 16],
    },
    transitionProperty: {
      none: "none",
      all: "all",
      transform: "transform",
    },
    transitionDuration: {
      default: "250ms",
      none: "0ms",
      fast: "100ms",
      slow: "500ms",
    },
    transitionTimingFunction: {
      default: "ease-in-out",
      linear: "linear",
      cubic: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
    },
    boxShadow: {
      none: `none`,
      card: `0px 1px 16px rgba(84, 82, 81, 0.15)`,
      header: `0px 4px 16px rgba(0, 0, 0, 0.04)`,
      large: `0px 0px 30px 0px rgba(0, 0, 0, 0.25)`,
    },
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      25: ".25",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      75: ".75",
      80: ".8",
      90: ".9",
      100: "1",
    },
    scale: {
      "-1": "-1",
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    zIndex: {
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },
  },
  variants: {
    aspectRatio: ["responsive"],
    opacity: ["responsive", "hover", "group-hover", "disabled"],
    display: ["responsive", "hover", "group-hover", "focus", "disabled"],
    visibility: ["responsive", "hover", "group-hover", "focus", "disabled"],
    backgroundColor: ["responsive", "hover", "focus", "disabled", "active", "group-hover"],
    borderWidth: ["hover", "responsive", "active", "first", "last"],
    borderColor: ["hover", "active"],
    textColor: ["responsive", "hover", "focus", "disabled", "active"],
    cursor: ["responsive", "disabled"],
    transitionProperty: ["responsive", "hover"],
    transitionDuration: ["responsive", "hover"],
    transitionTimingFunction: ["responsive", "hover"],
    willChange: ["responsive"],
    flexbox: ["responsive"],
    translate: ["responsive", "hover", "group-hover", "focus", "disabled"],
    margin: ["responsive", "first", "last"],
    padding: ["responsive", "first", "last"],
  },
}
