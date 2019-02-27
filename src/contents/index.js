import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {sources} from '../sources';
import styles from './index.module.css';
import Card from './card';

class Content extends React.Component {
	render(){
		return(
			<Router><div className={styles.nav}>
				<ul className={styles.list}>
					<li className={styles.listItem}><Link to='/'>推荐</Link></li>
					<li className={styles.listItem}><Link to='/Follow'>关注</Link></li>
					<li className={styles.listItem}><Link to='/hot'>热榜</Link></li>
				</ul>

			<Route exact path='/' component={Recommend}/>
			<Route exact path='/Follow' component={Follow}/>
			<Route exact path='/hot' component={Hot}/>
			</div>
		</Router>

		)
	}
}

const Follow = ()=>(<div className={styles.content}>
	{sources.articles.map((val,index)=>(
		<Card article={val} img={sources.imgs[index]} title={sources.titles[index]} key={index}/>
	))}
</div>)

const Hot = ()=>(<div className={styles.content}>
	{sources.articles.map((val,index)=>(
		<Card article={val} img={sources.imgs[index]} title={sources.titles[index]} key={index}/>
	))}
</div>)

const Recommend = ()=>(<div className={styles.content}>
	{sources.articles.map((val,index)=>(
		<Card article={val} img={sources.imgs[index]} title={sources.titles[index]} key={index}/>
	))}
</div>)

export default Content
export {Follow, Hot, Recommend}