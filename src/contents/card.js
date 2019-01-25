import React, {Component} from 'react';
import {sources} from './source.js'

const styles = {
	article:{
		height: '160px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		// border: '1px solid red',
		backgroundColor:'white',
		paddingTop: '20px'
	},

	imgs: {
		width:'192px',
		height:'105px',
		// border: '1px solid blue',
		borderRadius:'5px',
		float: 'left',
		marginLeft:'20px'
	},

	p:{
		height: '120px',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		// border: '1px solid red',
		float: 'left',
		width:'460px',
		marginLeft: '20px'
	},

	title:{
		// border: '1px solid green',
		height: '35px',
		marginLeft:'20px',
	},

	bottom:{
		backgroundColor:'white',
		borderBottom: '1px solid #f1f3f7' ,
		marginLeft: '20px',
	}
}

class Card extends Component{
	constructor (props) {
		super(props)
		this.textCut = this.textCut.bind(this)
	}

	textCut(text){
		return (text.substring(0, 99) + '...')
	}



	render(){
		return(
	<div>
		<div style={styles.article}>
			<h3 style={styles.title}>{this.props.title}</h3>
			<img src={this.props.img} style={styles.imgs}/>
			<p style={styles.p}>{this.textCut(this.props.article)}</p>
		</div>
		<div style={styles.bottom}>
			<button>赞同</button>
			<button>反对</button>
			<button>评论</button>
			<button>分享</button>
			<button>收藏</button>
			<button>感谢</button>
			<button>···</button>
		</div>
	</div>)
	}
}


export default Card;