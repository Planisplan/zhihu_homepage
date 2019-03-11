import React, {Component} from 'react'
import sources from '../../sources'
import Card from './card'

class Featured extends Component{
	constructor (props) {
		super(props)
		this.state={
			data:{},
			isLoaded:false,
			error:null
		}
	}

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
			console.log(error.message + '\n' + 'Data is from local files')
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

