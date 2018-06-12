import React from "react";
import Helmet from "react-helmet";

import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import ButtonGroup from "../components/ButtonGroup";
import Breadcrumbs from "../components/Breadcrumbs";
import ContentBlock from "../components/ContentBlock";
import Table from "../components/Table";
import Well from "../components/Well";

export default function Template({ data, pathContext }) {
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
