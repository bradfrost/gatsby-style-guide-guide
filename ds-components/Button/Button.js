import React from 'react';

const Button = ({ text, styleModifier }) => {
	return (
		<button className={"c-btn " + styleModifier }>

			{ text }

		</button>
	)
};

export default Button;
