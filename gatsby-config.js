module.exports = {
  siteMetadata: {
    siteUrl: "https://raynetwork.io",
    title: "Ray Network - Cardano Ecosystem",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ray Network - Cardano Ecosystem`,
        icon: `static/favicon.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": require("path").resolve(__dirname, "src"),
        },
        extensions: ["js", "scss", "sass"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41062113-16",
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: "70157308",
        webvisor: true,
        trackHash: true,
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
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        "data-theme": "default",
      },
    },
  ],
}
