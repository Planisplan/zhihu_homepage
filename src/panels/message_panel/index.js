import React from 'react';
import styles from './index.module.css';
import {sources} from '../../sources.js'

class MessagePanel extends React.Component{
    render(){
        return(
            <div className={styles.wrapper} style={{display:this.props.isON?'flex':'none'}} onClick={(e)=>e.nativeEvent.stopImmediatePropagation()}>
            <span className={styles.arrowButton}></span>
            
            <div className={styles.messagePanel}>
                <p className={styles.title}>我的私信</p>
                <ul className={styles.messageList}>
                    {sources.messageList.contents.map((v,i)=>(<li className={styles.listItem} key={i}>
                        <img src={sources.messageList.icons[i]} className={styles.messageIcon}/>
                        <div className={styles.messageBox}>
                        <h5>{sources.messageList.titles[i]}</h5>
                        <p className={styles.messageContent}>{v}</p>
                        </div>
                    </li>))}
                </ul>
                <div className={styles.bottomButton}><span className={styles.bottomLink}><svg fill="#828ca2" viewBox="0 0 24 24" width="16" height="16"><path d="M4.076 16.966a4.19 4.19 0 0 1 1.05-1.76l8.568-8.569a.524.524 0 0 1 .741 0l2.928 2.927a.524.524 0 0 1 0 .74l-8.568 8.57c-.49.49-1.096.852-1.761 1.051l-3.528 1.058a.394.394 0 0 1-.49-.488l1.06-3.53zM20.558 4.83c.59.59.59 1.546 0 2.136l-1.693 1.692a.503.503 0 0 1-.712 0l-2.812-2.812a.504.504 0 0 1 0-.712l1.693-1.693a1.51 1.51 0 0 1 2.135 0l1.389 1.389z"></path></svg>写新私信</span><span className={styles.bottomLink}>查看全部私信</span></div>
            </div>
        </div>  
        )
    }
}

export default MessagePanel