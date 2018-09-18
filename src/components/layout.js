import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header";
import Footer from "./Footer";
require('prismjs');
require('prismjs/themes/prism.css');

import "../css/style.css";
import "../css/style-guide.css";

export default ({children, data}) => {
	if (typeof window !== 'undefined') {
		if(document.readyState !== "loading") {
		    setTimeout(Prism.highlightAll, 0);
		}
		else {
		    document.addEventListener('DOMContentLoaded', Prism.highlightAll);
		}
	}
	return (
		<StaticQuery
			query={graphql`
				query HeadingQuery {
					allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
						edges {
							node {
								excerpt(pruneLength: 250)
								id
								frontmatter {
									title
									description
									status
									path
									group
									subgroup
									layout
								}
							}
						}
					}
				}
			`}
			render={({ edges: posts }) => (
				<div className="c-wrapper">
					<Helmet>
						<title>Style Guide Guide</title>
						<meta charSet="utf-8" />
						<meta name="description" content="A boilerplate for creating superb style guides" />
						<meta name="keywords" content="style guide guide" />

						<link rel="icon" href="./favicon.ico" />

						<link rel="stylesheet" href="https://use.typekit.net/agm6qos.css" />

					</Helmet>

					<div className="l-page-layout l-page-layout--two-column-fixed">
						<div className="l-page-layout__secondary">
							<Header siteTitle="Style Guide Guide" styleModifier="c-header--vertical" navData={posts} />
						</div>
						<div className="l-page-layout__main">
							<main role="main">
								{children()}
							</main>
							<Footer />
						</div>
					</div>
				</div>
			)}
		/>
	);
}
