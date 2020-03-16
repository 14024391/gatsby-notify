module.exports = {
  siteMetadata: {
    title: `Hello Gatsby Lam`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `web-dev.hopsoftware.com`,
        protocol: "https",
        restApiRoutePrefix: "wp-json",
        hostingWPCOM: false,
        
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-plugin-react-helmet`
  ],
}

/*

<Helmet>
        <title>Lamin</title>
        <meta
          name="description"
          content="The Hop platform is a powerful, reliable and one of the smartest PMS systems on the market. The Hop team has developed the system specifically for all types of hospitality businesses, ranging from hotel chains, groups, independent hotels, multi properties, universities, serviced apartments, hostels and much more."
        />
          <meta
          name="keywords"
          content="hop, hotel, software, booking engine"
        />
        <link rel="canonical" href="https://hopsoftware.com/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Hop Software - Hop is an all-in-one, cloud-based hotel property management system"
        />
        <meta
          property="og:description"
          content="The Hop platform is a powerful, reliable and one of the smartest PMS systems on the market. The Hop team has developed the system specifically for all types of hospitality businesses, ranging from hotel chains, groups, independent hotels, multi properties, universities, serviced apartments, hostels and much more."
        />
        <meta property="og:url" content="https://hopsoftware.com/" />
        <meta property="og:site_name" content="Hop Software" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="The Hop platform is a powerful, reliable and one of the smartest PMS systems on the market. The Hop team has developed the system specifically for all types of hospitality businesses, ranging from hotel chains, groups, independent hotels, multi properties, universities, serviced apartments, hostels and much more."
        />
        <meta
          name="twitter:title"
          content="Hop Software - Hop is an all-in-one, cloud-based hotel property management system"
        />
        <meta name="twitter:site" content="@hopsoftware" />
        <meta name="twitter:creator" content="@hopsoftware" />
      </Helmet>
*/