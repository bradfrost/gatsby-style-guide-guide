import React from 'react';
import markdownIt from 'markdown-it';

const Hero = ({title, description, meta, backgroundImageUrl, cta, footer}) => {

	const md = markdownIt({
		html: true,
		linkify: true
	});

	return (
		<div className="c-hero" style={{backgroundImage: 'url(' + backgroundImageUrl + ')'}}>

		    <div className="c-hero__body">

		        <h1 className="c-hero__title">{title}</h1>
				{description &&
					<div className="c-hero__desc" dangerouslySetInnerHTML={{ __html: md.render(description) }} />
				}
				{meta &&
					<div className="c-hero__meta">{meta}</div>
				}
				{footer &&
					<div className="c-hero__footer">
						{footer}
					</div>
				}
		    </div>

		</div>
	)

};

export default Hero;
