import React, { Component } from "react";
import Link from "gatsby-link";

export class PrimarySubSubNavItem extends Component {

    render() {
        return (
            <li className="c-primary-nav__subitem" key={this.props.url}>
                <Link className="c-primary-nav__sublink" to={this.props.url}>
                    <span className="c-primary-nav__text">{this.props.title}</span>
                </Link>
            </li>
        )
    }
};

export default PrimarySubSubNavItem;
