/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              disableBgImage: true,
              backgroundColor: 'none'
            }
          },
          {
            resolve: 'gatsby-remark-image-attributes',
            options: {
              dataAttributes: true
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs'
        ]
      }
    }
  ]
};
