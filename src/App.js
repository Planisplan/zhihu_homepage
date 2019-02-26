import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Contents from './contents';
import SideBar from './side-bar';

class App extends Component {
  constructor(props){
    super(props)
    this.handleScroll=this.handleScroll.bind(this)
    this.state={
      scrollDown:null
    }
  }

  componentDidMount(){
    document.addEventListener('wheel', this.handleScroll)
  }

 handleScroll(e){
    if(e.deltaY>0){
      this.setState({
        scrollDown:true
      })
    }else if(e.deltaY<0){
      this.setState({
        scrollDown:false
      })
    }
 }

  render() {
    return (
      <div className="App">
        <Header scrollDown={this.state.scrollDown}/>
        <Contents />
        <SideBar />
      </div>
    );
  }
}

export default App;
