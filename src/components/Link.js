import React from 'react';
import { Link } from 'gatsby';

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(' ')} to={to}>
      { children }
    </GatsbyLink>
  );
}
