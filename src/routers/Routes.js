import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Test from 'pages/Test'
import Address from 'pages/Address'

export default () => (
	<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/test' component={Test} />
		<Route exact path='/address' component={Address} />
	</Switch>
)