import React, { Component } from 'react';
import './home.scss'
import { Button } from 'antd'
import Header from 'components/Header'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <div className='home-page'>
        <Header history={this.props.history}/>
        <div className='top-banner'></div>
      </div>
    )
  }
  
}

export default Home