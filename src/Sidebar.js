import React from 'react';

import {
	EmojiFlags,
	People,
	Chat,
	Storefront,
	VideoLibrary,
	ExpandMoreOutlined,
	LocalHospital,
} from '@material-ui/icons';

import SidebarRow from './SidebarRow';

import './Sidebar.css';
import { useStateValue } from './StateProvider';

function Sidebar() {
	const [{ user }] = useStateValue();

	return (
		<div className="sidebar">
			<SidebarRow src={user.photoURL} title={user.displayName}></SidebarRow>
			<SidebarRow
				title="COVID-19 Information Center"
				Icon={LocalHospital}
			></SidebarRow>
			<SidebarRow title="Pages" Icon={EmojiFlags}></SidebarRow>
			<SidebarRow title="Friends" Icon={People}></SidebarRow>
			<SidebarRow title="Messenger" Icon={Chat}></SidebarRow>
			<SidebarRow title="Marketplace" Icon={Storefront}></SidebarRow>
			<SidebarRow title="Videos" Icon={VideoLibrary}></SidebarRow>
			<SidebarRow Icon={ExpandMoreOutlined}></SidebarRow>
		</div>
	);
}

export default Sidebar;
