import { connect } from 'react-redux';
import { getWeather } from '../actions';
import React from 'react';


export class About extends React.Component {
	componentDidMount(){
		this.props.dispatch(getWeather());
	}

	render(){
		return(
			<div>
				About
			</div>
			)
	}
}

const mapStateToProps = state => ({
	weather: state.weather
});

export default connect(mapStateToProps)(About);



//https://home.openweathermap.org/api_keys

