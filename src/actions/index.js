import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import {saveAuthToken} from '../local-storage';

import {normalizeResponseErrors} from './utils';

const API_URL = 'https://www.quandl.com/api/v3/datasets/CHRIS/ICE_T1.json?api_key=mHQ72VrY6ydQpb8fTkuV';
const API_BASE_URL ='';
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

export const AUTH_ERROR = 'AUTH_ERROR';
export const authError = error => ({
  type: AUTH_ERROR,
  error
});

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const login = (email, password) => dispatch => {
    dispatch(authRequest());
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({authToken}) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const {code} = err;
                const message =
                    code === 401
                        ? 'Incorrect email or password'
                        : 'Unable to login, please try again';
                dispatch(authError(err));
                return Promise.reject(
                    new SubmissionError({
                        _error: message
                    })
                );
            })
    );
};

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

const storeAuthInfo = (authToken, dispatch) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(authSuccess(decodedToken.user));
    saveAuthToken(authToken);
};