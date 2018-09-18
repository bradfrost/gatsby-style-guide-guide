module.exports = {
  pathPrefix: process.env.CI ? `/${name}` : `/gatsby-style-guide-guide`,
  siteMetadata: {
    author: 'Ian Frost',
    title: `Style Guide Guide`,
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
            },
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet'
  ],
}
