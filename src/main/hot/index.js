import React from 'react'
import Card from './card'
import sources from '../../sources';


class Hot extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:{},
            error:null,
            isLoaded:false
        }
    }

    componentDidMount(){
        fetch('http://localhost:4000/hot')
        .then(data=>data.json())
        .then(result=>{this.setState({
            data:result,
            isLoaded:true
        })},
        error => {this.setState({
            isLoaded:true,
            error,
            data:sources.articles.hot
        })})
    }

	render(){
        const {data, error, isLoaded} = this.state
        if (error) {
            console.log(error.message + '\n' + 'Data is from local files')
        } else if(!isLoaded) {
            return (<div>Loading...</div>)
        }
            return(
            <div style={{display:this.props.show?'block':'none'}}>
                {data.body.map((val,index)=>(
                    <Card body={val} imgs={data.imgs[index]} titles={data.titles[index]} index={index+1} key={index}/>
                    ))}
            </div>)
    }
}

export default Hot