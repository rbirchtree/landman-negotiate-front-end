const API_URL = 'https://www.quandl.com/api/v3/datasets/CHRIS/ICE_T1.json?api_key=mHQ72VrY6ydQpb8fTkuV';

export const FETCH_OIL_PRICE_SUCCESS = 'FETCH_OIL_PRICE_SUCCESS';
export const getOilPrice = () => dispatch => {
	fetch(API_URL)    
	.then(response =>{
      return response.json();
    })
    .then(myJson =>{
      return [myJson.dataset.data[0][1],myJson.dataset.data[1][1]];
    }).then(data => {
    	dispatch(getOilPriceSuccess(data));
    }).catch(err => {
    	dispatch(fetchOilPriceFailure());
    });
};

export const GET_OIL_PRICE_SUCCESS = 'GET_OIL_PRICE_SUCCESS';
export const getOilPriceSuccess = data => ({
	type: GET_OIL_PRICE_SUCCESS,
	data
});

export const FETCH_OIL_PRICE_FAILURE = 'FETCH_OIL_PRICE_FAILURE';
export const fetchOilPriceFailure = (data) => {
	return {
		type: FETCH_OIL_PRICE_FAILURE
	};
};
