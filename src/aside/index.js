import React from 'react';
import Top from './top';
import Middle from './middle';
import Bottom from './bottom/index.js';
import styles from './index.module.css'


// 整个侧边栏组件，在app中监听scroll事件，向下滚动一段距离后，props.turnfixed变为true，侧边栏变为position:fixed，不再跟随滚动，同时，侧边栏上部区域被覆盖不可见
class Aside extends React.Component{
    render(){
        return(<div className={styles.wrapper} style={{position:this.props.turnFixed?'fixed':'', left:this.props.turnFixed?'calc(50% + 196px)':'', top:this.props.turnFixed?'-108px':''}}>
            <Top />
            <Middle />
            <Bottom />
            <Links />
        </div>)
    }
}


// 侧边栏最下部系列链接
const Links = ()=> (<ul className={styles.list}>
    <li className={styles.listItems}>
    <a href=''>刘看山·</a>
		<a href=''>知乎指南 · </a>
		<a href=''>知乎协议 · </a>
		<a href=''>知乎隐私保护指引</a>
    </li>
    <li>
        <a href=''>应用 · </a>
		<a href=''>工作 · </a>
		<a href=''>申请开通知乎机构号</a>
    </li>
    <li>
        <a href=''>举报侵权 · </a>
		<a href=''>网上有害信息举报专区</a>
    </li>
    <li>
        <span>违法和不良信息举报：010-82716601</span>
    </li>
    <li>
        <a href=''>儿童色情信息举报专区</a>
    </li>
    <li>
        <a href=''>电信与服务业务经营许可证</a>
    </li>
    <li>
        <a href=''>网络文化经营许可证</a>
    </li>
    <li>
        <a href=''>联系我们</a><span>© 2019 知乎</span>
    </li>
</ul>)

export default Aside