import React from 'react'
import styles from './card.module.css'

// 推荐内容页的卡片组件
class Card extends React.Component {
	constructor(props){
		super(props)
		this.textCut=this.textCut.bind(this)
	}

	// 显示字数不超过100个
	textCut(text){
		return (text.substring(0, 99) + '...')
	}

	render(){
		return(
			<div className={styles.wrapper}>
				<h3 className={styles.title}>{this.props.title}</h3>
				<div className={styles.content}>
					<img src={this.props.img} className={styles.imgs} alt='pic'/>
					<p className={styles.p}>{this.textCut(this.props.article)}<span className={styles.readMore}>阅读全文</span><span style={{display:'inline-flex',alignItems:'center',verticalAlign:'bottom'}}><svg fill="#175199" viewBox="0 0 24 24" width="24" height="24"><path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"></path></svg></span></p>  {/*阅读全文按钮*/}
				</div>
				<div className={styles.bottom}>
					<button className={styles.approvalBtn}><svg fill="#0084ff" viewBox="0 0 24 24" width="10" height="10"><path d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z" fillRule="evenodd"></path></svg><span style={{fontSize: '15px'}}> 赞同 10</span></button>
					<button className={styles.opposeBtn}><svg fill="currentColor" viewBox="0 0 24 24" width="10" height="10"><path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z" fillRule="evenodd"></path></svg></button>
					<button className={styles.commentBtn}><svg style={{verticalAlign:'sub'}} fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fillRule="evenodd"></path></svg><span style={{fontSize:'14px'}}> 评论 10</span></button>
					<button className={styles.shareBtn}><svg style={{verticalAlign:'sub'}} fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fillRule="evenodd"></path></svg><span style={{fontSize: '14px'}}>分享</span></button>
					<button className={styles.shareBtn}><svg style={{verticalAlign:'sub'}} fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fillRule="evenodd"></path></svg><span style={{fontSize: '14px'}}>收藏</span></button>
					<button className={styles.shareBtn}><svg style={{verticalAlign:'sub'}} fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fillRule="evenodd"></path></svg>感谢</button>
					<button className={styles.shareBtn}><svg style={{verticalAlign:'sub'}} fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fillRule="evenodd"></path></svg></button>
				</div>
			</div>)
	}
}


export default Card