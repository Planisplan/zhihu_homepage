import React from 'react';
import userAvatar from './avatar.jpg';
import MessagePanel from './message_panel/message_panel.js';
import styles from './index.module.css';

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

    hideAll(e){
        console.log(e.target)
        if(e.target&&e.target.matches('div.userAvatar')){
            console.log('阻止冒泡了')
            return
        }
        this.setState({
            userPanelOn:false,
            msgPanelOn:false,
            notificationPanelOn:false,
        })
    }

    handleAvatarClick(e){
        console.log('clicked')
        this.setState({
            userPanelOn:true,
        })
        
    }

    handleMsgClick(e){
        this.setState({
            msgPanelOn:true
        })
    }

    render(){
        return(<div className='header-info'>
        <div className="info-logo"><InfoLogo/></div>
        <div className="info-logo" onClick={this.handleMsgClick}><MsgLogo/></div>
        <div className='userAvatar' onClick={this.handleAvatarClick}><img src={userAvatar} alt="user's avatar"/></div>
        <UserPanel isOn={this.state.userPanelOn}/>
        <MessagePanel isOn={this.state.msgPanelOn}/>
    </div>)
    }
}


class UserPanel extends React.Component{
  

    render(){
        return(
            <div className={styles.userPanelWrapper} style={{display:this.props.isOn?'flex':'none'}}>
                    <span className={styles.arrowButton}></span>
                    <div className={styles.userPanel}>
                        <a><svg fill="#8590a6" viewBox="0 0 24 24" width="16" height="16"><path d="M15.417 12.923c-.376.653-.837 1.281-.763 1.863.292 2.273 5.562 1.77 6.78 3.048.566.595.566.664.566 4.164-6.611-.07-13.363 0-20 0 .027-3.5 0-3.478.62-4.164 1.303-1.44 6.581-.715 6.78-3.133.045-.545-.38-1.114-.763-1.778C6.511 9.233 5.697 2 12 2s5.422 7.443 3.417 10.923z" fillRule="evenodd"></path></svg><span style={{marginLeft:'6px'}}>我的主页</span></a>
                        <a><svg fill="#8590a6" viewBox="0 0 24 24" width="16" height="16"><path d="M20.868 17.185a.896.896 0 0 1-.452.137c-.123 0-1.397-.26-1.617-.233-1.354.014-1.78 1.276-1.835 1.742-.055.453 0 .892.191 1.303a.8.8 0 0 1-.068.851C16.224 21.877 14.922 22 14.73 22a.548.548 0 0 1-.356-.151c-.11-.096-.685-1.138-1.069-1.468-1.304-.955-2.247-.329-2.63 0-.398.33-.672.7-.836 1.125a.632.632 0 0 1-.329.37c-1.354.426-2.918-.919-3.014-1.056a.564.564 0 0 1-.123-.356c-.014-.138.383-1.276.342-1.688-.342-1.9-1.836-1.687-2.096-1.673a3.192 3.192 0 0 0-.918.178.873.873 0 0 1-.59-.055c-.887-.462-1.136-2.332-1.109-2.51.055-.315.192-.521.438-.604.425-.164.809-.452 1.151-.85.931-1.262.343-2.25 0-2.634-.342-.356-.726-.645-1.15-.809-.138-.041-.234-.151-.33-.316-.38-1.434.613-2.552.867-2.77.255-.22.6-.055.723 0 .425.164.877.219 1.343.15C6.7 6.636 6.784 5.141 6.81 4.908c.014-.247-.11-1.29-.137-1.4a.488.488 0 0 1 .027-.315C7.317 2.178 9.071 2 9.222 2a.56.56 0 0 1 .439.178c.11.124.63 1.111 1 1.4.4.338 1.583.83 2.59.013.397-.274.959-1.29 1.082-1.413A.55.55 0 0 1 14.717 2c1.56 0 2.329 1.029 2.438 1.22a.458.458 0 0 1 .069.371c-.028.151-.329 1.152-.26 1.605.365 1.537 1.383 1.742 1.89 1.783.493.028 1.644-.356 1.809-.343a.63.63 0 0 1 .424.206c.535.31.85 1.715.905 2.14.027.233-.014.439-.11.562-.11.138-1.165.714-1.48 1.112-.855.982-.342 2.25-.068 2.606.26.37 1.22.905 1.288.96.15.137.26.302.315.494.146 1.413-.89 2.387-1.069 2.47zm-8.905-.535c.644 0 1.246-.123 1.822-.356a4.576 4.576 0 0 0 1.493-1.016 4.694 4.694 0 0 0 1-1.495c.247-.562.357-1.18.357-1.81 0-.659-.11-1.262-.356-1.825a4.79 4.79 0 0 0-1-1.481 4.542 4.542 0 0 0-1.494-1.002 4.796 4.796 0 0 0-3.631 0 4.627 4.627 0 0 0-1.48 1.002c-.424.425-.767.919-1 1.481a4.479 4.479 0 0 0-.37 1.825c0 .644.124 1.248.37 1.81a4.62 4.62 0 0 0 1 1.495c.425.426.918.768 1.48 1.016a4.677 4.677 0 0 0 1.809.356z" fillRule="evenodd"></path></svg><span style={{marginLeft:'6px'}}>设置</span></a>
                        <a><svg fill="#8590a6" viewBox="0 0 24 24" width="16" height="16"><path d="M2 11.999c0-2.756 1.154-5.417 3.167-7.3a1.266 1.266 0 0 1 1.73 1.847 7.396 7.396 0 0 0-2.367 5.453c0 4.119 3.35 7.47 7.47 7.47 4.119 0 7.47-3.351 7.47-7.47a7.41 7.41 0 0 0-2.279-5.37 1.266 1.266 0 0 1 1.76-1.819A9.923 9.923 0 0 1 22 12c0 5.513-4.486 10-10 10s-10-4.487-10-10zm8.699-.482V3.26a1.26 1.26 0 1 1 2.52 0v8.257a1.26 1.26 0 1 1-2.52 0z" fillRule="evenodd"></path></svg><span style={{marginLeft:'6px'}}>退出</span></a>
                    </div>
            </div>)     
    }
}

export default NotificationArea