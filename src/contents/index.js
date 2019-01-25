import React, {Component} from 'react';
import Card from './card.js';
import {sources} from './source.js';

class Contents extends Component {
	render(){
		let arr = [];
		sources.articles.forEach((val,index)=> {
			arr.push(<Card article={val} img={sources.imgs[index]} title={sources.titles[index]} key={index}/>)
		})

		return(
		<div className='contents'>
			{arr}
		</div>
		)
	console.log({arr})
	}
};



export default Contents