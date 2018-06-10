import React, { Component } from "react";

class TextField extends React.Component {

    render() {
        return (
            <div className="c-form-field">
                <label htmlFor={this.props.name} className="c-form-field__label ">{this.props.label}</label>
                <div className="c-form-field__body">
                    <input type={this.props.type} id={this.props.name} className="c-input " name={this.props.name} placeholder={this.props.placeholder } title={this.props.title} />
                </div>
                {this.props.fieldnote &&
                    <div className="c-form-field__note">{this.props.fieldnote}</div>
                }
            </div>
        )
    }
};

export default TextField;
