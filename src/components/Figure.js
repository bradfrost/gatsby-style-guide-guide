import React from 'react';
import markdownIt from 'markdown-it';

const Figure = ({title, image}) => {

	const md = markdownIt({
		html: true,
		linkify: true
	});

	return (
		<figure className="c-figure">

		    <img src={image} alt={title} className="c-figure__media" />

            <figcaption className="c-figure__caption">{title}</figcaption>

		</figure>
	)

};

export default Figure;
