import React from "react";

const Section = ({ headingLevel, title, description, children }) => {

    return (
        <section className="c-section">
            <header className="c-section__header">
                <h2 className="c-section__title">{title}</h2>
                <p className="c-section__description">{description}</p>
            </header>
            <div className="c-section__body">{children}</div>
        </section>
    )
};

export default Section;
