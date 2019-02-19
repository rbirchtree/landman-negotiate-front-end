import { FETCH_WEATHER_SUCCESS } from '../actions';

const initialState = {
	weather: "Sunny"
};

export const weatherReducer = (state=initialState, action) => {
	if(action.type === FETCH_WEATHER_SUCCESS ){
		console.log('action',action)
		return action;
	}
	console.log('state',state);
	return state;
};

