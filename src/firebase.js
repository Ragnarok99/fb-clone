import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBUPrnuszTQb1nt08xmCOkiN3sJP5onb_E',
	authDomain: 'facebook-clone-3b5f8.firebaseapp.com',
	databaseURL: 'https://facebook-clone-3b5f8.firebaseio.com',
	projectId: 'facebook-clone-3b5f8',
	storageBucket: 'facebook-clone-3b5f8.appspot.com',
	messagingSenderId: '559005606810',
	appId: '1:559005606810:web:00a3653714e0b1e1a21023',
	measurementId: 'G-2TLBSXJM8P',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
