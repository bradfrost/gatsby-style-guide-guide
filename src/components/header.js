import React, { Component } from 'react';
import Logo from "./logo";
import Button from "./button";
import PrimaryNav from "./primary-nav";

export class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {isToggleOn: true};
		
		this.toggleMenu = this.toggleMenu.bind(this);
	}

    toggleMenu(e) {
        e.preventDefault();
        this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
    }

    render() {
		return (
		<header className="c-header c-header--vertical" role="banner">
            <div className="c-header__inner">
                <Logo siteTitle={ this.props.siteTitle } />
                <Button
                    styleModifier="c-btn--small c-header__nav-btn"
                    text={this.state.isToggleOn ? 'Menu' : 'Close'}
                    onClickHandler={ this.toggleMenu }
                />
                <div className={this.state.isToggleOn ? 'c-header__nav-container' : 'c-header__nav-container is-active' }>
                    <PrimaryNav />
                </div>
            </div>
        </header>
		)
	}
};

export default Header;
