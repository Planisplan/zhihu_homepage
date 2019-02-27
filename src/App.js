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
    document.addEventListener('scroll', this.handleScroll)
  }

 handleScroll(e){
   console.log(document.documentElement.scrollTop)
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
