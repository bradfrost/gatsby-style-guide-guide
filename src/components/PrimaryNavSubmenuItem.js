import React, { Component } from "react";
import Link from "gatsby-link";
import PrimaryNavSubSubmenu from "./PrimaryNavSubSubmenu";

export class PrimaryNavSubmenuItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isSubNavOn: true };

        this.toggleSubNav = this.toggleSubNav.bind(this);
    }

    toggleSubNav(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isSubNavOn: !prevState.isSubNavOn
        }));
    }

    render() {
        if(this.props.hasSubSubNav) {
            return (
                <li className={
                    this.state.isSubNavOn
                        ? "c-primary-nav__subitem "
                        : "c-primary-nav__subitem is-active"
                }>
                    <Link className="c-primary-nav__sublink c-primary-nav__sublink--has-children" to={ this.props.href } onClick={ this.toggleSubNav }>
                        <span className="c-primary-nav__text">TEST</span>
                        <svg className="c-icon c-primary-nav__subicon" width="16" height="16" viewBox="0 0 7 16" id="chevron-right"><title>chevron-right</title><path d="M2 3L0 5l3 3-3 3 2 2 5-5-5-5z"></path></svg>
                    </Link>
                    <PrimaryNavSubSubmenu />
                </li>
            )
        } else {
            return (
                <li className="c-primary-nav__subitem">
                    <Link className="c-primary-nav__sublink">
                        TEST
                    </Link>
                </li>
            )
        }
    }
};

export default PrimaryNavSubmenuItem;
