import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Contents from './contents';
import SideBar from './side-bar';
import NewsPanel from './panels/news_panel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Contents />
        <SideBar />
        <NewsPanel/>
      </div>
    );
  }
}

export default App;
