/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: ["./components/**/*.vue", "./pages/**/*.vue"],
  theme: {
    fontFamily: {
      bold: ["Lato", "sans-serif"],
      body: ["Lato", "sans-serif"]
    }
  },
  variants: {},
  plugins: []
};
