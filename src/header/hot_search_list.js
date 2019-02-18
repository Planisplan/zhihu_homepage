import React from 'react';
import {sources} from '../source';
import styles from './index.module.css'

class HotSearchList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listItemIsFocused:null
        }
        // this.handleMouseOver=this.handleMouseOver.bind(this);
        // this.handleMouseOut=this.handleMouseOut.bind(this)
    }

    handleMouseOver(event,index){
        this.setState({
            listItemIsFocused:index,
        })
    }

    handleMouseOut(){
        this.setState({
            listItemIsFocused:null,
        })
    }
  
  
    render(){
        return(
            // style={{visibility:this.props.status?'inherit':'collapse'}}
            <div className={styles.searchList}>   
             <ul>
             <li style={{borderBottom: '1px solid #ebebeb', color:'#8590a6'}}>知乎热搜</li>
            {sources.hotSearch.map((val,index)=><li key={index} onMouseOver={this.handleMouseOver.bind(this,index)} onMouseOut={console.log(111)} style={{backgroundColor:this.state.listItemIsFocused==index?'#f6f6f6':'none'}}>{val}</li>)}
            </ul>
        </div>
        )
    }
} 

export default HotSearchList
