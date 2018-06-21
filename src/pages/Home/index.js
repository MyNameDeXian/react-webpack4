import React, { Component } from 'react';
import './home.scss'
import { tabsData } from './homeData'
import Header from 'components/Header'
import Banner from 'components/Banner'
import Cards from 'components/Cards'

class Home extends Component{
  render(){
    return(
      <div className='home-page'>
        <Header tabsData={tabsData}/>
        <Banner />
        { this.props.children }
      </div>
    )
  }
  
}

export default Home
