import React, {Component} from 'react'
import Card from './card'
import sources from '../../sources';

class Follow extends Component {
    constructor(props){
        super(props)
        this.state={
            error:null,
            isLoaded:false,
            data:{}
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:4000/follow')
        .then(data=>data.json())
        .then(result=>{this.setState({
            isLoaded:true,
            data:result
        })},
        error=>{this.setState({
            isLoaded:true,
            error,
            data:sources.articles.follow
        })}
        )
    }

    render(){
        const {data, error, isLoaded} = this.state
        if (error) {
            console.log(error.message + '\n' + 'Data is from local files')
        } else if (!isLoaded) {
            return (<div>Loading...</div>)
        }
        return(
        <div style={{display:this.props.show?'block':'none'}}>
            {data.body.map((v,i)=> <Card title={data.titles[i]} texts={v} img={data.imgs[i]} key={i} />)}
        </div>)
    }
}


export default Follow