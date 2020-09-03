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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-image-attributes',
            options: {
              styleAttributes: [
                'position',
                'top',
                'right',
                'box-shadow',
                'vertical-align',
                'filter'
              ],
              dataAttributes: true
            }
          },
          'gatsby-remark-prismjs'
        ]
      }
    }
  ]
};
