import React, { Component } from 'react'
import './header.scss'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		let { focus } = this.state;
		return(
			<header className='header-comp flex-row f-ai-c f-jc-sa'>
	        	<Button variant="outlined" color="primary" onClick={this.clickBtn}>
	          	To Address
	        	</Button>
				<Input placeholder='search'/>
			</header>
		)
	}
	setSearchBox = () =>{
		let { focus } = this.state;
		this.setState({
			focus: !focus
		})
	}
	clickBtn = () =>{
    	let { history } = this.props;
    	history.push('/address')
  	}
}

export default Header