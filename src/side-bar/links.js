import React from 'react';

const styles={
    list:{
        height: '205px',
        display:'flex',
        flexDirection:'column',
        marginTop:'10px'
    },

    listItems:{
        flex:'1 0 auto',
        fontSize: '13px',
        color: '#8590a6'
    }
}


const Links = ()=> (<ul style={styles.list} className='side-links'>
    <li style={styles.listItems}>
    <a href=''>刘看山·</a>
		<a href=''>知乎指南 · </a>
		<a href=''>知乎协议 · </a>
		<a href=''>知乎隐私保护指引</a>
    </li>
    <li style={styles.listItems}>
        <a href=''>应用 · </a>
		<a href=''>工作 · </a>
		<a href=''>申请开通知乎机构号</a>
    </li>
    <li style={styles.listItems}>
        <a href=''>举报侵权 · </a>
		<a href=''>网上有害信息举报专区</a>
    </li>
    <li style={styles.listItems}>
        <span>违法和不良信息举报：010-82716601</span>
    </li>
    <li style={styles.listItems}>
        <a href=''>儿童色情信息举报专区</a>
    </li>
    <li style={styles.listItems}>
        <a href=''>电信与服务业务经营许可证</a>
    </li>
    <li style={styles.listItems}>
        <a href=''>网络文化经营许可证</a>
    </li>
    <li style={styles.listItems}>
        <a href=''>联系我们</a><span>© 2019 知乎</span>
    </li>
</ul>)

export default Links