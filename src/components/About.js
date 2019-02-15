import { connect } from 'react-redux';
import { getWeather } from '../actions';
import React from 'react';


export class Board extends React.Component {
	componentDidMount(){
		this.props.dispatch(setWeather());
	}
}

export default About



//https://home.openweathermap.org/api_keys

