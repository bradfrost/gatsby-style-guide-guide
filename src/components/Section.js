import React from "react";
import markdownIt from 'markdown-it';

const Section = ({ headingLevel, title, description, children }) => {

    const md = markdownIt({
	  html: true,
	  linkify: true
  });

    return (
        <section className="c-section">
            <header className="c-section__header">
                <h2 className="c-section__title" dangerouslySetInnerHTML={{__html: title}}  />
                { description &&
                    <div className="c-section__description" dangerouslySetInnerHTML={{ __html: md.render(description) }}  />
                }
            </header>
            <div className="c-section__body">{children}</div>
        </section>
    )
};

export default Section;
