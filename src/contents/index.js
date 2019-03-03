import React from "react";

import {sources} from '../sources';
import styles from './index.module.css';
import Card from './card';

class Content extends React.Component {
	constructor(props){
		super(props)
		this.state={
			sources:'',
			recommend:'',
		}
	}

	componentDidMount(){
		const xhr = new XMLHttpRequest();
		xhr.open('get','http://localhost:4000/recommend',true)
		xhr.send(null)
		xhr.onload=()=>{
			if(xhr.status===200||xhr.status===304){
				this.setState({
					sources:JSON.parse(xhr.responseText)
				})
			} else {
				console.log('ajax error')
			}
		}
	}

	render(){
		return(
		<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.listItem} onClick={()=>{this.setState({recommend:this.state.sources})}}>推荐</li>
					<li className={styles.listItem} >关注</li>
					<li className={styles.listItem} >热榜</li>
				</ul>

				<Follow sources={this.state.recommend}/>
		</div>

		
		)
	}
}

class Follow extends React.Component{
	render(){
		if(this.props.sources===''){
			return(<div>loading...</div>)
		} 

		return(<div className={styles.content}>
			{this.props.sources.texts.map((val,index)=>(
				<Card article={val} img={this.props.sources.imgs[index]} title={this.props.sources.titles[index]} key={index}/>
			))}
		</div>)
	}
}

export default Content