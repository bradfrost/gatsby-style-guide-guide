import React from 'react';
import Logo from './logo';
import PrimaryNav from './primary-nav';

const Header = ({ siteTitle }) => (
  <header className="c-header c-header--vertical" role="banner">
    <div className="c-header__inner">
      <Logo siteTitle={ siteTitle } />
      <PrimaryNav />
    </div>
  </header>
);

export default Header;
