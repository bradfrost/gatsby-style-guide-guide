import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <div className="l-container">
        <Helmet title={`${post.frontmatter.title}`} />

        <PageHeader
          title={post.frontmatter.title}
          description={post.frontmatter.description}
          status={post.frontmatter.status}
        />

        <div
          className="c-text-passage"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  )
}

export const LandingQuery = graphql`
  query landingQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        path
        tags
        title
        description
        status
        group
      }
    }
  }
`
