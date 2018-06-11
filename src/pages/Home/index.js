import React, { Component } from 'react'
import './home.less'
import { Button, Input, Switch } from 'antd'

class Home extends Component{

	render(){
		return(
			<div>
				<Button>
					Hello Free
				</Button>
			</div>
		)
	}
	onChange(){
		console.log('switch')
	}
}

export default Home