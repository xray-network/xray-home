module.exports = {
  siteMetadata: {
    siteUrl: "https://raynetwork.io",
    title: "Ray Network - Cardano Ecosystem",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ray Network - Cardano Ecosystem`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41062113-16",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.*\.svg$/,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-html-attributes",
    //   options: {
    //     "data-theme": "default",
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     debug: false,
    //   }
    // },
  ],
}