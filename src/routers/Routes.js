import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Test from 'pages/Test'
import Address from 'pages/Address'
import ShowPicture from 'pages/ShowPicture'

export default () => (
	<Switch>
		<Route exact path='/test' component={Test} />
		<Route exact path='/address' component={Address} />
		<Route exact path='/images' component={ShowPicture} />
		<Route path='/' render={()=>(
			<Home>
				<Route exact path='/' component={ShowPicture} />
				<Route exact path='/test' component={Test} />
			</Home>
		)}/>
	</Switch>
)