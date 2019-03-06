import React, {Component} from 'react'
import Card from './card'

export default class Follow extends Component {
    render(){
        return(<div>
            {this.props.body.map((v,i)=> <Card title={this.props.title[i]} texts={v} img={this.props.img[i]} key={i} />)}
        </div>)
    }
}