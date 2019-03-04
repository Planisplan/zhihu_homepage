import React from "react";

import styles from './index.module.css';
import Card from './card';

class Content extends React.Component {
	constructor(props){
		super(props)
		this.state={
			articles:null,
		}
	}

	componentDidMount(){
	fetch('http://localhost:4000/recommend')
		.then(data=>data.json())
		.catch(e=>console.log(e))
		.then(result=>this.setState({
			articles:result
		}))
	}


	render(){
		return(
		<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.listItem} >推荐</li>
					<li className={styles.listItem} >关注</li>
					<li className={styles.listItem} >热榜</li>
				</ul>

				<Follow data={this.state.articles}/>
		</div>

		
		)
	}
}

class Follow extends React.Component{
	render(){
		if(!this.props.data){
			return (<div>loading...</div>)
		}

		return(<div className={styles.content}>
			{this.props.data.texts.map((val,index)=>(
				<Card article={val} img={this.props.data.imgs[index]} title={this.props.data.titles[index]} key={index}/>
				))}
			</div>)
		}
}

export default Content