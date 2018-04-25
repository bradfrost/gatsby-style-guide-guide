import React from 'react';
import Link from "gatsby-link";

const Card = ({ href, kicker, title, description }) => (
	<Link to={ href } className="c-card">

		<div className="c-card__body">

			<div className="c-card__kicker">
				{ kicker }
			</div>

			<h2 className="c-card__title">
				<span className="c-card__title-text">{ title }</span>
			</h2>

			<p className="c-card__desc">{ description }</p>

		</div>

	</Link>

);

export default Card;