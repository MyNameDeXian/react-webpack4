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
				<Input />
				<Switch defaultChecked onChange={this.onChange} />
			</div>
		)
	}
	onChange(){
		console.log('switch')
	}
}

export default Home
