const API_URL = 'https://www.quandl.com/api/v3/datasets/CHRIS/ICE_T1.json?api_key=mHQ72VrY6ydQpb8fTkuV';

export const FETCH_OIL_PRICE_SUCCESS = 'FETCH_OIL_PRICE_SUCCESS';
export const getOilPrice = () => dispatch => {
	fetch(API_URL)    
	.then(response =>{
		console.log('response', response)
      return response.json();
    })
    .then(myJson =>{
    	console.log('myJson',myJson.dataset.data[0][1]);
      return myJson.dataset.data[0][1];
    }).then(data => {
    	console.log('dispatch',data)
    	dispatch(getOilPriceSuccess(data));
    }).catch(err => {
    	console.log('err',err)
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
		type: FETCH_OIL_PRICE_FAILURE,
		data
	};
};
/*
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

*/