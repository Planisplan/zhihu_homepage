import React, {Component} from 'react';
import Card from './card.js';
import {sources} from './source.js';
import styles from './content.module.css'

const Concern = ()=>(<div className={styles.content}>
	{sources.articles.map((val,index)=>(
		<Card article={val} img={sources.imgs[index]} title={sources.titles[index]} key={index}/>
	))}
</div>)

export default Concern