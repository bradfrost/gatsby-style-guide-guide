import React, { Component } from 'react';


const Button = ({ text, onClickHandler, styleModifier, props }) => (
	<button className={"c-btn " + styleModifier } onClick={ onClickHandler } {...props}>

		{ text }

	</button>
);

export default Button;