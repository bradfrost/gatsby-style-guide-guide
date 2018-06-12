import React, { Component } from "react";
import Helmet from "react-helmet";
import reactElementToJSXString from 'react-element-to-jsx-string';
import ReactDOMServer from 'react-dom/server';

import BackIcon from "react-icons/lib/fa/chevron-left";
import ForwardIcon from "react-icons/lib/fa/chevron-right";

import Link from "../components/Link";
import Tags from "../components/Tags";
import PageHeader from "../components/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import Tab from "../components/Tab";
import Tabs from "../components/Tabs";
import Section from "../components/Section";
import Well from "../components/Well";
import Table from "../components/Table";
import ContentBlock from "../components/ContentBlock";
import ButtonLink from "../components/ButtonLink";
import Button from "../components/Button";

import ComponentExample from "../components/ComponentExample";
import markdownIt from 'markdown-it'



export class ComponentDetail extends Component {

    componentDidMount () {
        const script = document.createElement("script");
        script.src = "../../vendor/clipboard.min.js";
        document.body.appendChild(script);

        const scriptCopy = document.createElement("script");
        scriptCopy.src = "../../vendor/copy.js";
        document.body.appendChild(scriptCopy);
    }

    render() {
        const md = markdownIt({
          html: true,
          linkify: true
        });
        const { markdownRemark: post } = this.props.data;
        const { next, prev } = this.props.pathContext;
        const variations = post.frontmatter.variations;

        return (
            <div className="l-container">
                <Helmet title={`${post.frontmatter.title}`} />

                <Breadcrumbs group={post.frontmatter.group} subgroup={post.frontmatter.subgroup} />

                <PageHeader
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    status={post.frontmatter.status}
                />

                {(post.frontmatter.variations && post.frontmatter.variations.length > 1) &&
                    <Tabs>
                        {post.frontmatter.variations.map((item) =>
                        <Tab label={item.title}>

                            <Well>
                                <Section title={item.title + " <code>" + item.styleModifier + "</code>"} description={item.description}>

                                        <ComponentExample component={item.component} />

                                </Section>
                            </Well>
                            <Tabs styleModifier="ads-u-margin-bottom-large">
                                <Tab label="React">
                                    <div className="pattern-code">
                                        <Button styleModifier="pattern-code-copy-btn" text="Copy" dataClipboardTarget={"#pattern-code-"+ item.component} />
                                        <pre className="highlight pattern-code-block language-markup"><code className="code language-markup" id={"pattern-code-"+ item.component}>{`
                ${reactElementToJSXString(<ComponentExample component={item.component} />)}
                                        `}</code></pre>
                                    </div>
                                </Tab>
                                <Tab label="HTML">
                                    <div className="pattern-code">
                                    <Button styleModifier="pattern-code-copy-btn" text="Copy" dataClipboardTarget={"#pattern-code-"+ item.component} />
                                        <pre className="highlight pattern-code-block language-markup"><code className="code language-markup" id={"pattern-code-"+ item.component}>{`
                ${ReactDOMServer.renderToStaticMarkup(<ComponentExample component={item.component} />)}
                                        `}</code></pre>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Tab>
                    )}
                    </Tabs>
                }

                {(post.frontmatter.variations && post.frontmatter.variations.length) === 1 &&
                    post.frontmatter.variations.map((item) =>
                    <div>
                        <Well>
                            <ComponentExample component={item.component} />
                        </Well>

                        <Tabs styleModifier="ads-u-margin-bottom-large">
                            <Tab label="React">
                                <div className="pattern-code">
                                    <Button styleModifier="pattern-code-copy-btn" text="Copy" dataClipboardTarget={"#pattern-code-"+ item.component} />
                                    <pre className="highlight pattern-code-block language-markup"><code className="code language-markup" id={"pattern-code-"+ item.component}>{`
            ${reactElementToJSXString(<ComponentExample component={item.component} />)}
                                    `}</code></pre>
                                </div>
                            </Tab>
                            <Tab label="HTML">
                                <div className="pattern-code">
                                    <Button styleModifier="pattern-code-copy-btn" text="Copy" dataClipboardTarget={"#pattern-code-"+ item.component} />
                                    <pre className="highlight pattern-code-block language-markup"><code className="code language-markup" id={"pattern-code-"+ item.component}>{`
            ${ReactDOMServer.renderToStaticMarkup(<ComponentExample component={item.component} />)}
                                    `}</code></pre>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    )
                }

                { (post.frontmatter.usage ||
                    post.frontmatter.use ||
                    post.frontmatter.altUse) &&
                <Section title="Usage">
                    <div className="c-text-passage">
                    { post.frontmatter.usage &&
                        post.frontmatter.usage.map((item) =>
                        <div>
                        <h3>{item.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: md.render(item.description) }} />
                        </div>
                        )
                    }
                    </div>
                    <ul className="l-grid">
                        <li className="l-grid__item">
                            {post.frontmatter.use &&
                                post.frontmatter.use.map((item, index) =>
                                    <ContentBlock key={ index } title={item.title} description={item.description} styleModifier="c-content-block--success" />
                                )
                            }
                        </li>
                        <li className="l-grid__item">
                            {post.frontmatter.altUse &&
                                post.frontmatter.altUse.map((item, index) =>
                                    <ContentBlock key={ index } title={item.title} description={item.description} styleModifier="c-content-block--error" />
                                )
                            }
                        </li>
                    </ul>
                    </Section>
                }

                { post.frontmatter.classes &&
                <Table
                tableHeaderColumns={["Class Name", "Description"]}
                tbody = {
                    post.frontmatter.classes.map((item) =>

                        <tr className="c-table__row">
                            <td className="c-table__cell">
                                <code>{item.className}</code>
                            </td>

                            <td className="c-table__cell"
                                dangerouslySetInnerHTML={{ __html: md.render(item.description) }}
                            />
                        </tr>

                    )
                }
                />
            }

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

                {post.frontmatter.finePrint &&
                <Section title="Fine print">
                    {post.frontmatter.finePrint.map((item) =>
                        <div className="c-text-passage">
                            <ul>
                                <li>Version: {item.version}</li>
                                <li>Last Updated: {item.update}</li>
                                <li>Owner: {item.owner}</li>
                            </ul>
                        </div>
                    )}
                    <ButtonLink href="#" text="Discuss this component" />
                </Section>
                }
            </div>
        );
    }
}

export default ComponentDetail;

export const pageQuery = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
          path
          tags
          title
          description
          status
          group
          subgroup
          variations {
            title
            description
            styleModifier
            component
          }
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
          classes {
            className
            required
            description
            modifier
            recommended
          }
          examples {
            title
            image
          }
          finePrint {
            version
            update
            owner
          }
      }
    }
  }
`;
