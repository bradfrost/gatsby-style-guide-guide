import React, { Component } from "react";

class TextareaField extends React.Component {

    render() {
        return (

            <div className="c-form-field">
                <label htmlFor={this.props.name} className="c-form-field__label ">{this.props.label}</label>
                <div className="c-form-field__body">
                    <textarea type="text" id={this.props.name} name={this.props.name} className="c-textarea" placeholder={this.props.placeholder} title={this.props.title}/>
                </div>
                {this.props.fieldnote &&
                    <div className="c-form-field__note">{this.props.fieldnote}</div>
                }
            </div>
        )
    }
};

export default TextareaField;
