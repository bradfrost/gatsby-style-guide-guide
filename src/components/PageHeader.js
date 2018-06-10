import React from "react";
import Badge from './Badge';
import markdownIt from 'markdown-it';

const PageHeader = ({ kicker, title, description, status }) => {
    const md = markdownIt({
	  html: true,
	  linkify: true
  });
  return (
    <div className="c-page-header">
        {kicker &&
        <p className="c-page-header__kicker">{ kicker }</p>
        }
        <h1 className="c-page-header__title">{ title } {(status && status != "Complete") ? <Badge status={ status } /> : null}</h1>
        {description &&
            <div className="c-page-header__desc" dangerouslySetInnerHTML={{ __html: md.render(description) }} />
        }
    </div>
    )
};

export default PageHeader;
