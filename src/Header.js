import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
	const [{ user }] = useStateValue();

	return (
		<div className="header">
			<div className="header__left">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
					alt=""
				></img>
				<div className="header__input">
					<SearchIcon></SearchIcon>
					<input placeholder="Search Facebook" type="text"></input>
				</div>
			</div>
			<div className="header__center">
				<div className="header__option header__option--active">
					<HomeIcon fonstSize="large"></HomeIcon>
				</div>
				<div className="header__option">
					<FlagIcon fonstSize="large"></FlagIcon>
				</div>
				<div className="header__option">
					<SubscriptionsOutlinedIcon fonstSize="large"></SubscriptionsOutlinedIcon>
				</div>

				<div className="header__option">
					<StorefrontOutlinedIcon fonstSize="large"></StorefrontOutlinedIcon>
				</div>
				<div className="header__option">
					<SupervisedUserCircleIcon fonstSize="large"></SupervisedUserCircleIcon>
				</div>
			</div>
			<div className="header__right">
				<div className="header__info">
					<Avatar src={user.photoURL}></Avatar>
					<h4>{user.displayName}</h4>
				</div>
				<IconButton>
					<AddIcon></AddIcon>
				</IconButton>
				<IconButton>
					<ForumIcon></ForumIcon>
				</IconButton>
				<IconButton>
					<NotificationsActiveIcon></NotificationsActiveIcon>
				</IconButton>
				<IconButton>
					<ExpandMoreIcon></ExpandMoreIcon>
				</IconButton>
			</div>
		</div>
	);
}

export default Header;
