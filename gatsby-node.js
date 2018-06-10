const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
              html
              frontmatter {
                  path
                  tags
                  title
                  description
                  status
                  group
                  layout
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        if (node.frontmatter.layout == "index") {
          createPage({
            path: node.frontmatter.path,
            component: path.resolve(`./src/templates/index.js`),
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        }
        else if (node.frontmatter.layout == "component-detail") {
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/component-detail.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
        else if (node.frontmatter.layout == "component-index") {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/pages/component-index.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
        else if (node.frontmatter.layout == "component-category") {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/pages/component-category.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
        else if (node.frontmatter.layout == "page-templates-index") {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/pages/page-templates-index.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
        else if (node.frontmatter.layout == "utilities-index") {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/pages/utilities-index.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
        else if (node.frontmatter.layout == "page") {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/templates/page.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
        else if (node.frontmatter.layout == "landing") {
            createPage({
              path: node.frontmatter.path,
              component: path.resolve(`./src/templates/landing.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
              },
            })
        }
      })
      resolve()
    })
  })
};
