import React, { Component } from "react";

class SelectField extends React.Component {

    render() {
        return (

            <div className="c-form-field">
                <label htmlFor={this.props.name} className="c-form-field__label">{this.props.label}</label>
                <div className="c-form-field__body">
                    <select className="c-select" id={this.props.name} name={this.props.name} placeholder={this.props.placeholder}>
                        {this.props.options.map(option => {
                            return (
                                <option value={option.value} >{option.label}</option>
                            )
                        })}
                    </select>
                </div>

                {this.props.fieldnote &&
                    <div className="c-form-field__note">{this.props.fieldnote}</div>
                }

            </div>
        )
    }
};

export default SelectField;
