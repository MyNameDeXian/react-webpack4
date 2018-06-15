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

class Cards extends Component{
	render(){
		return(
			<div className='cards-list flex-row f-jc-sb f-wrap'>
			{
				cardsData.map((item, key) =>(
					<CardItem />
				))
			}
        	</div>

		)
	}
}

const CardItem = (props) =>(
	<Card className='cards'>
     	<CardMedia
     		className='media'
       	image={ props.img || require('../../images/5.jpg') }
       	disableActionSpacing={true}
     	/>
     	<CardContent>
       	<Typography gutterBottom variant="headline" component="h2">
         	PLAN
       	</Typography>
       	<Typography component="p">
         	Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
         	across all continents except Antarctica
       	</Typography>
     	</CardContent>
     	<CardActions className='flex-row f-jc-end'>
       	<Button size="small" color="primary">
         	Go Plan
       	</Button>
     	</CardActions>
	</Card>
)

export default withRouter(Cards)