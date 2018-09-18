import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import PageHeader from "../components/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Template({ data }) {
    const { markdownRemark: post } = data;

    return (
        <div className="l-container">
            <Helmet title={`${post.frontmatter.title}`} />

            {post.frontmatter.group &&
                <Breadcrumbs group={post.frontmatter.group} />
            }

            <PageHeader
                kicker={post.frontmatter.kicker}
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                status={post.frontmatter.status}
            />

            <div className="c-text-passage" dangerouslySetInnerHTML={{ __html: post.html }} />

        </div>
    );
}

export const componentDetailQuery = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
          path
          tags
          kicker
          title
          description
          status
          group
          usage {
            description
          }
          use {
            title
            description
          }
          altUse {
            title
            description
          }
      }
    }
  }
`;
