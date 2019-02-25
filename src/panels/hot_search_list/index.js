import React from 'react';
import {sources} from '../../sources';
import styles from './index.module.css'

class HotSearchList extends React.Component{
    render(){
        return(
            <div className={styles.wrapper} style={{visibility:this.props.isON?'inherit':'collapse'}}>
            <p className={styles.title}>知乎热搜</p>   
            <ul className={styles.list}>
            {sources.hotSearch.map((val,index)=><li key={index} data-index={index} className={styles.listItem}>{val}</li>)}
            </ul>
        </div>
        )
    }
} 

export default HotSearchList
