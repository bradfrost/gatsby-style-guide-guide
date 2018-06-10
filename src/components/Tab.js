import React from "react";

class Tab extends React.Component {
    render() {
        return (
            <div role="tabpanel">
                {this.props.children}
            </div>
        )
    }
}

export default Tab;