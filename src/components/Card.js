import React from 'react';
import Link from "gatsby-link";
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import markdownIt from 'markdown-it';

const Card = ({ href, header, title, description, cardImg, cardImgAlt, footer}) => {
	const md = markdownIt({
	  html: true,
	  linkify: true
  });
	return (
		<a href={href} className="c-card">
			{ header &&
			<header className="c-card__header">
					{header}
			</header>
			}

			<div className="c-card__body">
			<h2 className="c-card__title">
			  <span className="c-card__title-text">{title}</span>
			</h2>

				{ description &&
					<div className="c-card__desc" dangerouslySetInnerHTML={{ __html: md.render(description) }} />
				}

			</div>

			{ footer &&
				<div className="c-card__footer">
					{footer}
				</div>
			}

		</a>
)

};

export default Card;
