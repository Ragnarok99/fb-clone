import React, { useState, useEffect, forwardRef } from 'react';
import FlipMove from 'react-flip-move';

import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

import './Feed.css';
import db from './firebase';

// const FunctionalPost = forwardRef((props, ref) => {
// 	return <Post forwardRef={ref} {...props}></Post>;
// });

function Feed() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
				);
			});
	}, []);
	return (
		<div className="feed">
			<StoryReel></StoryReel>
			<MessageSender></MessageSender>
			<FlipMove>
				{posts.map(({ id, data }) => (
					<Post key={id} {...data}></Post>
				))}
			</FlipMove>
		</div>
	);
}

export default Feed;
