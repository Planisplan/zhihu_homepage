import React from 'react';
import sources from '../../sources';
import styles from './hot_search_list.module.css'

// 头部中间搜索框

class HotSearchList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:[],
            isLoaded:false
        }
    }

    // 获取后台数据，用于点击弹出的热搜条目
    componentDidMount(){
		fetch('http://localhost:4000/hotSearch')
		.then(data=>data.json())
		.then(result=>{this.setState({
			data:result,
			isLoaded:true
		})},
		error=>{this.setState({      //获取后台数据失败的情况下，用本地文件的数据
			error,
			isLoaded:true,
			data:sources.hotSearch
		})}
		)
	}



    render(){
        const {error, data, isLoaded} = this.state
        if (error) {
            console.log(error.message + '. Hot search list is rendered using local file.')  //使用本地文件数据时在控制台输出提示
        } else if (!isLoaded) {
            return (<div>Loading...</div>)
        }
        //在父组件SearchBar添加onFocus事件，控制isON状态来显示或隐藏
        return(
            <div className={styles.wrapper} style={{visibility:this.props.isON?'inherit':'collapse'}}> 
            <p className={styles.title}>知乎热搜</p>   
            <ul className={styles.list}>
            {data.map((val,index)=><li key={index} className={styles.listItem}>{val}</li>)}
            </ul>
        </div>
        )
    }
} 

export default HotSearchList
