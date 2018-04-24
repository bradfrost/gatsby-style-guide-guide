import React from "react";
import Link from "gatsby-link";

const style = {
    display: 'block'
};

const PrimaryNavSubmenu = () => (
    <ul className="c-primary-nav__sublist" style={ style }>
        <li class="c-primary-nav__subitem">
        <Link className="c-primary-nav__sublink">
            TEST
        </Link>
        </li>
	</ul>
);

export default PrimaryNavSubmenu;