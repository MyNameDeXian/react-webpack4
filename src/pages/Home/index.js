import React, { Component } from 'react';
import './home.scss'
import { Button } from 'antd'

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <Button onClick={this.clickBtn}>
        To Address
      </Button>
    )
  }
  clickBtn = () =>{
    let { history } = this.props;
    history.push('/address')
  }
}

export default Home