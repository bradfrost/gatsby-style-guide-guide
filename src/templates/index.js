import React from "react";
import { graphql } from "gatsby";

import PageHeader from "../components/PageHeader";

export default function Index({ data }) {
    const { markdownRemark: post } = data;
    return (
        <div className="l-container">
            <PageHeader
                title="Style Guide Guide"
                description="A boilerplate for creating superb style guides"
            />

            <div
                className="c-text-passage"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
        </div>
    );
}

export const componentDetailQuery = graphql`
  query IndexQuery($slug: String!) {
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
      }
    }
  }
`;
