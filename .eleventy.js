module.exports = function (eleventyConfig) {
  // Only treat Nunjucks + Markdown as templates. The bespoke landing page
  // (site/index.html) is copied verbatim via passthrough — never processed.
  eleventyConfig.setTemplateFormats(["njk", "md"]);

  // Verbatim files emitted at the site root (input-dir prefix is stripped).
  eleventyConfig.addPassthroughCopy("site/index.html");
  eleventyConfig.addPassthroughCopy("site/styles.css");
  eleventyConfig.addPassthroughCopy("site/favicon.svg");
  eleventyConfig.addPassthroughCopy("site/CNAME");

  // Marketing images live in repo docs/ (shared with the GitHub README). Publish
  // only image files — internal docs/ markdown stays unpublished. Path is preserved
  // so the pages can reference /docs/<image>.
  eleventyConfig.addPassthroughCopy("docs/**/*.{png,webp,jpg,jpeg,gif,svg}");

  // Downloadable ATSR wheel profiles linked from the ATSR LED guide.
  eleventyConfig.addPassthroughCopy("docs/ATSR/*.atsrdevice");

  // Guides collection, grouped in site/_data/guideCategories.json order, then by
  // front-matter `order` within a category. Every guide must name a category.
  eleventyConfig.addCollection("guides", (collectionApi) => {
    const rank = (g) => {
      const i = g.data.guideCategories.findIndex((c) => c.slug === g.data.category);
      if (i < 0) throw new Error(`${g.inputPath}: unknown guide category "${g.data.category}"`);
      return i;
    };
    return collectionApi
      .getFilteredByTag("guide")
      .sort((a, b) => rank(a) - rank(b) || (a.data.order || 0) - (b.data.order || 0));
  });

  eleventyConfig.addFilter("guideCategory", (slug, categories) =>
    categories.find((c) => c.slug === slug)
  );

  return {
    dir: { input: "site", includes: "_includes", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
