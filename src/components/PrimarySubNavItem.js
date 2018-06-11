import React, { Component } from "react";
import Link from "gatsby-link";

export class PrimarySubNavItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isSubNavOn: true };
        this.toggleSubNav = this.toggleSubNav.bind(this);
    }

    toggleSubNav(e) {
        if (this.props.subSubNavItems) {
            e.preventDefault();
            this.setState(prevState => ({
                isSubNavOn: !prevState.isSubNavOn
            }));
        }
        else if (document.querySelector(".c-header__nav-container.is-active")) {
            this.props.toggleStatus(e)
        }
        else {
            null
        }
    }

    render() {
        return (
            <li className={
                this.state.isSubNavOn
                    ? "c-primary-nav__subitem "
                    : "c-primary-nav__subitem is-active"
            } key={this.props.url}>
                <Link className= "c-primary-nav__sublink" to={ this.props.url } onClick= {this.toggleSubNav}>
                    <span className="c-primary-nav__text">{this.props.title}</span>
                    {this.props.subSubNavItems &&
                        <svg className="c-icon c-primary-nav__subicon" width="16" height="16" viewBox="0 0 7 16" id="chevron-right"><title>chevron-right</title><path d="M2 3L0 5l3 3-3 3 2 2 5-5-5-5z"></path></svg>
                    }
                </Link>
                { this.props.subSubNavItems &&
                    this.props.subSubNavItems
                }
            </li>
        )
    }
};

export default PrimarySubNavItem;
