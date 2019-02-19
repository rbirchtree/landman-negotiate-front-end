import { GET_OIL_PRICE_SUCCESS } from '../actions';

const initialState = {
	price: 60
};

export const oilPriceReducer = (state=initialState, action) => {
	if(action.type === GET_OIL_PRICE_SUCCESS ){
		
		return action;
	}
	console.log('action',action)
	console.log('action reducer',action.data)
	console.log('state reducer',state);
	return state;
};