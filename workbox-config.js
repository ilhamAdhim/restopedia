module.exports = {
  globDirectory: ["src/", "styles/"],
  globPatterns: ["**/*.{json,ico,jpg,png,js,scss,html}"],
  swDest: "src/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
