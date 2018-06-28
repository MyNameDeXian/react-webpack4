import React from 'react'
import './title-tip.scss'

export default (props) =>(
	<div className='title-tip flex-col f-center'>
		<h3 className='ch-title'>计 划</h3>
		<div className='modle flex-row f-ai-c'>
			<div className='line f-1'></div>
			<span className='us-title'>PLAN</span>
			<div className='line f-1'></div>
		</div>
		<span className='bottom-line'></span>
	</div>
)