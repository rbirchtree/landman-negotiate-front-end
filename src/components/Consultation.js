import React from 'react';
import {Field, reduxForm} from 'redux-form';
//className="consultForm"
const Consultation = (props) => {
	const {handleSubmit,pristine,reset,submitting} = props;
	return (
		<form  className="consultForm" onSubmit={handleSubmit}>
		 <div className="row">
		 <div className="col-md-4">
		 </div>
		 <div >
		  <label>First Name</label>
		  <div className="col-md-4">
		   <Field
		    name="firstName"
		    component="input"
		    type="text"
		    placeholder="First Name"
		    />
		  </div>
		 </div>
		 <div>
		  <label>Last Name</label>
		  <div className="col-md-4">
		   <Field
		    name="lastName"
		    component="input"
		    type="text"
		    placeholder="Last Name"
		    />
		  </div>
		 </div>
		 </div>
		 <div className="row">
		 <div className="col-md-4">
		 </div>
		 <div >
		  <label>Street Address</label>
		  <div className="col-md-4">
		   <Field
		    name="streetAddress"
		    component="input"
		    type="text"
		    placeholder="Street Address"
		    />
		  </div>
		 </div>
		 <div>
		  <label>Suite Number</label>
		  <div className="col-md-4">
		   <Field
		    name="suiteNumber"
		    component="input"
		    type="text"
		    placeholder="Suite Number"
		    />
		  </div>
		 </div>
		 </div>
		 <div className="row">
		 <div className="col-md-4">
		 </div>
		 <div >
		  <label>City</label>
		  <div className="col-md-4">
		   <Field
		    name="city"
		    component="input"
		    type="text"
		    placeholder="City"
		    />
		  </div>
		 </div>
		 <div>
		  <label>State</label>
		  <div className="col-md-4">
		   <Field
		    name="state"
		    component="input"
		    type="text"
		    placeholder="State"
		    />
		  </div>
		 </div>
		 </div>
		 <div className="row">
		 <div className="col-md-4">
		 </div>
		 <div>
		  <label>Zip Code</label>
		  <div className="col-md-4">
		   <Field
		    name="zipCode"
		    component="input"
		    type="number"
		    placeholder="Zip Code"
		    />
		  </div>
		 </div>
		 <div>
		  <label>Phone Number</label>
		  <div className="col-md-4">
		   <Field
		    name="phoneNumber"
		    component="input"
		    type="text"
		    placeholder="Phone Number"
		    />
		  </div>
		 </div>
		 </div>
		 <div className="row">
		 <div className="col-md-4">
		 </div>
		 <div>
		  <label>E-Mail</label>
		  <div className="col-md-4">
		   <Field
		    name="email"
		    component="input"
		    type="text"
		    placeholder="E-Mail"
		    />
		  </div>
		 </div>
		 <div>
		 <label>Notes</label>
		 <div className="col-md-4">
		 	<Field name="notes" component="textarea"/>
		 </div>
		 </div>
		 </div>
		 <div className="row">
		 <div className="col-sm-4">
		 </div>
		 <div className="col-sm-4">
		 <button type="submit" disabled={pristine || submitting}>
		 	Submit
		 </button>
		 </div>
		 <div className="col-sm-4">
		 </div>
		 </div>
		</form>
		)
};

export default reduxForm({form: 'consultation'})(Consultation);