import React from "react";
import Helmet from "react-helmet";
import BackIcon from "react-icons/lib/fa/chevron-left";
import ForwardIcon from "react-icons/lib/fa/chevron-right";

import Link from "../components/Link";
import Tags from "../components/Tags";
import PageHeader from "../components/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import Tabs from "../components/Tabs";
import Section from "../components/Section";
import Iframe from "../components/Iframe";
import Table from "../components/Table";

export default function Template({ data, pathContext }) {
    const { markdownRemark: post } = data;
    const { next, prev } = pathContext;

    return (
        <div className="blog-post-container">
            <Helmet title={`${post.frontmatter.title}`} />

            <Breadcrumbs group={post.frontmatter.group} />

            <PageHeader
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                status={post.frontmatter.status}
            />

            <Tabs
                tabList={[
                    {
                        href: "#panel-1",
                        label: "Tab 1"
                    },
                    {
                        href: "#panel-2",
                        label: "Tab 2"
                    },
                    {
                        href: "#panel-3",
                        label: "Tab 3"
                    }
                ]}
            >
                <Section
                    headingLevel="h5"
                    title="Component Variation Name"
                    description="Description of the component"
                >
                    <Iframe />
                </Section>
            </Tabs>

            <Tabs
                tabList={[
                    {
                        href: "#code-1",
                        label: "React"
                    },
                    {
                        href: "#code-2",
                        label: "HTML"
                    },
                    {
                        href: "#code-3",
                        label: "CSS"
                    }
                ]}
            >
                <pre>
                <code>Hello</code>
                </pre>
            </Tabs>

            <Section title="Usage">
                ## When to Use 

                ## When not to Use

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Section>

            <Table />

            <div
                className="c-text-passage"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <Tags list={post.frontmatter.tags || []} />

            <div className="c-pagination">
                {prev && (
                    <Link
                        className="c-pagination__link"
                        to={prev.frontmatter.path}
                    >
                        <BackIcon /> {prev.frontmatter.title}
                    </Link>
                )}
                {next && (
                    <Link
                        className="c-pagination__link"
                        to={next.frontmatter.path}
                    >
                        {next.frontmatter.title} <ForwardIcon />
                    </Link>
                )}
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query ComponentByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
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
