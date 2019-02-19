import { FETCH_OIL_PRICE_SUCCESS } from '../actions';

const initialState = {
	price: 60
};

export const oilPriceReducer = (state=initialState, action) => {
	if(action.type === FETCH_OIL_PRICE_SUCCESS ){
		console.log('action',action)
		return action;
	}
	console.log('state',state);
	return state;
};

