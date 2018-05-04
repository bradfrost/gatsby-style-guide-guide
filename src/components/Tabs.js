import React from "react";

const Tabs = ({ tabList, children }) => (
    <div className="c-tabs">
        <ul className="c-tabs__list">
            {tabList.map(function(tabListItem) {
                return (
                    <li className="c-tabs__item">
                        <a className="c-tabs__link" href={tabListItem.href}>
                            {tabListItem.label}
                        </a>
                    </li>
                );
            })}
        </ul>
        <div className="c-tabs__body">
            <div className="c-tabs__panel is-active" id="#panel-1">
                {children}
            </div>
        </div>
    </div>
);

export default Tabs;
