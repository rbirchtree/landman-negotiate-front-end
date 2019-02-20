import React from 'react';
import {connect} from 'react-redux';

import { getOilPrice } from '../actions';
import oilPump from '../img/oil_pump_udo.jpg';


export class Home extends React.Component {
	componentDidMount(){
		this.props.dispatch(getOilPrice());
	}

	render(){
		const {price} = this.props;
		return (
				<div>
				{price}
				<img src={oilPump} alt="Fenced in oil pump."/>
				</div>
			);
	}
};

const mapStateToProps = state => ({
	price: state.price
});

export default connect(mapStateToProps)(Home);