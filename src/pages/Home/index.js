import React, { Component } from 'react';
import './home.scss'
import { tabsData } from './homeData'
import Header from 'components/Header'
import Banner from 'components/Banner'
import Cards from 'components/Cards'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className='home-page'>
        <Header tabsData={tabsData}/>
        <Banner />
        <Cards />
      </div>
    )
  }
  
}

export default Home
