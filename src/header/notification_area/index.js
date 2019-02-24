import React from 'react';
import styles from './index.module.css'

const InfoLogo = ()=> <svg fill="#8590a6" viewBox="0 0 24 24" width="22" height="22"><path d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"></path></svg>
const MsgLogo = ()=> <svg fill="#8590a6" viewBox="0 0 24 24" width="22" height="22"><path d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z" fillRule="evenodd"></path></svg>


class NotificationArea extends React.Component{
    constructor(props){
        super(props)
        this.handleAvatarClick=this.handleAvatarClick.bind(this)
        this.handleMsgClick=this.handleMsgClick.bind(this)
        this.hideAll=this.hideAll.bind(this)
        this.state={
            userPanelOn:false,
            msgPanelOn:false,
            notificationPanelOn:false
        }
    }

    componentDidMount(){
        document.addEventListener('click',this.hideAll)
    }

    hideAll(){
        this.setState({
            userPanelOn:false,
            msgPanelOn:false,
            notificationPanelOn:false,
        })
    }

    handleAvatarClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            userPanelOn:!this.state.userPanelOn
        })
        
    }

    handleMsgClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            msgPanelOn:!this.state.msgPanelOn
        })
    }

    render(){
        return(
        <div className={styles.wrapper}>
            <button className={styles.icons}><InfoLogo/></button>
            <button className={styles.icons} onClick={this.handleMsgClick}><MsgLogo/></button>
            <button className={styles.avatar} onClick={this.handleAvatarClick}><img src='https://pic2.zhimg.com/b79dbed00a4db0704f52f58db27703d4_is.jpg' alt="user's avatar"/></button>
     
        {/* <UserPanel isOn={this.state.userPanelOn}/>
        <MessagePanel isOn={this.state.msgPanelOn}/> */}
    </div>)
    }
}


export default NotificationArea