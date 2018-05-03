import React from "react";
import Badge from './Badge';

const PageHeader = ({ title, description, status }) => (
    <div className="c-page-header">
        <h1 className="c-page-header__title">{ title } {status ? <Badge status={ status } /> : null}</h1>
        <div className="c-page-header__desc">{ description }</div>
	</div>
);

export default PageHeader;
