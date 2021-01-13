// import dotenv from 'dotenv';

// dotenv.config({ path: '.env'});

require("dotenv").config({
  path: `.env`,
})

// {
//   resolve: `gatsby-plugin-env-variables`,
//   options: {
//     allowList: ["GATSBY_CONTENTFUL_SPACE_ID", "GATSBY_CONTENTFUL_ACCESS_TOKEN"]
//   },
// },

module.exports = {
  siteMetadata: {
    title: "SnoopyEars",
  },
  plugins: [

    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
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
