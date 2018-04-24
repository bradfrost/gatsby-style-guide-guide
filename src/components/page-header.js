import React from "react";

const PageHeader = ({ title, description }) => (
    <div className="c-page-header">
        <h1 className="c-page-header__title">{ title }</h1>
        <div className="c-page-header__desc">{ description }</div>
	</div>
);

export default PageHeader;
