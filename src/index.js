import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import login from './Login';
import createAccount from './CreateAccount';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCc6uvv4-yoigUNu2p9sgK-9WOSTBFSVM0",
    authDomain: "etasktimer.firebaseapp.com",
    databaseURL: "https://etasktimer.firebaseio.com",
    projectId: "etasktimer",
    storageBucket: "etasktimer.appspot.com",
    messagingSenderId: "768822253796"
};
firebase.initializeApp(config);

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route path="/Login" component={login} />
                <Route path="/CreateAccount" component={createAccount} />
                <Route path="/" component={App}/>
            </Switch>
        </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
