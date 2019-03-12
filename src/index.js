import React from 'react';
import ReactDOM from 'react-dom';
import {reducer as formReducer } from 'redux-form';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { oilPriceReducer } from './reducers';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
			oil:oilPriceReducer,
		form:formReducer}
	);
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
	oilPriceReducer,
	applyMiddleware(thunk));
//authreducer
//make a reducer for oil
/*combineReducers({
	
	form: formReducer
	}),*/
ReactDOM.render(
	<Provider store={store}>
		<App className="container"/>
	</Provider>
	, document.getElementById('root'));
// const store = createStore(
// 	oilPriceReducer,
// 	composeEnhancers(applyMiddleware(thunk)));