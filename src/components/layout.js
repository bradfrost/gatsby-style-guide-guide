import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import Footer from './Footer'

import '../css/style.scss'
import '../css/style-guide.css'

require('prismjs/themes/prism.css')

export default ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___title] }
          ) {
            edges {
              node {
                excerpt(pruneLength: 250)
                id
                frontmatter {
                  title
                  description
                  status
                  path
                  group
                  subgroup
                  layout
                }
              }
            }
          }
        }
      `}
      render={({ allMarkdownRemark: { edges: posts } }) => (
        <div className="c-wrapper">
          <Helmet>
            <title>Style Guide Guide</title>
            <meta charSet="utf-8" />
            <meta
              name="description"
              content="A boilerplate for creating superb style guides"
            />
            <meta name="keywords" content="style guide guide" />

            <link rel="icon" href="favicon.ico" />

            <link rel="stylesheet" href="https://use.typekit.net/agm6qos.css" />
          </Helmet>

          <div className="l-page-layout l-page-layout--two-column-fixed">
            <div className="l-page-layout__secondary">
              <Header
                siteTitle="Style Guide Guide"
                styleModifier="c-header--vertical"
                navData={posts}
              />
            </div>
            <div className="l-page-layout__main">
              <main role="main">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    />
  )
}
