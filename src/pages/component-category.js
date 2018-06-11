import React from "react";
import Helmet from "react-helmet";

import GatsbyLink from "gatsby-link";
import Link from "../components/Link";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";

export default function Template({ data }) {
    const { edges: posts } = data.allMarkdownRemark;

    return (
        <div className="l-container">

        {posts
            .filter(post => post.node.frontmatter.group == 'components')
            .filter(post => post.node.frontmatter.subgroup)
            .map(({ node: post }) => {
                if (((typeof window !== 'undefined') && (window.location.pathname.replace("/components/","")) === post.frontmatter.subgroup) && (post.frontmatter.layout === "component-category")) {
                    return ( <PageHeader
                        title={post.frontmatter.title}
                        description={post.frontmatter.description}
                    />
                )
                }
            })}

            <ul className="c-card-list l-grid l-grid--3up">
                {posts
                    .filter(post => post.node.frontmatter.group == 'components')
                    .filter(post => post.node.frontmatter.subgroup)
                    .map(({ node: post }) => {
                        if ((typeof window !== 'undefined') && (window.location.pathname.replace("/components/","")) === post.frontmatter.subgroup && post.frontmatter.layout != "component-category") {
                            return (
                                <li className="l-grid__item">
                                    <Card href={"/components/"+post.frontmatter.path.replace("/components/","")} header={(post.frontmatter.subgroup.charAt(0).toUpperCase() + post.frontmatter.subgroup.slice(1)).replace(/-/g, " ")} title={post.frontmatter.title} description={post.frontmatter.description} key={post.id} />
                                </li>
                            );
                        }
                    })}
            </ul>
        </div>
    );
}

export const pageQuery = graphql`
    query ComponentCategoryQuery {
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
`;
