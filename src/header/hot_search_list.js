import React from 'react';
import {sources} from '../source';
import styles from './index.module.css'

class HotSearchList extends React.Component{
  
    render(){
        return(
            <div className={styles.searchList} style={{display:this.props.show=='block'?'flex':'none', transition: '2s'}}>
             <ul>
             <li style={{borderBottom: '1px solid #ebebeb', color:'#8590a6'}}>知乎热搜</li>
            {sources.hotSearch.map((val,index)=><li key={index}>{val}</li>)}
            </ul>
        </div>
        )
    }
} 

export default HotSearchList