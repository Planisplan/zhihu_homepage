import React, {Component} from 'react'
import styles from './card.module.css'

export default class Card extends Component{
    constructor(props){
        super(props)
        this.textCut=this.textCut.bind(this)
    }

    textCut(text){
        return (text.length<100 ? text : text.substr(0, 99) + '...')
    }

    render(){
        return(<div className={styles.wrapper}>
            <div className={styles.header}>
                <img src='https://pic2.zhimg.com/b79dbed00a4db0704f52f58db27703d4_is.jpg' alt="avatar" className={styles.avatar}/>
                <div>
                    <p><b>Alain Zhu</b>, Front-end Rookie, Mail:zhuliangqi@live.com, Cell:18351133277</p>
                    <p>999回答 · 999关注</p>
                </div>
                <button>+ 关注他</button>
            </div>
           <h3 className={styles.title}>{this.props.title}</h3>
           <div className={styles.main}>
               <img src={this.props.img} className={styles.img} alt=""/>
               <div className={styles.texts}>{this.textCut(this.props.texts)}</div>
           </div>
        </div>)
    }
}

