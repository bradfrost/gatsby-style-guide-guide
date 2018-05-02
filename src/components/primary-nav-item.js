import React from 'react';
import Link from "gatsby-link";
import PrimaryNavSubmenu from "./primary-nav-submenu";

const PrimaryNavItem = ({ label, href, hasSubnav }) => {

    if(hasSubnav) {
        return (
            <li className="c-primary-nav__item">
                <Link className="c-primary-nav__link" to={ href }>
                    <span className="c-primary-nav__text">{ label }</span>
                </Link>
                <PrimaryNavSubmenu />
            </li>
        )
    } else {
        return (
            <li className="c-primary-nav__item">
                <Link className="c-primary-nav__link" to={ href }>
                    <span className="c-primary-nav__text">{ label }</span>
                </Link>
            </li>
        )
    }
};

export default PrimaryNavItem;

