import React, {Component} from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions';
import Input from './Input';
import CompletionChart from './CompletionChart';
import Inquiries from './Inquiries';

class LandmenLogin extends Component {
  render() {
    return (
    	<div className='row'>
    		<div className='col-sm-4'>
    		</div>
    		<div className='col-sm-4'>    		
	    	<form className='form-signin'>
	    		 <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
	    		 <label htmlfor='inputEmail' className='sr-only'>Email address</label>
	      		 <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autofocus/>
				 <label for='inputPassword' class='sr-only'>Password</label>
		      	 <input type='password' id='inputPassword' class='form-control' placeholder='Password' required/>		      
			     <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
	    	</form>
	    	</div>
            <div className='col-sm-4'>
    		</div>
    	</div>
    );
  }
}

export default LandmenLogin;