import React from 'react'
import { Button, Card } from 'antd'
import test from 'modules/test'

const gridStyle = {
  width: '20%',
  textAlign: 'center',
};
export default (props) => {
	console.log(props);
	return (
		<Card title="Card Title">
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	    <Card.Grid style={gridStyle}>Content</Card.Grid>
	  </Card>
	)
}