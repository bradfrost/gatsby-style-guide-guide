import React from 'react';

const Button = ({ text, styleModifier }) => (
	<button className={"c-btn " + styleModifier }>

		{ text }

	</button>
);

export default Button;