import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PageHeader from '../components/PageHeader'
import Card from '../components/Card'

export default function Template({ data }) {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      <div className="l-container">
        {posts
          .filter(post => post.node.frontmatter.group === 'utilities')
          .map(({ node: post }) => {
            if (post.frontmatter.layout === 'utilities-index') {
              return (
                <PageHeader
                  key={post.id}
                  title={post.frontmatter.title}
                  description={post.frontmatter.description}
                />
              )
            }
            return null
          })}

        <ul className="c-card-list l-grid l-grid--3up">
          {posts
            .filter(post => post.node.frontmatter.group === 'utilities')
            .map(({ node: post }) => {
              if (post.frontmatter.layout !== 'utilities-index') {
                return (
                  <li className="l-grid__item">
                    <Card
                      href={post.frontmatter.path}
                      title={post.frontmatter.title}
                      description={post.frontmatter.description}
                      key={post.id}
                    />
                  </li>
                )
              }
              return null
            })}
        </ul>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query UtilitiesQuery {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            description
            path
            group
            subgroup
            layout
          }
        }
      }
    }
  }
`
