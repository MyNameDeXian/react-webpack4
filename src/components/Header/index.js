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
import { withRouter } from 'react-router'

/* Header 
	接收参数  	type    	content
	tabsData  	Array   	String
	activeTab 	Number 	默认 false
	onClick		Event		第一个参数传激活的 tab key
*/
class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabsData: [{label: 'go home', path: ''}]
		}
	}
	componentWillMount(){
		let { tabsData, activeTab } = this.props;
		tabsData = tabsData || this.state.tabsData;
		activeTab = activeTab != null && activeTab;
		this.setState({ tabsData, activeTab })
	}
	render(){
		let { activeTab, tabsData } = this.state;
		let { children } = this.props;
		return(
			<header className='header-comp flex-row f-ai-c'>
				<IconButton onClick={this.handleChange}>
					<Avatar>
						<Home/>
					</Avatar>
				</IconButton>
				<Tabs
					className='f-1'
	          	value={activeTab}
	          	onChange={this.handleChange}
	          	indicatorColor="primary"
	          	textColor="primary"
	          	scrollable 
	          	scrollButtons="auto">
          	{
					tabsData.map((item, key) =>(
						<Tab key={key} label={item.label}/>
					))
          	}
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
		let { onClick, match, history } = this.props;
		let { tabsData } = this.state;
		let path = '/'
		console.log(activeTab)
		if( activeTab == null ){
			activeTab = false
		} else {
			path += tabsData[activeTab].path;
		}
		if(match.path !== path){
			history.push(path);
		}
		onClick && onClick(activeTab);
		this.setState({
			activeTab 
		})
	}
}

export default withRouter(Header)