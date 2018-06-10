import React from 'react';
import Card from "../Card";

const CardExample = () => {
	return (
        <div>
		<Card
			header="Card Header"
			href="#"
			title="Card Title"
			description="Lorem ipsum dolo sit amet, consectetur adipiscing elit. Praesent lobrtis neque in quam tempus aliquam."
			key="card-1"
			footer="Card Footer"
		/>
        </div>
	)
};

export default CardExample;
