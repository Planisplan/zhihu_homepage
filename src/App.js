import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './header';
import Main from './main';
import Aside from './aside';

class App extends Component {
  constructor(props){
    super(props)
    this.handleScroll=this.handleScroll.bind(this)  //监听页面滚动事件
    this.showFeatured=this.showFeatured.bind(this)  //显示推荐内容
    this.showFollow=this.showFollow.bind(this)      //显示关注内容
    this.showHot=this.showHot.bind(this)            //显示热榜
    this.scrollToTop=this.scrollToTop.bind(this)    //回到顶部

    this.state={
      featured:true,            //推荐内容显示开关
      follow:false,             //关注内容显示开关
      hot:false,                //热榜内容显示开关
      hiddenHeader:false,       //隐藏header显示开关
      turnFixed:false,          //侧边栏滚动固定开关
      cornerUp:false,           //右下角按钮上下移动开关
      currentST:window.pageYOffset || document.documentElement.scrollTop   //储存页面滚动距离
    }
  }

  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll)   //添加页面滚动事件
  }

  handleScroll(){
    var lastST = window.pageYOffset || document.documentElement.scrollTop    //记录上一次滚动距离
      if (this.state.currentST < lastST){     //现在页面滚动距离与上一次滚动距离对比，确定滚动方向（上下），向下滚动，显示隐藏header
        this.setState({
          hiddenHeader:true,
          currentST:lastST
        })
        if (this.state.currentST > 100) {    //向下滚动100，侧边栏固定
          this.setState({
            turnFixed:true,
          })
        }
        if (this.state.currentST > 600) {    //向下滚动600，右下角回到顶部按钮上滑
          this.setState({
            cornerUp:true
          })
        }
      } else if(this.state.currentST > lastST){     //向上滚动，显示默认header
        this.setState({
          hiddenHeader:false,
          currentST:lastST
        })
        if(this.state.currentST < 100){     //滚动距离小于100，侧边栏回到默认状态
          this.setState({
            turnFixed:false,
          })
        }
        if (this.state.currentST < 600) {    //滚动距离小于600，右下角回到顶部按钮下滑
          this.setState({
            cornerUp:false,
          })
        }
      }
  }

  scrollToTop(){
    document.documentElement.scroll(0, 0)   //回到顶部功能
  }


  componentWillUnmount(){         //移除滚动事件
    document.removeEventListener('scroll', this.handleScroll)
  }


  showFeatured(){
    this.setState({
      featured:true,
      follow:false,
      hot:false
    })
  }

  showHot(){
    this.setState({
      featured:false,
      follow:false,
      hot:true
    })
  }

  showFollow(){
    this.setState({
      featured:false,
      follow:true,
      hot:false
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.centered_wrapper}>
          <Header scrollDown={this.state.scrollDown} showFeatured={this.showFeatured} showFollow={this.showFollow} showHot={this.showHot} hot={this.state.hot} follow={this.state.follow} featured={this.state.featured} showHidden={this.state.hiddenHeader}/>
          <Main showFeatured={this.showFeatured} showFollow={this.showFollow} showHot={this.showHot} hot={this.state.hot} follow={this.state.follow} featured={this.state.featured}/>
          <Aside turnFixed={this.state.turnFixed}/>
        </div>
        <div className={styles.corner} style={{transform:this.state.cornerUp?'translateY(-55px)':'', transition:'200ms'}}>
          <div><button><svg title="建议反馈" fill="#8590A6" viewBox="0 0 24 24" width="24" height="24"><path d="M19.99 6.99L18 5s-1-1-2-1H8C7 4 6 5 6 5L4 7S3 8 3 9v9s0 2 2.002 2H19c2 0 2-2 2-2V9c0-1-1.01-2.01-1.01-2.01zM16.5 5.5L19 8H5l2.5-2.5h9zm-2 5.5s.5 0 .5.5-.5.5-.5.5h-5s-.5 0-.5-.5.5-.5.5-.5h5z"></path></svg></button></div>
          <div><button onClick={this.scrollToTop}><svg title="回到顶部" fill="#8590A6" viewBox="0 0 24 24" width="24" height="24"><path d="M16.036 19.59a1 1 0 0 1-.997.995H9.032a.996.996 0 0 1-.997-.996v-7.005H5.03c-1.1 0-1.36-.633-.578-1.416L11.33 4.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.005z"></path></svg></button></div>
        </div>
    </div>
    );
  }
}

export default App;
