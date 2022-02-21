require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteTitle = 'cra-template-typescript-gatsby-storyblok-netlify-styled-components-storybook'
const siteDescription = 'Welcome'
const siteAuthor = ''
const siteUrl = ''
const siteImage = ``
const siteKeywords = []

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        showInProduction: false,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: process.env.STORYBLOK_TOKEN,
        homeSlug: 'home',
        version: 'draft',
        localAssets: true,
        resolveRelations: ["navigation.pages"],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        icon: 'static/icons/apple-touch-icon.png',
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-loadable-components-ssr`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: { analyzerMode: `static` },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:400,800`,
        ],
        display: 'swap'
      }
    }
  ],
}
