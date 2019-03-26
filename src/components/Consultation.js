import React from 'react';
import { login } from '../actions';
import Input from './Input';
//make login register client


export default class Consultation extends React.Component{
	constructor(props){
		super(props)
		this.state = {firstName: 'John',
					  lastName: 'Smith',
					  unit: '8', 
					  streetAddress	: 'sdf',
					  city: '',
					  USstate: '',
					  zipCode:'',
					  phoneNumber: '',
					  email: '',
					  notes: ''
			};

/*		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);*/
	}

	handleChange(event){
		this.setState({value: event.target.value});
	}

	setfirstName(firstName){
		this.setState({
			firstName
		});
	}

	setLastName(lastName){
		this.setState({
			lastName
		});
	}

	setUnitNumber(unit){
		this.setState({
			unit
		});
	}

	setStreetAddress(streetAddress){
		this.setState({
			streetAddress
		});
	}

	setUSState(USstate){
		this.setState({
			USstate
		});
	}

	setCity(city){
		this.setState({
			city
		});
	}

	setPhoneNumber(phoneNumber){
		this.setState({
			phoneNumber
		});
	}

	setZipCode(zipCode){
		this.setState({
			zipCode
		});
	}

	setEmail(email){
		this.setState({
			email
		});
	}

	setNotes(event){
		this.setState({
			notes : event.target.value
		});
	}

	handleSubmit(event){
		event.preventDefault();
		alert(this.state.firstName);		
	}

	render(){
		console.log(this.state)
	return (
		<form  className='consultForm' onSubmit={(e) =>this.handleSubmit(e)}>
		 <div className='row'>
		  <div className='col-md-6'>
		    	<Input label="Last Name" value={this.state.lastName}
		    	onChange={value => this.setLastName(value)}
		    />
		  </div>
		  <div className='col-md-6'>
		    <Input label="First Name" value={this.state.firstName}
		    	onChange={value => this.setFirstName(value)}
		    />
		   </div>
		 </div>
		 <div className='row'>
		  <div className='col-md-6'>
		    	<Input label="Street Address" value={this.state.streetAddress}
		    	onChange={value => this.setStreetAddress(value)}
		    />
		  </div>
		  <div className='col-md-6'>
		    <Input label="Unit Number" value={this.state.UnitNumber}
		    	onChange={value => this.setUnitNumber(value)}
		    />
		   </div>
		 </div>
		 <div className='row'>
		  <div className='col-md-6'>
		    	<Input label="City" value={this.state.city}
		    	onChange={value => this.setCity(value)}
		    />
		  </div>
		  <div className='col-md-6'>
		    <Input label="State" value={this.state.USstate}
		    	onChange={value => this.setUSState(value)}
		    />
		   </div>
		 </div>
		 <div className='row'>
		  <div className='col-md-6'>
		    	<Input label="Phone Number" value={this.state.phoneNumber}
		    	onChange={value => this.setPhoneNumber(value)}
		    />
		  </div>
		  <div className='col-md-6'>
		    <Input label="Zip Code" value={this.state.zipCode}
		    	onChange={value => this.setZipCode(value)}
		    />
		   </div>
		 </div>
		 <div className='row'>
		  <div className='col-md-6'>
		    	<Input label="E-MAIL" value={this.state.email}
		    	onChange={value => this.setEmail(value)}
		    />
		  </div>
		  <div className='col-md-6'>
		  	<label>Notes</label>
		  	<textarea
		  		value={this.state.value}
		    	onChange={value => this.setNotes(value)}
		    	/>
		   </div>
		 </div>
		 <div className='row'>
		  <button >
		 	Submit
		  </button>
		 </div>
		</form>
		)
	}
}

