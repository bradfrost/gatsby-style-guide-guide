import React from 'react';

if (status) {
  const styleModifier = "negative";
}

const Badge = ({ status }) => {
    if (status) {
      return (
        <span className={"c-badge c-badge--positive"}>{ status }</span>
      )
    }
};

export default Badge;
