

export const getWeather = () => dispatch => {
	fetch(`$http://api.openweathermap.org/data/2.5/weather?zip=78726,us&APPID=71dd692b6e018b9ef955bdbff87a0067`)
		.then(res => {
			if (!res.ok){
				return Promise.reject(res.status)
			}
			return res.json();
		})
		.then(data => {
			dispatch(fetchWeatherSuccess(data));
		});
};

//api base url into config file and git ignore
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const fetchWeatherSuccess = () => ({
	type:FETCH_WEATHER_SUCCESS
});

//