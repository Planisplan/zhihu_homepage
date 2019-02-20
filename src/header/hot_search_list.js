import React from 'react';
import {sources} from '../sources';
import styles from './index.module.css'

class HotSearchList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            focusedIndex:null
        }
        this.handleMouseOver=this.handleMouseOver.bind(this);
        this.handleMouseOut=this.handleMouseOut.bind(this)
    }

    handleMouseOver(event){
        this.setState({
            focusedIndex:Number(event.target.getAttribute('data-index'))
        })
    }

    handleMouseOut(){
        this.setState({
            focusedIndex:null,
        })
    }
  
  
    render(){
        return(
            <div className={styles.searchList} style={{visibility:this.props.status?'inherit':'collapse'}}>
            <p style={{borderBottom: '1px solid #ebebeb', color:'#8590a6'}}>知乎热搜</p>   
            <ul onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
            {sources.hotSearch.map((val,index)=><li key={index} data-index={index} style={{backgroundColor:this.state.focusedIndex==index?'#f6f6f6':''}}>{val}</li>)}
            </ul>
        </div>
        )
    }
} 

export default HotSearchList
