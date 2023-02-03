const demos = require("eleventy-plugin-embedded-demos");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/_redirects");
  eleventyConfig.addPassthroughCopy({ "src/favicons/*": "/" });

  // Watch targets
  eleventyConfig.addWatchTarget("src/static/css/");

  eleventyConfig.addFilter("w3DateFilter", (value) => {
    const dateObject = new Date(value);
    return dateObject.toISOString();
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addPlugin(demos, {
    path: "./src/demos",
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
  };
};
