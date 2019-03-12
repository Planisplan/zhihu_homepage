import React from "react"
import styles from './index.module.css'
import Hot from './hot'
import Follow from './follow'
import Featured from './featured'
import Tags from './tags'


class Main extends React.Component {
	render(){
		return(
		<div className={styles.wrapper}>
				<Tags showFeatured={this.props.showFeatured} showFollow={this.props.showFollow} showHot={this.props.showHot}/>
				<Hot show={this.props.hot}/>
				<Follow show={this.props.follow}/>
				<Featured show={this.props.featured}/>
		</div>
		)
	}
}

export default Main