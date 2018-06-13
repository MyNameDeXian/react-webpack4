import React from 'react'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import rootReducers from '../modules/'

const home = ( state = {} ) => {
	return state;
}

const store = createStore(
	home,
	applyMiddleware(thunk)
)

export default store