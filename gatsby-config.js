module.exports = {
  siteMetadata: {
    title: "SnoopyEars",
    siteUrl: `https://bottledhappiness.app`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "b46zX3fRVzQZpZ2q9o9KeK-Hgoq9zIZesjmWwVWiyPI",
        spaceId: "4zhx15eo3eqn",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
