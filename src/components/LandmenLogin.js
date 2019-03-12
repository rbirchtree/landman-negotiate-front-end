import React, {Component} from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import {required, nonEmpty} from '../validators';
import { login } from '../actions';
import Input from './Input';
import CompletionChart from './CompletionChart';
import Inquiries from './Inquiries';


class LandmenLogin extends React.Component {

     onSubmit(values){
        return this.props.dispatch(login(values.username, values.password));
     }

  render() {
    
    let error;
    if(this.props.error){
        error = (
            <div className="form-error" aria-live="polite">
                {this.props.error}
            </div>
            );
    }
    return (
        <form
            className="login-form"
            onSubmit={this.props.handleSubmit(values => 
                this.onSubmit(values)
                )}
        >
        {error}
        <label htmlFor="username">UserName</label>
        <Field
            component={Input}
            type="text"
            name="username"
            id="username"
            validate={[required, nonEmpty]}
         />
         <label htmlFor="password">Pasword</label>
         <Field
            component={Input}
            type="password"
            name="password"
            id="password"
            validate={[required,nonEmpty]}
            />
        <button disabled={this.props.pristine || this.props.submitting}>
            Log in
        </button>
    </form>
    );
  }
}

export default reduxForm({
    form: 'login',
    onSubmitFaile: (errors,dispatch) => dispatch(focus('login', 'username'))
})(LandmenLogin);

            // <div className='col-sm-4'>
            // </div>
            // <div className='col-sm-4'>          
            // <form className='form-signin'>
            //      <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
            //      <label htmlfor='inputEmail' className='sr-only'>Email address</label>
            //      <input type='email' id='inputEmail' className='form-control' placeholder='Email address' required autofocus/>
            //      <label for='inputPassword' class='sr-only'>Password</label>
            //      <input type='password' id='inputPassword' class='form-control' placeholder='Password' required/>             
            //      <button className='btn btn-lg btn-primary btn-block' type='submit'>Sign in</button>
            // </form>
            // </div>
            // <div className='col-sm-4'>
            // </div>