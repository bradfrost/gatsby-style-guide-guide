import React, { Component } from "react";
import Link from "gatsby-link";
import PrimaryNavSubmenuItem from "./PrimaryNavSubmenuItem";

export class PrimaryNavItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isNavOn: true };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isNavOn: !prevState.isNavOn
        }));
    }

    render() {
        if(this.props.hasSubnav) {
            return (
                <li className={
                    this.state.isNavOn
                        ? "c-primary-nav__item "
                        : "c-primary-nav__item is-active"
                }>
                    <Link className="c-primary-nav__link c-primary-nav__link--has-children" to={ this.props.href } onClick={ this.toggleNav }>
                        <span className="c-primary-nav__text">{this.props.label}</span>
                        <svg className="c-icon c-primary-nav__icon" width="16" height="16" viewBox="0 0 7 16" id="chevron-right"><title>chevron-right</title><path d="M2 3L0 5l3 3-3 3 2 2 5-5-5-5z"></path></svg>
                    </Link>
                    <ul className="c-primary-nav__sublist">
                        <PrimaryNavSubmenuItem hasSubSubNav={true} />
                    </ul>
                </li>
            )
        } else {
            return (
                <li className="c-primary-nav__item">
                    <Link className="c-primary-nav__link" to={ this.props.href }>
                        <span className="c-primary-nav__text">{ this.props.label }</span>
                    </Link>
                </li>
            )
        }
    }
};

export default PrimaryNavItem;
