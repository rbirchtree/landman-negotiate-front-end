import { GET_OIL_PRICE_SUCCESS } from '../actions';

const initialState = {
	price: 60
};

export const oilPriceReducer = (state=initialState, action) => {
	if(action.type === GET_OIL_PRICE_SUCCESS ){

		return Object.assign({},state,{
			price: action.data
		});
	}
	
	return state;
};