import React from "react";
import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";

import Link from "../components/Link";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import ButtonGroup from "../components/ButtonGroup";
import ButtonLink from "../components/ButtonLink";

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
