const API_URL = 'https://www.quandl.com/api/v3/datasets/CHRIS/ICE_T1.json?api_key=mHQ72VrY6ydQpb8fTkuV';

export const FETCH_OIL_PRICE_SUCCESS = 'FETCH_OIL_PRICE_SUCCESS';
export const fetchOilPriceSuccess = (data) => ({
	type:FETCH_OIL_PRICE_SUCCESS,
	data
});

export const FETCH_OIL_PRICE_FAILURE = 'FETCH_OIL_PRICE_FAILURE';
export const fetchOilPriceFailure = (data) => {
	return {
		type: FETCH_OIL_PRICE_FAILURE,
		data
	};
};

export const getOilPrice = () => dispatch => {
	 fetch(API_URL)
    .then(response =>{
      return response.json();
    })
    .then(myJson =>{
    		console.log('myJson',myJson)
      return myJson.dataset.data[0][1];
      //2/18 test tomorrow 2/19
    });
};



