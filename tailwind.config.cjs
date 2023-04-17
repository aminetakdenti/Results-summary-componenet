/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        LightRed: "hsl(0, 100%, 67%)",
        bgLightRed: "hsl(0, 100%, 97%)",
        OrangeyYellow: "hsl(39, 100%, 56%)",
        bgOrangeyYellow: "hsl(39, 100%, 96%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        bgGreenTeal: "hsl(166, 100%, 97%)",
        CobaltBlue: "hsl(234, 85%, 45%)",
        bgCobaltBlue: "hsl(234, 85%, 95%)",
        LightSlateBlue: "hsl(252, 100%, 67%)",
        LightRoyalBlue: "hsl(241, 81%, 54%)",
        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%, 0)",
        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
      },
    },
  },
  plugins: [],
};
