import React from 'react'
import styles from './msg_panel.module.css'
import sources from '../sources.js'


// 私信按钮点击弹出panel
class MessagePanel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{},
            isLoaded:false
        }
    }

    //fetch获取后台数据，失败的话就从用本地文件的数据渲染
    componentDidMount(){
        fetch('http://localhost:4000/msglist')
        .then(data=>data.json())
        .then(result=>{
            this.setState({
                data:result,
                isLoaded:true,
            })
        }, error=>{
            this.setState({
                error,
                data:sources.messageList,
                isLoaded:true,
            })
        })
    }


    render(){
        const {data, error, isLoaded} = this.state
        if (error){
            console.log(error.message + '. Message List is rendered using local file.')
        } else if (!isLoaded){
            return (<div>Loading...</div>)
        }
        return(
            <div className={styles.wrapper} style={{display:this.props.isON?'flex':'none'}} onClick={(e)=>e.nativeEvent.stopImmediatePropagation()}>   {/*阻止panel的点击事件冒泡到document*/}
            <span className={styles.arrowButton}></span>
            
            <div className={styles.messagePanel}>
                <p className={styles.title}>我的私信</p>
                <ul className={styles.messageList}>
                    {data.contents.map((v,i)=>(<li className={styles.listItem} key={i}>
                        <img src={data.icons[i]} className={styles.messageIcon}/>
                        <div className={styles.messageBox}>
                        <h5>{data.titles[i]}</h5>
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