import React from "react"
import styles from './index.module.css'
import Hot from './hot'
import Follow from './follow'
import Featured from './featured'
import Tags from './tags'


class Main extends React.Component {
	constructor(props){
		super(props)
		this.state={
			featured:true,
			follow:false,
			hot:false
		}
		this.showFeatured=this.showFeatured.bind(this)
		this.showFollow=this.showFollow.bind(this)
		this.showHot=this.showHot.bind(this)
	}

	showFeatured(){
		this.setState({
			featured:true,
			follow:false,
			hot:false
		})
	}

	showHot(){
		this.setState({
			featured:false,
			follow:false,
			hot:true
		})
	}

	showFollow(){
		this.setState({
			featured:false,
			follow:true,
			hot:false
		})
	}


	render(){
		return(
		<div className={styles.wrapper}>
				<Tags showFeatured={this.showFeatured} showFollow={this.showFollow} showHot={this.showHot}/>
				<Hot show={this.state.hot}/>
				<Follow show={this.state.follow}/>
				<Featured show={this.state.featured}/>
		</div>

		
		)
	}
}

export default Main