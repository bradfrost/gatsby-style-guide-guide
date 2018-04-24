import React from 'react';
import GatsbyLink from 'gatsby-link';
import HomeIcon from 'react-icons/lib/fa/home';
import TagsIcon from 'react-icons/lib/fa/tags';

import Link from '../components/Link';

import '../css/tags.css';

export default function Tags({ pathContext }) {
  const { posts, post, tag } = pathContext;
  if (tag) {
    return (
      <div>
        <h1>
          {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
        </h1>
        <ul>
          {post.map(({ id, frontmatter, excerpt }) => {
            return (
              <li key={id}>
                <h1>
                  <GatsbyLink to={frontmatter.path}>
                    {frontmatter.title}
                  </GatsbyLink>
                </h1>
                <p>
                  {excerpt}
                </p>
              </li>
            );
          })}
        </ul>
        <Link to="/tags">
          <TagsIcon /> All tags
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => {
          const tags = posts[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={`/tags/${tagName}`}>
                {tagName}
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  );
}
