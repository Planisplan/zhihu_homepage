import React from 'react';
import {sources} from '../../sources';
import styles from './index.module.css'

class HotSearchList extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         focusedIndex:null
    //     }
    //     this.handleMouseOver=this.handleMouseOver.bind(this);
    //     this.handleMouseOut=this.handleMouseOut.bind(this)
    // }

    // handleMouseOver(event){
    //     this.setState({
    //         focusedIndex:Number(event.target.getAttribute('data-index'))
    //     })
    // }

    // handleMouseOut(){
    //     this.setState({
    //         focusedIndex:null,
    //     })
    // }
  
  
    render(){
        return(
            <div className={styles.wrapper} style={{visibility:this.props.status?'inherit':'collapse'}}>
            <p className={styles.title}>知乎热搜</p>   
            <ul className={styles.list}>
            {sources.hotSearch.map((val,index)=><li key={index} data-index={index} className={styles.listItem}>{val}</li>)}
            </ul>
        </div>
        )
    }
} 

export default HotSearchList
