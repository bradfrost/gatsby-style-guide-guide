import React from "react";
import Helmet from "react-helmet";

import PageHeader from "../components/PageHeader";

export default function Template({ data, pathContext }) {
    const { markdownRemark: post } = data;

    return (
        <div className="l-container">
            <Helmet title={`${post.frontmatter.title}`} />

            <PageHeader
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                status={post.frontmatter.status}
            />

            <div className="c-text-passage" dangerouslySetInnerHTML={{ __html: post.html }} />

        </div>
    );
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
`;
