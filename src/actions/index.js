import { API_URL } from '../config';

export const getWeather = () => dispatch => {
	fetch(API_URL)
		.then(res => {
			if (!res.ok){
				return Promise.reject(res.status)
			}
			return res.json();
		})
		.then(data => {
			console.log('data',data)
			//dispatch(fetchWeatherSuccess(data));
		});
};


export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const fetchWeatherSuccess = (data) => ({
	type:FETCH_WEATHER_SUCCESS,
	data
});
