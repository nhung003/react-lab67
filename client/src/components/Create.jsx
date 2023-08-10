import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

class Create extends Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div className='field'>
        <input {...input} />
        <small id="emailHelp" class="form-text text-muted">{meta.error}</small>
      </div>
    );
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <div className='w-full h-full'>
        <form className=' text-left d-flex flex-column justify-content-center align-items-center h-100' onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <h4>Form</h4>
          <div className="form-group">
            <label htmlForor="exampleInputEmail1">Title</label>
            <Field type='text' name='title' component={this.renderInput} label='Enter Title' />
          </div>
          <div className="form-group">
            <label htmlForfor="exampleInputEmail1">Desciption</label>
            <Field type='text' name='description' component={this.renderInput} label='Enter Description' />
          </div>
          <div className="form-group mt-auto">
            <button className="justify-content-start btn btn-success" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'Create',
  validate
})(Create);