import React from 'react'
import SearchBar from './search_bar'
import NotificationArea from './notifications'
import styles from './index.module.css'
import Tags from '../main/tags'
import NewsPanel from './news_panel';
import MessagePanel from './msg_panel';
import UserPanel from './user_panel'

// 知乎logo和放大镜图标
const Logo = ()=> <svg viewBox="0 0 200 91" style={{height:'30px', width:'64px', fill:'#0084FF'}} width="64" height="30" aria-hidden="true"><title></title><g><path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fillRule="evenodd"></path></g></svg>
const SearchButton = ()=> <span style={{display:'flex',alignItem:'center',position:'relative',left:-28,zIndex:51}}>​<svg fill="#8590a6" viewBox="0 0 24 24" width="18" height="18"><path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fillRule="evenodd"></path></svg></span>


// 整个头部组件
class Header extends React.Component{
	constructor(props){
        super(props)
        this.handleAvatarClick=this.handleAvatarClick.bind(this)   //控制点击用户头像弹出panel
        this.handleMsgClick=this.handleMsgClick.bind(this)          //控制点击私信图标,弹出panel
        this.handleNewsClick=this.handleNewsClick.bind(this)        //控制点击news图标,弹出panel
        this.hideAll=this.hideAll.bind(this)                        //点击空白区域,隐藏全部panel
        this.state={
            userPanelON:false,
            msgPanelON:false,
            newsPanelON:false
        }
    }

    //点击空白区域,隐藏全部panel
    componentDidMount(){
        document.addEventListener('click',this.hideAll)
    }

    hideAll(){
        this.setState({
            userPanelON:false,
            msgPanelON:false,
            newsPanelON:false,
        })
    }

    //控制点击news图标,弹出panel
    handleNewsClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            newsPanelON:!this.state.userPanelON,
            userPanelON:false,
            msgPanelON:false,
        })

	}
	
	//控制点击用户头像弹出panel  
    handleAvatarClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            userPanelON:!this.state.userPanelON,
            msgPanelON:false,
            newsPanelON:false,
        })
        
    }

    //控制点击私信图标,弹出panel
    handleMsgClick(e){
        e.nativeEvent.stopImmediatePropagation()
        this.setState({
            msgPanelON:!this.state.msgPanelON,
            userPanelON:false,
            newsPanelON:false,
        })
    }

	render(){
		return(
			<div className={styles.wrapper}>
                {/* 默认头部组建 */}
				<div className={styles.header} style={{transform:this.props.showHidden?'translateY(-52px)':''}}>
					<div className={styles.logo}><a href=''><Logo/></a></div>
					<div className={styles.nav}>
						<a href=''>首页</a>
						<a href=''>发现</a>
						<a href=''>话题</a>
					</div>
					<SearchBar />
					<NotificationArea handleNewsClick={this.handleNewsClick} handleMsgClick={this.handleMsgClick} handleAvatarClick={this.handleAvatarClick}/>
				</div>
			
                {/* 隐藏头部组建,滚轮向下滚动后显示,向上滚动则隐藏 */}
				<div className={styles.hiddenHeader} style={{transform:this.props.showHidden?'translateY(-52px)':''}}>
					<div className={styles.logo}><a href=''><Logo/></a></div>
					<Tags showFeatured={this.props.showFeatured} showFollow={this.props.showFollow} showHot={this.props.showHot}/>
					<form className={styles.form}>
						<input type='text' className={styles.searchBar}/>
						<SearchButton />
						<input type='submit' value='提问' className={styles.askButton2}/>
					</form>
				</div>
				
                {/* 3个panel组件 */}
				<NewsPanel isON={this.state.newsPanelON}/>
				<MessagePanel isON={this.state.msgPanelON} />
				<UserPanel isON={this.state.userPanelON}/>
			</div>)
	}

}	
export default Header
