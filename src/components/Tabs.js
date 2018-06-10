import React from "react";

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTab: 0
        };
        this.setCurrentTab.bind(this);
    }

    setCurrentTab(currentTab) {
        this.setState({
            currentTab: currentTab
        });
    }

    render() {
        return (
            <div className={"c-tabs " + this.props.styleModifier }>
                <ul className="c-tabs__list" role="tablist">
                    {React.Children.map(this.props.children, (item, index) => {
                        return (
                            <li className={ 'c-tabs__list-item ' + (this.state.currentTab == index ? 'is-active' : '') } key={"tab-" + index }>
                                <a
                                    className="c-tabs__link"
                                    onClick={e => {
                                        this.setCurrentTab(index);
                                        if (typeof window !== 'undefined') {
                                            if(document.readyState !== "loading") {
                                        	    setTimeout(Prism.highlightAll, 0);
                                        	}
                                        	else {
                                        	    document.addEventListener('DOMContentLoaded', Prism.highlightAll);
                                        	}
                                        }
                                    }}
                                    href={"#tabs-" + index}>
                                    {item.props.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="c-tabs__body">
                    {this.props.children[this.state.currentTab]}
                </div>
            </div>
        )
    }

};

export default Tabs;
