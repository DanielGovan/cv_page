module.exports = {
  siteMetadata: {
    title: `Dan Govan's CV`,
    description: `Front end developer since 2006 with a passion for UI/UX, looking for a hands-on role in the React ecosystem with a collaborative, forward-thinking team.`,
    author: `@writebydan`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#d70000`,
        theme_color: `#d70000`,
        display: `minimal-ui`,
        icon: `src/images/person.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
