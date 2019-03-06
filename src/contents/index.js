import React from "react";
import {sources} from '../sources'

import styles from './index.module.css';
import Card from './card';
import CardHot from './card_hot'
import Follow from './follow'

class Content extends React.Component {
	constructor(props){
		super(props)
		this.state={
			articles:sources.articles,
		}
	}

	// componentDidMount(){
	// fetch('http://localhost:4000/contents')
	// 	.then(data=>data.json())
	// 	.catch(e=>console.log(e))
	// 	.then(result=>this.setState({
	// 		articles:result
	// 	}))
	// }


	render(){
		return(
		<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.listItem} >推荐</li>
					<li className={styles.listItem} >关注</li>
					<li className={styles.listItem} >热榜</li>
				</ul>

				{/* <Recommend data={this.state.articles}/> */}
				{/* <Hot data={this.state.articles} /> */}
				<Follow title={this.state.articles.follow.titles} img={this.state.articles.follow.imgs} body={this.state.articles.follow.body}/>
		</div>

		
		)
	}
}

// class Recommend extends React.Component{
// 	render(){
// 		const data=this.props.data
// 		if(!data){
// 			return (<div>loading...</div>)
// 		}

// 		return(<div className={styles.content}>
// 			{data.recommend.body.map((val,index)=>(
// 				<Card article={val} img={data.recommend.imgs[index]} title={data.recommend.titles[index]} key={index}/>
// 				))}
// 			</div>)
// 		}
// }


// class Hot extends React.Component{
// 	render(){
// 		const data=this.props.data
// 		if(!data){
// 			return (<div>loading...</div>)
// 		}

// 		return(<div className={styles.content}>
// 			{data.hot.body.map((val,index)=>(
// 				<CardHot body={val} imgs={data.hot.imgs[index]} titles={data.hot.titles[index]} index={index+1} key={index}/>
// 				))}
// 			</div>)
// 		}
// }


export default Content