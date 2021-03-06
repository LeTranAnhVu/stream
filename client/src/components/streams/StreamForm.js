import React from 'react';
import {Field, reduxForm} from "redux-form";

class StreamForm extends React.Component {

    showError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="list">{error}</div>
                </div>
            )
        }
    };

    inputRender = ({input, label, meta, type}) => {
        const fieldClass = `field ${meta.touched && meta.error ? 'error' : ''}`;
        return (
            <div className={fieldClass}>
                <label>{label}</label>
                <input type={type || "text"} {...input}/>
                {this.showError(meta)}
            </div>
        )
    };

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.inputRender} label="Enter title"/>
                <Field name="description" component={this.inputRender} label="Enter description"/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = "You must enter title";
    }
    if (!formValues.description) {
        errors.description = "You must enter description";
    }
    return errors;
};

export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);
