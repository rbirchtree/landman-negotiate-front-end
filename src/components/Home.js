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
		const diff = (price[0]-price[1]).toFixed(2);
		
		return (
					<div className='row'>
						<div className='col-sm-4'>Oil prices change daily, don't you want the best deal for your rights? 
						 Consult with us today! The current price of WTI is ${price[0]} <span className={diff >= 0 ? 'text-success': 'text-danger'}>
						 {diff > 0 ? '+': '-'}{diff}</span>
						 <iframe src="https://app.drillinginfo.com/drc/?widget=true" frameborder="0" width="300" height="250" scrolling="no" marginwidth="0" marginheight="0"></iframe>
						 </div>
						<div className='col-sm-8'><img className='img-fluid rounded' src={oilPump} alt='Fenced in oil pump.'/></div>
					</div>
			);
	}
};

const mapStateToProps = state => ({
	price: state.price
});

export default connect(mapStateToProps)(Home);
