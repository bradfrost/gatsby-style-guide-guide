import React from "react";
import Link from "gatsby-link";

export default function Tags({ list = [] }) {
    return (
        <ul className="c-tag-list">
            {list.map(tag => (
                <li className="c-tag-list__item" key={tag}>
                    <Link to={ `/tags/${tag}` }>{ tag }</Link>
                </li>
            ))}
        </ul>
    );
}
