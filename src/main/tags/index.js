import React from 'react'
import styles from './index.module.css'

// 内容区域上部导航标签组件
class Tags extends React.Component{
    render(){
        return(
        <ul className={styles.list}>
            <li className={styles.listItem} onClick={this.props.showFeatured}>推荐</li>
            <li className={styles.listItem} onClick={this.props.showFollow}>关注</li>
            <li className={styles.listItem} onClick={this.props.showHot}>热榜</li>
        </ul>)
    }
}

export default Tags