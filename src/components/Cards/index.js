import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './card.scss'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import cardsData from './cardsData'

const CardItem = (props) =>(
	<Card className='cards'>
     	<CardMedia
     		className='media'
       	image={ props.img || require('../../images/5.jpg') }
     	/>
     	<CardContent>
       	<Typography gutterBottom variant="headline" component="h2">
         	PLAN
       	</Typography>
       	<Typography component="p">
         	{ props.content }
       	</Typography>
     	</CardContent>
     	<CardActions className='flex-row f-jc-end'>
       	<Button size="small" color="primary">
         	Go Plan
       	</Button>
     	</CardActions>
	</Card>
)

class Cards extends Component{
   render(){
      return(
         <div className='cards-list flex-row f-jc-sa f-wrap'>
         {
            cardsData.map((item, key) =>(
               <CardItem key={key} content={item.content}/>
            ))
         }
         </div>

      )
   }
}


export default withRouter(Cards)