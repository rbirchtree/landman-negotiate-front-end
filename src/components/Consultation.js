import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import { login } from '../actions';
import Input from './Input';
//make login register client
import {required, nonEmpty } from '../validators';

class Consultation extends React.Component{
	onSubmit(values){
		return this.props.dispatch(login(values.firstName));
		//return this.props.dispatch(consultation(v))
	}

	render(){
	let error;
	if (this.props.error){
		error = (
			<div className="form-error" aria-live="polite">
				{this.props.error}
			</div>
			)
	}
	const {handleSubmit,pristine,reset,submitting} = this.props;

	return (
		<form  className='consultForm' onSubmit={handleSubmit(values =>
			this.onSubmit(values)
			)}>
		 <div className='row'>
		 <div className='col-md-4'>
		 </div>
		 <div >
		  <label>First Name</label>
		  <div className='col-md-4'>
		   <Field
		    name='firstName'
		    component={Input}
		    type='text'
		    placeholder='First Name'
		    validate={[required,nonEmpty]}
		    />
		  </div>
		 </div>
		 </div>
		 <button disabled={this.props.pristine || this.props.submitting}>
		 	Log in
		 </button>
		</form>
		)
	}
}

export default reduxForm({form: 'consultation'})(Consultation);