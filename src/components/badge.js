import React from 'react';

if (status) {
  const styleModifier = "negative";
}

const Badge = ({ status }) => (
  <span className={"c-badge c-badge--positive"}> { status.toUpperCase() }</span>
);

export default Badge;
