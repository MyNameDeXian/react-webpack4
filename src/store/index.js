import React from 'react'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import rootReducers from '../modules/'

const store = createStore(
	rootReducers,
	applyMiddleware(thunk)
)

export default store