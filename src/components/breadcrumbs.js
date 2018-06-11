import React from 'react';
import Link from "gatsby-link";

const Breadcrumbs = ({ group, subgroup }) => {
	return (
		<ol className="c-breadcrumbs">

			<li className="c-breadcrumbs__item">
				<Link className="c-breadcrumbs__link" to={"/" + group }>{ group }</Link>
			</li>

			{subgroup && 
				
				<li className="c-breadcrumbs__item">
					<Link className="c-breadcrumbs__link" to={"/" + group + "/" + subgroup }>{ subgroup }</Link>
				</li>
			}
			
		</ol>
	)
};

export default Breadcrumbs;