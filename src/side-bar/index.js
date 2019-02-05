import React from 'react';
import SideTop from './side_bar_top';
import SideMiddle from './side_bar_middle';
import SideBottom from './side_bar_bottom';
import Links from './links'


const SideBar = ()=> (<div className='side-bar'>
		<SideTop />
		<SideMiddle />
		<SideBottom />
		<Links />
	</div>)

export default SideBar