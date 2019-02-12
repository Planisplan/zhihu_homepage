import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Concern from './concern';
import Recommend from './recommend';
import Hot from './hot';
import styles from './index.module.css'

const ContentNav = ()=>(<Router><div className={styles.nav}>
	<ul className={styles.list}>
		<li className={styles.listItem}><Link to='/'>推荐</Link></li>
		<li className={styles.listItem}><Link to='/concern'>关注</Link></li>
		<li className={styles.listItem}><Link to='/hot'>热榜</Link></li>
	</ul>

	<Route exact path='/' component={Recommend}/>
	<Route exact path='/concern' component={Concern}/>
	<Route exact path='/hot' component={Hot}/>
	</div>
</Router>)

export default ContentNav