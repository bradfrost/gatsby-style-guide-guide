import React from "react";
import Link from "gatsby-link";

const LinkList = ({ items }) => (
    <ul className="ap=c-link-list c-link-list--bulleted">

        {items.map(function(listItem) {
            return <li className="ap=c-link-list__item">
                <Link className="ap=c-link-list__link" to={ listItem.href }>
                    <span className="ap=c-link-list__text">{ listItem.text }</span>
                </Link>
            </li>
        })}
          
    </ul>
);

export default LinkList;
