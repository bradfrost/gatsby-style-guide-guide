import React from "react";
import GatsbyLink from "gatsby-link";
import Helmet from "react-helmet";

import Link from "../components/Link";
import Card from "../components/Card";

export default function Index({ data }) {
    const { edges: posts } = data.allMarkdownRemark;
    return (
        <div className="blog-posts">
            <ul className="c-card-list l-grid l-grid--3up">
                {posts
                    .filter(post => post.node.frontmatter.title.length > 0)
                    .map(({ node: post }) => {
                        return (
                            <li className="l-grid__item">
                                <Card
                                    href={post.frontmatter.path}
                                    kicker="kicker"
                                    title={post.frontmatter.title}
                                    description={post.frontmatter.description}
                                    key={post.id}
                                />
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___title] }) {
            edges {
                node {
                    excerpt
                    id
                    frontmatter {
                        title
                        description
                        date(formatString: "MMMM DD, YYYY")
                        path
                        group
                    }
                }
            }
        }
    }
`;
