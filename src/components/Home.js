import React from 'react';
import {connect} from 'react-redux';

import { getOilPrice } from '../actions';

export class Home extends React.Component {
	componentDidMount(){
		this.props.dispatch(getOilPrice());
	}

	render(){
		const {price} = this.props;
		return (
				<div>
				{price}
				</div>
			);
	}
};

const mapStateToProps = state => ({
	price: state.price
});

export default connect(mapStateToProps)(Home);