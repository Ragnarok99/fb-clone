import React, { useState } from 'react';
import firebase from 'firebase';
import { Avatar } from '@material-ui/core';
import { Videocam, PhotoLibrary, InsertEmoticon } from '@material-ui/icons';

import { useStateValue } from './StateProvider';
import './MessageSender.css';
import db from './firebase';

function MessageSender() {
	const [input, setInput] = useState('');
	const [imageURL, setImageURL] = useState('');
	const [{ user }] = useStateValue();

	const handleSubmit = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageURL,
		});

		setInput('');
		setImageURL('');
	};
	return (
		<div className="messageSender">
			<div className="messageSender__top">
				<Avatar src={user.photoURL}></Avatar>
				<form>
					<input
						value={input}
						className="messageSender__input"
						placeholder={`What's on your mind, ${user.displayName}?`}
						onChange={(e) => setInput(e.target.value)}
					></input>
					<input
						value={imageURL}
						onChange={(e) => setImageURL(e.target.value)}
						placeholder="image URL (Optional)"
					></input>
					<button onClick={handleSubmit} type="submit">
						hidden submit
					</button>
				</form>
			</div>
			<div className="messageSender__bottom">
				<div className="messageSender__option">
					<Videocam style={{ color: 'red' }}></Videocam>
					<h3>Live Video</h3>
				</div>
				<div className="messageSender__option">
					<PhotoLibrary style={{ color: 'green' }}></PhotoLibrary>
					<h3>Photo/Video </h3>
				</div>
				<div className="messageSender__option">
					<InsertEmoticon style={{ color: 'orange' }}></InsertEmoticon>
					<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
