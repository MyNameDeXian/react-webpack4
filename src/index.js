import React from 'react'
import { render } from 'react-dom'
import './assets/common.scss'
import './assets/flex-style.scss'
import Routers from './routers/'

render(
	<Routers>Free</Routers>,
	document.getElementById('root')
)