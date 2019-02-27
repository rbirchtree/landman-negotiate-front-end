import React from 'react';
import {Field, reduxForm} from 'redux-form';

const Consultation = (props) => {
	const {handleSubmit,pristine,reset,submitting} = props;
	return (
		<form onSubmit={handleSubmit}>
		 <div className="row">
		 <div className="col-md-6">
		  <label>First Name</label>
		  <div>
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
		  <div>
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
		 <div className="col-md-6">
		  <label>Street Address</label>
		  <div>
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
		  <div>
		   <Field
		    name="suiteNumber"
		    component="input"
		    type="text"
		    placeholder="Suite Number"
		    />
		  </div>
		 </div>
		 </div>
		 <div>
		  <label>City</label>
		  <div>
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
		  <div>
		   <Field
		    name="state"
		    component="input"
		    type="text"
		    placeholder="State"
		    />
		  </div>
		 </div>
		 <div>
		  <label>Zip Code</label>
		  <div>
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
		  <div>
		   <Field
		    name="phoneNumber"
		    component="input"
		    type="text"
		    placeholder="Phone Number"
		    />
		  </div>
		 </div>
		 <div>
		  <label>E-Mail</label>
		  <div>
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
		 <div>
		 	<Field name="notes" component="textarea"/>
		 </div>
		 </div>
		 <button type="submit" disabled={pristine || submitting}>
		 	Submit
		 </button>
		</form>
		)
};

export default reduxForm({form: 'consultation'})(Consultation);