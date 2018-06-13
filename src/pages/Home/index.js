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
        <Header/>
        <div className='top-banner'></div>
        <Button onClick={this.clickBtn}>
          To Address
        </Button>
      </div>
    )
  }
  clickBtn = () =>{
    let { history } = this.props;
    history.push('/address')
  }
}

export default Home