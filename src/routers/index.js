import React from 'react'
import { Provider } from 'react-redux'
import { Router, BrowserRouter } from 'react-router-dom'

import createHistory from 'history/createHashHistory'
const hashHistory = createHistory('hashHistory')

import store from '../store/'
import Routes from './Routes'

// export default (props) => (
// 	<Provider store={store}>
// 		<Router history={hashHistory}>
// 			<div>112332</div>
// 		</Router>
// 	</Provider>
// )

export default (props) => (
	<Provider store={store}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</Provider>
)