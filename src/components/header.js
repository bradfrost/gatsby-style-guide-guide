import React, { Component } from "react";
import classnames from 'classnames';
import Logo from "./Logo";
import Button from "./Button";
import PrimaryNav from "./PrimaryNav";

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(e) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        let headerClass = classnames({
            "c-header": true,
            "ads-u-margin-bottom-none": this.props.styleModifier === "ads-u-margin-bottom-none",
            "c-header--vertical": this.props.styleModifier === "c-header--vertical"
        })

        return (
            <header className={headerClass} status="Complete" role="banner">
                <div className="c-header__inner">
                    <Logo siteTitle={this.props.siteTitle} />
                    <Button
                        styleModifier="c-btn--small c-header__nav-btn"
                        text={this.state.isToggleOn ? "Menu" : "Close"}
                        onClickHandler={this.toggleMenu}
                    />
                    <div
                        className={
                            this.state.isToggleOn
                                ? "c-header__nav-container"
                                : "c-header__nav-container is-active"
                        }
                    >
                        <PrimaryNav data={this.props.navData} toggleStatus={this.toggleMenu} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
