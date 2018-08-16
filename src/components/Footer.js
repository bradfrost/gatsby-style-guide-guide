import React from "react";
import Link from "gatsby-link";

const Footer = ({ siteTitle }) => (
    <footer className="c-footer" role="contentinfo">
        <ul className="c-footer-nav">
            <li className="c-footer-nav__item">
                <Link className="c-footer-nav__link" to="/about">About</Link>
            </li>
            <li className="c-footer-nav__item">
                <Link className="c-footer-nav__link" to="/roadmap">Roadmap</Link>
            </li>
            <li className="c-footer-nav__item">
                <Link className="c-footer-nav__link" to="/history">Release History</Link>
            </li>
            <li className="c-footer-nav__item">
                <Link className="c-footer-nav__link" to="/contribute">Contribute</Link>
            </li>

        </ul>
	</footer>
);

export default Footer;
