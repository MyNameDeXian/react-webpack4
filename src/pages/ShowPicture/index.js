import React from 'react'
import './show-picture.scss'
import Header from 'components/Header'

export default (props) =>(
	<div className='images flex-row f-ai-c f-jc-sa f-wrap'>
		{ makeImage(28) }
	</div>
)

function imgRandom(imgs){
	let arr = [];
	for(let i=0; i<imgs; i++){
		let num = Math.floor(Math.random()*imgs)
		if(arr.indexOf(num) === -1 ) {
			arr.push(num)
		} else {
			i--
		}
	}
	return arr
}

function makeImage(images){
	let result = [];
	let arr = imgRandom(images)
	for(let i=0; i<arr.length; i++){
		let url = arr[i] + '.jpg';
		try {
			var img = require('images/'+url);
			result.push(image(img, i))
		} catch(err) {
		   console.log(i+'.jpg, 不存在')
		}
	}
	return result;
}

function image(img, i){
	return(
		<img key={i} src={img} alt=""/>
	)
}
