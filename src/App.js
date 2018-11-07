import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import firebase from 'firebase';

import HomePage from './containers/HomePage';
import UserPage from './containers/UserPage';

class App extends Component {
	constructor(props){
		super(props);

		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyAm-9jm4Lq3qOzWxMa5r4eDqiqPdIgI11s",
			authDomain: "cine-scope.firebaseapp.com",
			databaseURL: "https://cine-scope.firebaseio.com",
			projectId: "cine-scope",
			storageBucket: "cine-scope.appspot.com",
			messagingSenderId: "692991307960"
		};
		firebase.initializeApp(config);
	}
	render(){
		return (
			<Switch>
				<Route exact path="/" component={HomePage}/>
				<Route path="/profile" component={UserPage}/>
			</Switch>
		);
	}
}

export default App;
