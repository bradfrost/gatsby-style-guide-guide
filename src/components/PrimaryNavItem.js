import React, { Component } from "react";
import Link from "gatsby-link";

export class PrimaryNavItem extends Component {

    constructor(props) {
        super(props);
        this.state = { isNavOn: true };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(e) {
        if (this.props.subNavItem) {
            e.preventDefault();
            this.setState(prevState => ({
                isNavOn: !prevState.isNavOn
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
                this.state.isNavOn
                    ? "c-primary-nav__item "
                    : "c-primary-nav__item is-active"
            } key={this.props.index}>
                <Link className={this.props.subNavItem ? "c-primary-nav__link  c-primary-nav__link--has-children" : "c-primary-nav__link"}  to={ this.props.href } onClick={this.toggleNav}>
                    <span className="c-primary-nav__text">{this.props.label}</span>
                    {this.props.subNavItem &&
                        <svg className="c-icon c-primary-nav__icon" width="16" height="16" viewBox="0 0 7 16" id="chevron-right"><title>chevron-right</title><path d="M2 3L0 5l3 3-3 3 2 2 5-5-5-5z"></path></svg>
                    }
                </Link>
                {this.props.subNavItem &&

                    this.props.subNavItem
                }

            </li>
        )
    }
};

export default PrimaryNavItem;
