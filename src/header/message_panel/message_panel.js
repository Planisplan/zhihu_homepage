import React from 'react';
import styles from './message_panel.module.css';

const MessagePanel = ()=>(<div className={styles.wrapper}>
    <span className={styles.arrowButton}></span>
    <div className={styles.messagePanel}>
    <p className={styles.title}>我的私信</p>
    <ul className={styles.messageList}>
        <li>
	        <img/>
	        <div className={styles.message}>
	        	<p className={styles.messageTitle}>标题</p>
	        	<p className={styles.messageBrief}>内容</p>
	        </div>
        </li>
    </ul>
    <div className={styles.bottomButton}><span>写新私信</span><span>查看全部私信</span></div>
    </div>
</div>)

export default MessagePanel