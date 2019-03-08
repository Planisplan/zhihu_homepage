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
                <div className={styles.userInfo}>
                    <p style={{fontSize: '15px'}}><b>Alain Zhu</b>, Front-End Rookie, Cell:18351133277</p>
                    <p style={{color:'#999999', fontSize:'15px'}}>999 回答 · 999 关注者</p>
                </div>
                <button><span style={{display:'inline-flex', alignItems:'center',height:'32px'}}><svg fill="#ffffff" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M13.491 10.488s-.012-5.387 0-5.998c-.037-1.987-3.035-1.987-2.997 0-.038 1.912 0 5.998 0 5.998H4.499c-1.999.01-1.999 3.009 0 3.009s5.995-.01 5.995-.01v5.999c0 2.019 3.006 2.019 2.997 0-.01-2.019 0-5.998 0-5.998s3.996.009 6.004.009c2.008 0 2.008-3-.01-3.009h-5.994z"></path></svg></span><span style={{display:'inline-flex',height:'32px',alignItems:'center',fontSize:'14px'}}>关注他</span></button>
            </div>
           <h3 className={styles.title}>{this.props.title}</h3>
           <div className={styles.main}>
               <img src={this.props.img} className={styles.img} alt=""/>
               <div className={styles.texts}>{this.textCut(this.props.texts)}<span className={styles.readMore}>阅读全文</span><span style={{display:'inline-flex',alignItems:'center',verticalAlign:'middle'}}><svg fill="#175199" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"></path></svg></span></div>
           </div>
        </div>)
    }
}

