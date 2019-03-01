import React from "react";

import {sources} from '../sources';
import styles from './index.module.css';
import Card from './card';

class Content extends React.Component {
	render(){
		return(
		<div className={styles.wrapper}>
				<ul className={styles.list}>
					<li className={styles.listItem} onClick={()=>{ajax('get','http://localhost:4000/')}}>推荐</li>
					<li className={styles.listItem} onClick={()=>{ajax('get','http://localhost:4000/follow')}}>关注</li>
					<li className={styles.listItem} onClick={()=>{ajax('get','http://localhost:4000/recommend')}}>热榜</li>
				</ul>
				<Recommend/>
		</div>
		)
	}
}

function ajax (method,url,async=true){
	const xhr = new XMLHttpRequest();
	xhr.open(method,url,async)
	xhr.send(null)

	xhr.onload=success

	function success(){
		if (xhr.status === 200 || xhr.status === 304) {
			console.log(xhr.responseText)
		} else {
			console.log('error')
		}
	}
}

const Follow = ()=>(<div className={styles.content}>
	{sources.articles.texts.map((val,index)=>(
		<Card article={val} img={sources.articles.imgs[index]} title={sources.articles.titles[index]} key={index}/>
	))}
</div>)

const Hot = ()=>(<div className={styles.content}>
	{sources.articles.texts.map((val,index)=>(
		<Card article={val} img={sources.articles.imgs[index]} title={sources.articles.titles[index]} key={index}/>
	))}
</div>)

const Recommend = ()=>(<div className={styles.content}>
	{sources.articles.texts.map((val,index)=>(
		<Card article={val} img={sources.articles.imgs[index]} title={sources.articles.titles[index]} key={index}/>
	))}
</div>)

export default Content
export {Follow, Hot, Recommend}