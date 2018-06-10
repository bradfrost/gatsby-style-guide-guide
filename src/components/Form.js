import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

class Form extends React.Component {

    render() {
        return (
            <form method={this.props.method} action={this.props.action} className="c-form">

                <div className="c-form__body">
                    {this.props.body}
                </div>

                <div className="c-form__footer">
                    {this.props.footer}
                </div>

            </form>
        )
    }
};

export default Form;
