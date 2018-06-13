import React from 'react'
import { Provider } from 'react-redux'
import { Router, BrowserRouter, HashRouter } from 'react-router-dom'

import store from '../store/'
import Routes from './Routes'

// hash 路由 开发使用
export default (props) => (
	<Provider store={store}>
		<HashRouter>
			<Routes />
		</HashRouter>
	</Provider>
)

console.log(process.env.NODE_ENV)
// 生产环境使用
// export default (props) => (
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<Routes />
// 		</BrowserRouter>
// 	</Provider>
// )