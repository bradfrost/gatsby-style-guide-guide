import React from "react";
import PrimaryNavItem from "./PrimaryNavItem";

const PrimaryNav = ({ data }) => (
    <nav className="c-primary-nav" role="navigation">
        <ul className="c-primary-nav__list" role="tablist" aria-multiselectable="true">
            <PrimaryNavItem href="/getting-started" label="Getting Started" />
			<PrimaryNavItem href="/guidelines" label="Guidelines" />
			<PrimaryNavItem href="/components" label="Components" />
			<PrimaryNavItem href="/utilities" label="Utilities" />
			<PrimaryNavItem href="/page-templates" label="Page Templates" />
			<PrimaryNavItem href="/downloads" label="Downloads" />
			<PrimaryNavItem href="/support" label="Support" />
			<PrimaryNavItem href="/contributing" label="Contributing" />
        </ul>
    </nav>
);

export default PrimaryNav;
