import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Contents from './contents';
import SideBar from './side-bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contents />
        <SideBar />
      </div>
    );
  }
}

export default App;
