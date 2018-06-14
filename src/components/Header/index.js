import React, { Component } from 'react'
import './header.scss'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Home from '@material-ui/icons/Home';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: false
		}
	}
	render(){
		let { focus } = this.state;
		// fullWidth centered scrollable
		return(
			<header className='header-comp flex-row f-ai-c'>
				<IconButton>
					<Avatar>
						<Home/>
					</Avatar>
				</IconButton>
				<Tabs
					className='f-1'
	          	value={this.state.value}
	          	onChange={this.handleChange}
	          	indicatorColor="primary"
	          	textColor="primary"
	          	scrollable 
	          	scrollButtons="auto"
          	>
	          	<Tab label="plan" />
	          	<Tab label="web learning" />
	          	<Tab label="website" />
	        	</Tabs>
				<Input placeholder='search'
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
		                  aria-label="search"
		                  onClick={this.handleClickShowPassword}
		               >
		                  <Search/>
		               </IconButton>
						</InputAdornment>
            }/>
			</header>
		)
	}
	handleChange = (e, activeTab) =>{
		this.setState({
			value: activeTab
		})
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