import React from 'react';
import Link from "gatsby-link";
import PrimaryNavSubmenu from "./primary-nav-submenu";

const PrimaryNavItem = ({ label, href }) => (
    <li className="c-primary-nav__item">
        <Link className="c-primary-nav__link" to={ href }>
            <span className="c-primary-nav__text">{ label }</span>
        </Link>
		<PrimaryNavSubmenu />
    </li>
);

export default PrimaryNavItem;
