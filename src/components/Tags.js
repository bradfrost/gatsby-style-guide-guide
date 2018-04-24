import React from 'react';
import Link from 'gatsby-link';

import '../css/tags.css';

export default function Tags({ list = [] }) {
  return (
    <ul className="tag-list">
      {list.map(tag =>
        <li key={tag}>
          <Link to={`/tags/${tag}`}>
            {tag}
          </Link>
        </li>
      )}
    </ul>
  );
}
