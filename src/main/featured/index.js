import React, {Component} from 'react'
import sources from '../../sources'
import Card from './card'

// 整个推荐页面组件，用card组件根据数据内容自动生成
class Featured extends Component{
	constructor (props) {
		super(props)
		this.state={
			data:{},
			isLoaded:false,
			error:null
		}
	}

	// 获取后台数据，失败的话用本地数据
	componentDidMount(){
		fetch('http://localhost:4000/featured')
		.then(data=>data.json())
		.then(result=>{this.setState({
			data:result,
			isLoaded:true
		})},
		error=>{this.setState({
			error,
			isLoaded:true,
			data:sources.articles.featured
		})}
		)
	}

	render(){
		const {error, isLoaded, data} = this.state
		if (error) {
			console.log(error.message + '. Featured content is rendered using local file.')
		} else if (!isLoaded) {
			return(<div>Loading...</div>)
		} 
		return(
			<div style={{display:this.props.show?'block':'none'}}>
				{data.body.map((val,index)=>(
				<Card article={val} img={data.imgs[index]} title={data.titles[index]} key={index}/>
					))}
			</div>)
    }
}

export default Featured

