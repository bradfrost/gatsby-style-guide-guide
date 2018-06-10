import React from 'react';
import classnames from 'classnames';
import Link from "gatsby-link";
import markdownIt from 'markdown-it';

const MediaBlock = ({ href, title, description, styleModifier, colors, image, imageAlt }) => {

	const md = markdownIt({
		html: true,
		linkify: true
	});

	return (
		<div className={"c-media-block " + styleModifier }>
			<div className="c-media-block__inner l-container">
				<div className="c-media-block__body">
					<h2 className="c-media-block__title ">{title}</h2>
					{description &&
						<div className="c-media-block__desc c-text-passage" dangerouslySetInnerHTML={{ __html: md.render(description) }} />
					}
					{ colors &&
						<div className="c-media-block__footer">
						{ colors }
						</div>
					}
				</div>

				<div className="c-media-block__media">
					<img src={image} alt={imageAlt} className="c-media-block__img" />
				</div>
			</div>

		</div>
	)
};

export default MediaBlock;
