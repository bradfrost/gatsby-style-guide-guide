import React from 'react';
import GatsbyLink from 'gatsby-link';

export default function Link({ children, className, to }) {
  return (
    <GatsbyLink className={[`link`].concat(className || []).join(' ')} to={to}>
      { children }
    </GatsbyLink>
  );
}
