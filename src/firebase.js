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

export const database = firebase.database().ref('posts/');
export const auth = firebase.auth();