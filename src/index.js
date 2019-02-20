import React from 'react';
import ReactDOM from 'react-dom';
import {reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { oilPriceReducer } from './reducers';
import './index.css';
import App from './App';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(oilPriceReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
	<Provider store={store}>
		<App className="container"/>
	</Provider>
	, document.getElementById('root'));
