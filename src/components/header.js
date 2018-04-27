import React from 'react';
import Logo from './logo';
import Button from './button';
import PrimaryNav from './primary-nav';

const Header = ({ siteTitle }) => (
  <header className="c-header c-header--vertical" role="banner">
    <div className="c-header__inner">
      <Logo siteTitle={ siteTitle } />
      <Button styleModifier="c-btn--small c-header__nav-btn" text="Menu" />
      <div className="c-header__nav-container">
        <PrimaryNav />
      </div>
    </div>
  </header>
);

export default Header;
