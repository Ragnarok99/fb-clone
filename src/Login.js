import React from 'react';

import { Button } from '@material-ui/core';

import { auth, provider } from './firebase';

import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
	const [, dispatch] = useStateValue();

	const signIn = async () => {
		try {
			const result = await auth.signInWithPopup(provider);
			dispatch({ type: actionTypes.SET_USER, user: result.user });
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
					alt=""
				></img>
				<img
					src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
					alt=""
				></img>
			</div>
			<Button type="submit" onClick={signIn}>
				Sign In
			</Button>
		</div>
	);
}

export default Login;
