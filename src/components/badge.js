import React from 'react';
import classnames from 'classnames';

const Badge = ({ status }) => {
    
    let badgeClass = classnames({
        "c-badge": true,
        "c-badge--positive": status === "Complete",
        "c-badge--negative": status === "Deprecated" || "Not Started",
        "c-badge--caution": status === "In Progress"
    })
  
    if (status) {
      return (
        <span className={badgeClass}>{ status }</span>
      )
    }
};

export default Badge;
