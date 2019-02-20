import React from 'react';
import {connect} from 'react-redux';
import { NavLink} from 'react-router-dom';
import { getOilPrice } from '../actions';
import oilPump from '../img/oil_pump_udo.jpg';


//<li className="nav-item"><NavLink className="nav-link" to="/consultation">Consultation</NavLink></li>


export class Home extends React.Component {
	componentDidMount(){
		this.props.dispatch(getOilPrice());
	}

	render(){
		const {price} = this.props;
		return (
					<div className="row">
						<div className="col-sm-4">Oil prices change daily, don't you want the best deal for your rights? 
						 Consult with us today! The current price of WTI is ${price.toFixed(2)}</div>
						<div className="col-sm-8"><img className="img-fluid rounded" src={oilPump} alt="Fenced in oil pump."/></div>

					</div>
			);
	}
};

const mapStateToProps = state => ({
	price: state.price
});

export default connect(mapStateToProps)(Home);
{/*					*/}