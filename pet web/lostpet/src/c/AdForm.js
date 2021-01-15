import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createAd } from '../actions';
import { connect } from "react-redux";
class AdForm extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
          return (
            <div className="ui error message">
              <div className="header">{error}</div>
            </div>
          );
        }
      }
    
      renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
          <div className={className}>
            <label>{label}</label>
            <input {...input} autoComplete="off" />
            {this.renderError(meta)}
          </div>
        );
      };
    
    onSubmit=formValues=> {
        this.props.createAd(formValues);
      };
    render() {
        return (
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
            className="ui form error"
          >
            <Field name="location" component={this.renderInput} label="Describe Where you lost pet" />
            <Field
              name="description"
              component={this.renderInput}
              label="Enter Description"
            />
            <label>cat or dog?</label>
            <div>
                <label>
                <Field name="race" component="input" type="radio" value="Cat" />{' '}
            cat
                </label>
                <label>
            <Field name="race" component="input" type="radio" value="Dog" />{' '}
            dog
          </label>
            </div>

            <button className="ui button primary">Submit</button>
          </form>
        );
      }
}
const validate = formValues => {
    const errors = {};
  
    if (!formValues.title) {
      errors.title = 'You must enter location where you found it';
    }
  
    if (!formValues.description) {
      errors.description = 'You must enter a description';
    }
    
    if(!formValues.race){
      errors.race = "you must select pets race";
    }
    return errors;
  };
const formWrapped = reduxForm({
    form: 'adForm',
    validate
  })(AdForm);
  
  export default connect(null, {createAd})(formWrapped);