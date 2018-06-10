import React from 'react';

const Card = ({ header, href, title, description, cardImg, cardImgAlt, footer}) => {
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
				<div className="c-card__desc"> {description} </div>
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
