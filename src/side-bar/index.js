import React from 'react';
import SideTop from './side_bar_top';
import SideMiddle from './side_bar_middle'


const SideBar = ()=> (<div className='side-bar'>
		<SideTop />
		<SideMiddle />
		<div>
			<a href=''>刘看山·</a>
			<a href=''>知乎指南·</a>
			<a href=''>知乎协议·</a>
			<a href=''>知乎隐私保护指引</a>
			<a href=''>应用·</a>
			<a href=''>工作·</a>
			<a href=''>申请开通知乎机构号</a>
			<a href=''>举报侵权·</a>
			<a href=''>网上有害信息举报专区</a>
			<span>违法和不良信息举报：010-82716601</span>
			<a href=''>儿童色情信息举报专区</a>
			<a href=''>电信与服务业务经营许可证</a>
			<a href=''>网络文化经营许可证</a>
			<a href=''>联系我们</a>
			<span>© 2019 知乎</span>

		</div>
	</div>)

export default SideBar