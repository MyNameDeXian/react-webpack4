import React from 'react'
import { render } from 'react-dom'
import './assets/css/common.scss'
import './assets/css/flex-style.scss'
import Routers from './routers/'

render(
	<Routers>Free</Routers>,
	document.getElementById('root')
)