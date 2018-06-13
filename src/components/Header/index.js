import React, { Component } from 'react'
import './header.scss'
import Input from '@material-ui/core/Input'

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	render(){
		let { focus } = this.state;
		return(
			<header className='header-comp flex-row f-center f-ai-c'>
				<div className='search flex-row'>
					<Input 
						placeholder='search'/>
				</div>
			</header>
		)
	}
	setSearchBox = () =>{
		let { focus } = this.state;
		this.setState({
			focus: !focus
		})
	}

}

export default Header