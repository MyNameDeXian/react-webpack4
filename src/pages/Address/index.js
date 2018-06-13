import React from 'react'
import urls from './urls'

export default () => (
	<div>
		{
			urls.map((item, key) =>{
				item = item.split('--')
				return(
					<a href={item[1]} key={key} target='_blank'>{item[0]}<br/></a>
				)
			})
		}
	</div>
)