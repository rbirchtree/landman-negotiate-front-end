import React from 'react';
import ReactDOM from 'react-dom';
import {reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';

import { weatherReducer } from './reducers';

const store = createStore(weatherReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
