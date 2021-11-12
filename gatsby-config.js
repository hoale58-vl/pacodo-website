require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://pub.pacodo.com",
    title: "Pacodo",
  },
  plugins: ["gatsby-plugin-root-import", "gatsby-plugin-use-query-params"],
};
