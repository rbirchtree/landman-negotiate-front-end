import { SET_WEATHER } from '../actions';

const initialState = {
	weather: "Sunny"
};

export const weatherReducer = (state=initialState, action) => {
	if (action.type === SET_WEATHER){
		return Object.assign({},state,{
			weather: action.weather
		});
	}
	return state;
};

