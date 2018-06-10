import React from 'react';
import classnames from 'classnames';
import markdownIt from 'markdown-it';


const ContentBlock = ({ title, description, styleModifier }) => {

	let contentBlockClass = classnames({
		"c-content-block": true,
		"c-content-block--success": styleModifier === "c-content-block--success",
		"c-content-block--error": styleModifier === "c-content-block--error"
	})

	const md = markdownIt({
		html: true,
		linkify: true
	});

	return (
		<div className={contentBlockClass}>
			<h4 className="c-content-block__title">{title}</h4>
			<div className="c-content-block__desc c-text-passage" dangerouslySetInnerHTML={{ __html: md.render(description) }} />
		</div>
	)

};

export default ContentBlock;
