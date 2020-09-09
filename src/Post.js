import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import {
	ThumbUp,
	ChatBubbleOutline,
	NearMe,
	ExpandMoreOutlined,
	AccountCircle,
} from '@material-ui/icons';

import './Post.css';

const Post = forwardRef(
	({ profilePic, image, username, timestamp, message }, ref) => {
		return (
			<div className="post" ref={ref}>
				<div className="post__top">
					<Avatar src={profilePic} className="post__avatar"></Avatar>
					<div className="post__topInfo">
						<h3>{username}</h3>
						<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
					</div>
				</div>
				<div className="post__bottom">
					<p>{message}</p>
				</div>
				<div className="post__image">
					<img src={image} alt=""></img>
				</div>

				<div className="post__options">
					<div className="post__option">
						<ThumbUp></ThumbUp>
						<p>Like</p>
					</div>
					<div className="post__option">
						<ChatBubbleOutline></ChatBubbleOutline>
						<p>Commet</p>
					</div>
					<div className="post__option">
						<NearMe></NearMe>
						<p>Share</p>
					</div>
					<div className="post__option">
						<AccountCircle></AccountCircle>
						<ExpandMoreOutlined></ExpandMoreOutlined>
					</div>
				</div>
			</div>
		);
	}
);

export default Post;
