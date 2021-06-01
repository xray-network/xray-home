/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ray Network - Cardano Ecosystem`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": path.resolve(__dirname, "src"),
        },
        extensions: ["js", "scss", "sass"],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: ["Inter:400,700,900"],
        },
        custom: {
          families: ["Feather"],
          urls: ["/resources/fonts/font-feathericons/dist/feather.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41062113-22",
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: "77966719",
        webvisor: true,
        trackHash: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        'data-theme': 'default'
      }
    },
  ],
}
