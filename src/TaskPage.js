import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as firebase from 'firebase';

export default class taskPage extends React.Component {

    constructor(props) {
        super(props);
        let today = new Date(),
            tDate = today.getFullYear() + '-' + (today.getMonth('MM') + 1) + '-' + today.getDate();
        this.state = {
            date: moment(),
            changeTask1: '',
            nDate:tDate,
            key1:'',
            uri1: require('./circle_wh.jpg'),  uri2: require('./circle_wh.jpg'), uri3: require('./circle_wh.jpg'), uri4: require('./circle_wh.jpg'),uri5: require('./circle_wh.jpg'),  uri6: require('./circle_wh.jpg'), uri7: require('./circle_wh.jpg'), uri8: require('./circle_wh.jpg'),uri9: require('./circle_wh.jpg'),  uri10: require('./circle_wh.jpg'), uri11: require('./circle_wh.jpg'), uri12: require('./circle_wh.jpg'),uri13: require('./circle_wh.jpg'),  uri14: require('./circle_wh.jpg'), uri15: require('./circle_wh.jpg'), uri16: require('./circle_wh.jpg'),uri17: require('./circle_wh.jpg'),  uri18: require('./circle_wh.jpg'), uri19: require('./circle_wh.jpg'), uri20: require('./circle_wh.jpg'),uri21: require('./circle_wh.jpg'),  uri22: require('./circle_wh.jpg'), uri23: require('./circle_wh.jpg'), uri24: require('./circle_wh.jpg'),uri25: require('./circle_wh.jpg'),  uri26: require('./circle_wh.jpg'), uri27: require('./circle_wh.jpg'), uri28: require('./circle_wh.jpg'),uri29: require('./circle_wh.jpg'),  uri30: require('./circle_wh.jpg'), uri31: require('./circle_wh.jpg'), uri32: require('./circle_wh.jpg'),uri33: require('./circle_wh.jpg'),  uri34: require('./circle_wh.jpg'), uri35: require('./circle_wh.jpg'), uri36: require('./circle_wh.jpg'),uri37: require('./circle_wh.jpg'),  uri38: require('./circle_wh.jpg'), uri39: require('./circle_wh.jpg'), uri40: require('./circle_wh.jpg'),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleEditChange(event){
        let _changedText = event.target.value;
        switch (_changedText){
            case '1':this.setState({changedText0 : _changedText});
                this.setState({changedText1:'2'});this.setState({changedText2:'3'});this.setState({changedText3:'4'});this.setState({changedText4:'5'});this.setState({changedText5:'6'});this.setState({changedText6:'7'});this.setState({changedText7:'8'});this.setState({changedText8:'9'});this.setState({changedText9:'10'});
                break;
            case '2':this.setState({changedText0:_changedText});
                this.setState({changedText1:'3'});this.setState({changedText2:'4'});this.setState({changedText3:'5'});this.setState({changedText4:'6'});this.setState({changedText5:'7'});this.setState({changedText6:'8'});this.setState({changedText7:'9'});this.setState({changedText8:'10'});this.setState({changedText9:'11'});
                break;
            case '3':this.setState({changedText0:_changedText});
                this.setState({changedText1:'4'});this.setState({changedText2:'5'});this.setState({changedText3:'6'});this.setState({changedText4:'7'});this.setState({changedText5:'8'});this.setState({changedText6:'9'});this.setState({changedText7:'10'});this.setState({changedText8:'11'});this.setState({changedText9:'12'});
                break;
            case '4': this.setState({changedText0:_changedText});
                this.setState({changedText1:'5'});this.setState({changedText2:'6'});this.setState({changedText3:'7'});this.setState({changedText4:'8'});this.setState({changedText5:'9'});this.setState({changedText6:'10'});this.setState({changedText7:'11'});this.setState({changedText8:'12'});this.setState({changedText9:'13'});
                break;
            case '5': this.setState({changedText0:_changedText});
                this.setState({changedText1:'6'});this.setState({changedText2:'7'});this.setState({changedText3:'8'});this.setState({changedText4:'9'});this.setState({changedText5:'10'});this.setState({changedText6:'11'});this.setState({changedText7:'12'});this.setState({changedText8:'13'});this.setState({changedText9:'14'});
                break;
            case '6': this.setState({changedText0:_changedText});
                this.setState({changedText1:'7'});this.setState({changedText2:'8'});this.setState({changedText3:'9'});this.setState({changedText4:'10'});this.setState({changedText5:'11'});this.setState({changedText6:'12'});this.setState({changedText7:'13'});this.setState({changedText8:'14'});this.setState({changedText9:'15'});
                break;
            case '7': this.setState({changedText0:_changedText});
                this.setState({changedText1:'8'});this.setState({changedText2:'9'});this.setState({changedText3:'10'});this.setState({changedText4:'11'});this.setState({changedText5:'12'});this.setState({changedText6:'13'});this.setState({changedText7:'14'});this.setState({changedText8:'15'});this.setState({changedText9:'16'});
                break;
            case '8': this.setState({changedText0:_changedText});
                this.setState({changedText1:'9'});this.setState({changedText2:'10'});this.setState({changedText3:'11'});this.setState({changedText4:'12'});this.setState({changedText5:'13'});this.setState({changedText6:'14'});this.setState({changedText7:'15'});this.setState({changedText8:'16'});this.setState({changedText9:'17'});
                break;
            case '9': this.setState({changedText0:_changedText});
                this.setState({changedText1:'10'});this.setState({changedText2:'11'});this.setState({changedText3:'12'});this.setState({changedText4:'13'});this.setState({changedText5:'14'});this.setState({changedText6:'15'});this.setState({changedText7:'16'});this.setState({changedText8:'17'});this.setState({changedText9:'18'});
                break;
            case '10': this.setState({changedText0:_changedText});
                this.setState({changedText1:'11'});this.setState({changedText2:'12'});this.setState({changedText3:'13'});this.setState({changedText4:'14'});this.setState({changedText5:'15'});this.setState({changedText6:'16'});this.setState({changedText7:'17'});this.setState({changedText8:'18'});this.setState({changedText9:'19'});
                break;
            case '11': this.setState({changedText0:_changedText});
                this.setState({changedText1:'12'});this.setState({changedText2:'13'});this.setState({changedText3:'14'});this.setState({changedText4:'15'});this.setState({changedText5:'16'});this.setState({changedText6:'17'});this.setState({changedText7:'18'});this.setState({changedText8:'19'});this.setState({changedText9:'20'});
                break;
            case '12': this.setState({changedText0:_changedText});
                this.setState({changedText1:'13'});this.setState({changedText2:'14'});this.setState({changedText3:'15'});this.setState({changedText4:'16'});this.setState({changedText5:'17'});this.setState({changedText6:'18'});this.setState({changedText7:'19'});this.setState({changedText8:'20'});this.setState({changedText9:'21'});
                break;
            case '13': this.setState({changedText0:_changedText});
                this.setState({changedText1:'14'});this.setState({changedText2:'15'});this.setState({changedText3:'16'});this.setState({changedText4:'17'});this.setState({changedText5:'18'});this.setState({changedText6:'19'});this.setState({changedText7:'20'});this.setState({changedText8:'21'});this.setState({changedText9:'22'});
                break;
            case '14': this.setState({changedText0:_changedText});
                this.setState({changedText1:'15'});this.setState({changedText2:'16'});this.setState({changedText3:'17'});this.setState({changedText4:'18'});this.setState({changedText5:'19'});this.setState({changedText6:'20'});this.setState({changedText7:'21'});this.setState({changedText8:'22'});this.setState({changedText9:'23'});
                break;
            case '15': this.setState({changedText0:_changedText});
                this.setState({changedText1:'16'});this.setState({changedText2:'17'});this.setState({changedText3:'18'});this.setState({changedText4:'19'});this.setState({changedText5:'20'});this.setState({changedText6:'21'});this.setState({changedText7:'22'});this.setState({changedText8:'23'});this.setState({changedText9:'24'});
                break;
            case '16': this.setState({changedText0:_changedText});
                this.setState({changedText1:'17'});this.setState({changedText2:'18'});this.setState({changedText3:'19'});this.setState({changedText4:'20'});this.setState({changedText5:'21'});this.setState({changedText6:'22'});this.setState({changedText7:'23'});this.setState({changedText8:'24'});this.setState({changedText9:'1'});
                break;
            case '17': this.setState({changedText0:_changedText});
                this.setState({changedText1:'18'});this.setState({changedText2:'19'});this.setState({changedText3:'20'});this.setState({changedText4:'21'});this.setState({changedText5:'22'});this.setState({changedText6:'23'});this.setState({changedText7:'24'});this.setState({changedText8:'1'});this.setState({changedText9:'2'});
                break;
            case '18': this.setState({changedText0:_changedText});
                this.setState({changedText1:'19'});this.setState({changedText2:'20'});this.setState({changedText3:'21'});this.setState({changedText4:'22'});this.setState({changedText5:'23'});this.setState({changedText6:'24'});this.setState({changedText7:'1'});this.setState({changedText8:'2'});this.setState({changedText9:'3'});
                break;
            case '19': this.setState({changedText0:_changedText});
                this.setState({changedText1:'20'});this.setState({changedText2:'21'});this.setState({changedText3:'22'});this.setState({changedText4:'23'});this.setState({changedText5:'24'});this.setState({changedText6:'1'});this.setState({changedText7:'2'});this.setState({changedText8:'3'});this.setState({changedText9:'4'});
                break;
            case '20': this.setState({changedText0:_changedText});
                this.setState({changedText1:'21'});this.setState({changedText2:'22'});this.setState({changedText3:'23'});this.setState({changedText4:'24'});this.setState({changedText5:'1'});this.setState({changedText6:'2'});this.setState({changedText7:'3'});this.setState({changedText8:'4'});this.setState({changedText9:'5'});
                break;
            case '21': this.setState({changedText0:_changedText});
                this.setState({changedText1:'22'});this.setState({changedText2:'23'});this.setState({changedText3:'24'});this.setState({changedText4:'1'});this.setState({changedText5:'2'});this.setState({changedText6:'3'});this.setState({changedText7:'4'});this.setState({changedText8:'5'});this.setState({changedText9:'6'});
                break;
            case '22': this.setState({changedText0:_changedText});
                this.setState({changedText1:'23'});this.setState({changedText2:'24'});this.setState({changedText3:'1'});this.setState({changedText4:'2'});this.setState({changedText5:'3'});this.setState({changedText6:'4'});this.setState({changedText7:'5'});this.setState({changedText8:'6'});this.setState({changedText9:'7'});
                break;
            case '23': this.setState({changedText0:_changedText});
                this.setState({changedText1:'24'});this.setState({changedText2:'1'});this.setState({changedText3:'2'});this.setState({changedText4:'3'});this.setState({changedText5:'4'});this.setState({changedText6:'5'});this.setState({changedText7:'6'});this.setState({changedText8:'7'});this.setState({changedText9:'8'});
                break;
            case '24': this.setState({changedText0:_changedText});
                this.setState({changedText1:'1'});this.setState({changedText2:'2'});this.setState({changedText3:'3'});this.setState({changedText4:'4'});this.setState({changedText5:'5'});this.setState({changedText6:'6'});this.setState({changedText7:'7'});this.setState({changedText8:'8'});this.setState({changedText9:'9'});
                break;
        }
    }

    handleChange(date){
        let newDate = date.format("YYYY-M-D");
        this.setState({
            date: date,
            nDate: newDate
        });
        this.dataChanged(newDate);
    }

    dataChanged=(date)=>{
        let user = firebase.auth().currentUser;
        console.log('change function called');
        let that = this;
        this.setState({changeTask1:'', uri1: require('./circle_wh.jpg'),  uri2: require('./circle_wh.jpg'), uri3: require('./circle_wh.jpg'), uri4: require('./circle_wh.jpg'),uri5: require('./circle_wh.jpg'),  uri6: require('./circle_wh.jpg'), uri7: require('./circle_wh.jpg'), uri8: require('./circle_wh.jpg'),uri9: require('./circle_wh.jpg'),  uri10: require('./circle_wh.jpg'), uri11: require('./circle_wh.jpg'), uri12: require('./circle_wh.jpg'),uri13: require('./circle_wh.jpg'),  uri14: require('./circle_wh.jpg'), uri15: require('./circle_wh.jpg'), uri16: require('./circle_wh.jpg'),uri17: require('./circle_wh.jpg'),  uri18: require('./circle_wh.jpg'), uri19: require('./circle_wh.jpg'), uri20: require('./circle_wh.jpg'),uri21: require('./circle_wh.jpg'),  uri22: require('./circle_wh.jpg'), uri23: require('./circle_wh.jpg'), uri24: require('./circle_wh.jpg'),uri25: require('./circle_wh.jpg'),  uri26: require('./circle_wh.jpg'), uri27: require('./circle_wh.jpg'), uri28: require('./circle_wh.jpg'),uri29: require('./circle_wh.jpg'),  uri30: require('./circle_wh.jpg'), uri31: require('./circle_wh.jpg'), uri32: require('./circle_wh.jpg'),uri33: require('./circle_wh.jpg'),  uri34: require('./circle_wh.jpg'), uri35: require('./circle_wh.jpg'), uri36: require('./circle_wh.jpg'),uri37: require('./circle_wh.jpg'),  uri38: require('./circle_wh.jpg'), uri39: require('./circle_wh.jpg'), uri40: require('./circle_wh.jpg'),
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key1`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    console.log('no data');
                    that.setState({changeTask1 : ''});
                }
                if(child.val() !==''){
                    that.setState({key1 : child.val()});
                    this.task_row_one(child.val());
                }
            });
        });
    };

    componentWillMount(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key1`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask1 : ''});
                }
                if(child.val() !==''){
                    that.setState({key1 : child.val()});
                    this.task_row_one(child.val());
                }
            });
        });
    }

    task_row_one(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key1 = key;
        let that = this;
        console.log(key1);
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key1}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                console.log(child.val());
                if(child.val().name !==''){
                    that.setState({changeTask1 : child.val()});
                    this.bubble_row_one();
                }
            });
        });
    }

    bubble_row_one(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri1: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri1:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri2: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri2:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri3: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri3:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri4: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri4:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri5: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri5:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri6: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri6:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri7: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri7:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri8: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri8:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri9: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri9:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri10: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri10:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri11: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri11:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri12: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri12:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri13: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri13:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri14: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri14:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri15: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri15:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri16: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri16:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri17: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri17:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri18: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri18:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri19: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri19:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri20: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri20:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri21: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri21:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri22: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri22:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri23: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri23:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri24: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri24:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri25: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri25:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri26: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri26:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri27: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri27:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri28: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri28:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri29: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri29:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri30: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri30:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri31: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri31:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri32: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri32:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri33: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri33:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri34: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri34:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri35: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri35:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri36: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri36:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri38: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri38:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri38: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri38:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri39: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri39:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask1}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri40: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri40:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    handleEditTask=(event)=>{
        this.setState({
            changeTask1: event.target.value
        });
    };

    addTask1=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key1: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask1 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key1`).set({ key: key });
        alert("Task Added");
    };

    delTask1=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key1;
        let name = this.state.changeTask1;
        let key1 = 'key1';
        console.log(key);
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key1).set(null);
        this.setState({
            changeTask1:'',
            uri1: require('./circle_wh.jpg'),  uri2: require('./circle_wh.jpg'), uri3: require('./circle_wh.jpg'), uri4: require('./circle_wh.jpg'),uri5: require('./circle_wh.jpg'),  uri6: require('./circle_wh.jpg'), uri7: require('./circle_wh.jpg'), uri8: require('./circle_wh.jpg'),uri9: require('./circle_wh.jpg'),  uri10: require('./circle_wh.jpg'), uri11: require('./circle_wh.jpg'), uri12: require('./circle_wh.jpg'),uri13: require('./circle_wh.jpg'),  uri14: require('./circle_wh.jpg'), uri15: require('./circle_wh.jpg'), uri16: require('./circle_wh.jpg'),uri17: require('./circle_wh.jpg'),  uri18: require('./circle_wh.jpg'), uri19: require('./circle_wh.jpg'), uri20: require('./circle_wh.jpg'),uri21: require('./circle_wh.jpg'),  uri22: require('./circle_wh.jpg'), uri23: require('./circle_wh.jpg'), uri24: require('./circle_wh.jpg'),uri25: require('./circle_wh.jpg'),  uri26: require('./circle_wh.jpg'), uri27: require('./circle_wh.jpg'), uri28: require('./circle_wh.jpg'),uri29: require('./circle_wh.jpg'),  uri30: require('./circle_wh.jpg'), uri31: require('./circle_wh.jpg'), uri32: require('./circle_wh.jpg'),uri33: require('./circle_wh.jpg'),  uri34: require('./circle_wh.jpg'), uri35: require('./circle_wh.jpg'), uri36: require('./circle_wh.jpg'),uri37: require('./circle_wh.jpg'),  uri38: require('./circle_wh.jpg'), uri39: require('./circle_wh.jpg'), uri40: require('./circle_wh.jpg'),
        })
    };

    changeLogo1=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri1!==require('./circle_bl.jpg')) {
            this.setState({
                uri1: require('./circle_bl.jpg')
            });
            console.log(this.state.uri1);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });
        }
        if(this.state.uri1===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri1:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri1);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });
        }
    };changeLogo2=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri2!==require('./circle_bl.jpg')) {
            this.setState({
                uri2: require('./circle_bl.jpg')
            });
            console.log(this.state.uri2);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });
        }
        if(this.state.uri2===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri2:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri2);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });
        }
    };changeLogo3=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri3!==require('./circle_bl.jpg')) {
            this.setState({
                uri3: require('./circle_bl.jpg')
            });
            console.log(this.state.uri3);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });
        }
        if(this.state.uri3===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri3:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri3);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });
        }
    };changeLogo4=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri4!==require('./circle_bl.jpg')) {
            this.setState({
                uri4: require('./circle_bl.jpg')
            });
            console.log(this.state.uri4);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });
        }
        if(this.state.uri4===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri4:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri4);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });
        }
    };changeLogo5=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri5!==require('./circle_bl.jpg')) {
            this.setState({
                uri5: require('./circle_bl.jpg')
            });
            console.log(this.state.uri5);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });
        }
        if(this.state.uri5===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri5:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri5);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });
        }
    };changeLogo6=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri6!==require('./circle_bl.jpg')) {
            this.setState({
                uri6: require('./circle_bl.jpg')
            });
            console.log(this.state.uri6);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });
        }
        if(this.state.uri6===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri6:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri6);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });
        }
    };changeLogo7=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri7!==require('./circle_bl.jpg')) {
            this.setState({
                uri7: require('./circle_bl.jpg')
            });
            console.log(this.state.uri7);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });
        }
        if(this.state.uri7===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri7:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri7);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });
        }
    };changeLogo8=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri8!==require('./circle_bl.jpg')) {
            this.setState({
                uri8: require('./circle_bl.jpg')
            });
            console.log(this.state.uri8);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });
        }
        if(this.state.uri8===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri8:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri8);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });
        }
    };changeLogo9=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri9!==require('./circle_bl.jpg')) {
            this.setState({
                uri9: require('./circle_bl.jpg')
            });
            console.log(this.state.uri9);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });
        }
        if(this.state.uri9===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri9:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri9);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });
        }
    };changeLogo10=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri10!==require('./circle_bl.jpg')) {
            this.setState({
                uri10: require('./circle_bl.jpg')
            });
            console.log(this.state.uri10);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });
        }
        if(this.state.uri10===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri10:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri10);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });
        }
    };changeLogo11=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri11!==require('./circle_bl.jpg')) {
            this.setState({
                uri11: require('./circle_bl.jpg')
            });
            console.log(this.state.uri11);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });
        }
        if(this.state.uri11===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri11:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri11);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });
        }
    };changeLogo12=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri12!==require('./circle_bl.jpg')) {
            this.setState({
                uri12: require('./circle_bl.jpg')
            });
            console.log(this.state.uri12);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });
        }
        if(this.state.uri12===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri12:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri12);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });
        }
    };changeLogo13=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri13!==require('./circle_bl.jpg')) {
            this.setState({
                uri13: require('./circle_bl.jpg')
            });
            console.log(this.state.uri13);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });
        }
        if(this.state.uri13===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri13:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri13);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });
        }
    };changeLogo14=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri14!==require('./circle_bl.jpg')) {
            this.setState({
                uri14: require('./circle_bl.jpg')
            });
            console.log(this.state.uri14);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });
        }
        if(this.state.uri14===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri14:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri14);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });
        }
    };changeLogo15=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri15!==require('./circle_bl.jpg')) {
            this.setState({
                uri15: require('./circle_bl.jpg')
            });
            console.log(this.state.uri15);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });
        }
        if(this.state.uri15===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri15:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri15);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });
        }
    };changeLogo16=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri16!==require('./circle_bl.jpg')) {
            this.setState({
                uri16: require('./circle_bl.jpg')
            });
            console.log(this.state.uri16);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });
        }
        if(this.state.uri16===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri16:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri16);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });
        }
    };changeLogo17=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri17!==require('./circle_bl.jpg')) {
            this.setState({
                uri17: require('./circle_bl.jpg')
            });
            console.log(this.state.uri17);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });
        }
        if(this.state.uri17===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri17:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri17);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });
        }
    };changeLogo18=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri18!==require('./circle_bl.jpg')) {
            this.setState({
                uri18: require('./circle_bl.jpg')
            });
            console.log(this.state.uri18);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });
        }
        if(this.state.uri18===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri18:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri18);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });
        }
    };changeLogo19=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri19!==require('./circle_bl.jpg')) {
            this.setState({
                uri19: require('./circle_bl.jpg')
            });
            console.log(this.state.uri19);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });
        }
        if(this.state.uri19===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri19:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri19);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });
        }
    };changeLogo20=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri20!==require('./circle_bl.jpg')) {
            this.setState({
                uri20: require('./circle_bl.jpg')
            });
            console.log(this.state.uri20);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });
        }
        if(this.state.uri20===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri20:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri20);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });
        }
    };changeLogo21=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri21!==require('./circle_bl.jpg')) {
            this.setState({
                uri21: require('./circle_bl.jpg')
            });
            console.log(this.state.uri21);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });
        }
        if(this.state.uri21===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri21:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri21);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });
        }
    };changeLogo22=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri22!==require('./circle_bl.jpg')) {
            this.setState({
                uri22: require('./circle_bl.jpg')
            });
            console.log(this.state.uri22);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });
        }
        if(this.state.uri22===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri22:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri22);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });
        }
    };changeLogo23=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri23!==require('./circle_bl.jpg')) {
            this.setState({
                uri23: require('./circle_bl.jpg')
            });
            console.log(this.state.uri23);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });
        }
        if(this.state.uri23===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri23:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri23);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });
        }
    };changeLogo24=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri24!==require('./circle_bl.jpg')) {
            this.setState({
                uri24: require('./circle_bl.jpg')
            });
            console.log(this.state.uri24);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });
        }
        if(this.state.uri24===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri24:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri24);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });
        }
    };changeLogo25=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri25!==require('./circle_bl.jpg')) {
            this.setState({
                uri25: require('./circle_bl.jpg')
            });
            console.log(this.state.uri25);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });
        }
        if(this.state.uri25===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri25:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri25);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });
        }
    };changeLogo26=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri26!==require('./circle_bl.jpg')) {
            this.setState({
                uri26: require('./circle_bl.jpg')
            });
            console.log(this.state.uri26);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });
        }
        if(this.state.uri26===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri26:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri26);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });
        }
    };changeLogo27=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri27!==require('./circle_bl.jpg')) {
            this.setState({
                uri27: require('./circle_bl.jpg')
            });
            console.log(this.state.uri27);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });
        }
        if(this.state.uri27===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri27:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri27);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });
        }
    };changeLogo28=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri28!==require('./circle_bl.jpg')) {
            this.setState({
                uri28: require('./circle_bl.jpg')
            });
            console.log(this.state.uri28);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });
        }
        if(this.state.uri28===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri28:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri28);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });
        }
    };changeLogo29=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri29!==require('./circle_bl.jpg')) {
            this.setState({
                uri29: require('./circle_bl.jpg')
            });
            console.log(this.state.uri29);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });
        }
        if(this.state.uri29===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri29:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri29);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });
        }
    };changeLogo30=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri30!==require('./circle_bl.jpg')) {
            this.setState({
                uri30: require('./circle_bl.jpg')
            });
            console.log(this.state.uri30);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });
        }
        if(this.state.uri30===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri30:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri30);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });
        }
    };changeLogo31=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri31!==require('./circle_bl.jpg')) {
            this.setState({
                uri31: require('./circle_bl.jpg')
            });
            console.log(this.state.uri31);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });
        }
        if(this.state.uri31===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri31:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri31);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });
        }
    };changeLogo32=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri32!==require('./circle_bl.jpg')) {
            this.setState({
                uri32: require('./circle_bl.jpg')
            });
            console.log(this.state.uri32);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });
        }
        if(this.state.uri32===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri32:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri32);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });
        }
    };changeLogo33=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri33!==require('./circle_bl.jpg')) {
            this.setState({
                uri33: require('./circle_bl.jpg')
            });
            console.log(this.state.uri33);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });
        }
        if(this.state.uri33===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri33:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri33);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });
        }
    };changeLogo34=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri34!==require('./circle_bl.jpg')) {
            this.setState({
                uri34: require('./circle_bl.jpg')
            });
            console.log(this.state.uri34);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });
        }
        if(this.state.uri34===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri34:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri34);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });
        }
    };changeLogo35=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri35!==require('./circle_bl.jpg')) {
            this.setState({
                uri35: require('./circle_bl.jpg')
            });
            console.log(this.state.uri35);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });
        }
        if(this.state.uri35===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri35:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri35);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });
        }
    };changeLogo36=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri36!==require('./circle_bl.jpg')) {
            this.setState({
                uri36: require('./circle_bl.jpg')
            });
            console.log(this.state.uri36);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });
        }
        if(this.state.uri36===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri36:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri36);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });
        }
    };changeLogo37=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri37!==require('./circle_bl.jpg')) {
            this.setState({
                uri37: require('./circle_bl.jpg')
            });
            console.log(this.state.uri37);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });
        }
        if(this.state.uri37===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri37:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri37);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });
        }
    };changeLogo38=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri38!==require('./circle_bl.jpg')) {
            this.setState({
                uri38: require('./circle_bl.jpg')
            });
            console.log(this.state.uri38);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });
        }
        if(this.state.uri38===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri38:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri38);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });
        }
    };changeLogo39=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri39!==require('./circle_bl.jpg')) {
            this.setState({
                uri39: require('./circle_bl.jpg')
            });
            console.log(this.state.uri39);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });
        }
        if(this.state.uri39===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri39:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri39);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });
        }
    };changeLogo40=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask1;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri40!==require('./circle_bl.jpg')) {
            this.setState({
                uri40: require('./circle_bl.jpg')
            });
            console.log(this.state.uri40);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });
        }
        if(this.state.uri40===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri40:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri40);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });
        }
    };
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Native Timer</h1>
                </header>
                <div className="Banner">
                    <p className="Hour-select">STARTING HOUR |<input name="Hour" type="text" value={this.state.changedText} size="1" maxLength="2" onClick="" onChange={this.handleEditChange.bind(this)} />
                        | in 24-Hour Time</p>
                    <p className="App-clock" >
                        <DatePicker
                            dateFormat="YYYY-M-D"
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p className="logout"><button onClick={()=>{firebase.auth().signOut();this.props.history.push('/login')}}>logout</button></p>
                </div>
                <div className="main_table">
                    <view>
                        <table className="table">
                            <tr>
                                <th><label width={75}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText0}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText1}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText2}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText3}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText4}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText5}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText6}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText7}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText8}/></th>
                                <th><input type='label' size={15} disabled="disabled" value={this.state.changedText9}/></th>
                            </tr>

                            <tr className="tableFormat">
                                <td><input type="textField" id="textBox1" className="first" maxLength={10}  value={this.state.changeTask1} onChange={this.handleEditTask}/><button onClick={this.addTask1}>+</button><button onClick={this.delTask1}>-</button></td>
                                <td><img  id='id1'  className="first" src={this.state.uri1 } alt=''  height={20} onClick={this.changeLogo1}/><img  id='id2'  className="first" src={this.state.uri2 } alt=''  height={20} onClick={this.changeLogo2}/><img  id='id3'  className="first" src={this.state.uri3 } alt=''  height={20} onClick={this.changeLogo3}/><img  id='id4'  className="first" src={this.state.uri4 } alt=''  height={20} onClick={this.changeLogo4}/></td>
                                <td ><img id='id5'  className="first" src={this.state.uri5 } alt=''  height={20} onClick={this.changeLogo5}/><img  id='id6'  className="first" src={this.state.uri6 } alt=''  height={20} onClick={this.changeLogo6}/><img  id='id7'  className="first" src={this.state.uri7 } alt=''  height={20} onClick={this.changeLogo7}/><img  id='id8'  className="first" src={this.state.uri8 } alt=''  height={20} onClick={this.changeLogo8}/></td>
                                <td ><img id='id9'  className="first" src={this.state.uri9 } alt=''  height={20} onClick={this.changeLogo9}/><img  id='id10' className="first" src={this.state.uri10} alt=''  height={20} onClick={this.changeLogo10}/><img  id='id11' className="first" src={this.state.uri11} alt=''  height={20} onClick={this.changeLogo11}/><img  id='id12' className="first" src={this.state.uri12} alt=''  height={20} onClick={this.changeLogo12}/></td>
                                <td ><img id='id13' className="first" src={this.state.uri13} alt=''  height={20} onClick={this.changeLogo13}/><img  id='id14' className="first" src={this.state.uri14} alt=''  height={20} onClick={this.changeLogo14}/><img  id='id15' className="first" src={this.state.uri15} alt=''  height={20} onClick={this.changeLogo15}/><img  id='id16' className="first" src={this.state.uri16} alt=''  height={20} onClick={this.changeLogo16}/></td>
                                <td ><img id='id17' className="first" src={this.state.uri17} alt=''  height={20} onClick={this.changeLogo17}/><img  id='id18' className="first" src={this.state.uri18} alt=''  height={20} onClick={this.changeLogo18}/><img  id='id19' className="first" src={this.state.uri19} alt=''  height={20} onClick={this.changeLogo19}/><img  id='id20' className="first" src={this.state.uri20} alt=''  height={20} onClick={this.changeLogo20}/></td>
                                <td ><img id='id21' className="first" src={this.state.uri21} alt=''  height={20} onClick={this.changeLogo21}/><img  id='id22' className="first" src={this.state.uri22} alt=''  height={20} onClick={this.changeLogo22}/><img  id='id23' className="first" src={this.state.uri23} alt=''  height={20} onClick={this.changeLogo23}/><img  id='id24' className="first" src={this.state.uri24} alt=''  height={20} onClick={this.changeLogo24}/></td>
                                <td ><img id='id25' className="first" src={this.state.uri25} alt=''  height={20} onClick={this.changeLogo25}/><img  id='id26' className="first" src={this.state.uri26} alt=''  height={20} onClick={this.changeLogo26}/><img  id='id27' className="first" src={this.state.uri27} alt=''  height={20} onClick={this.changeLogo27}/><img  id='id28' className="first" src={this.state.uri28} alt=''  height={20} onClick={this.changeLogo28}/></td>
                                <td ><img id='id29' className="first" src={this.state.uri29} alt=''  height={20} onClick={this.changeLogo29}/><img  id='id30' className="first" src={this.state.uri30} alt=''  height={20} onClick={this.changeLogo30}/><img  id='id31' className="first" src={this.state.uri31} alt=''  height={20} onClick={this.changeLogo31}/><img  id='id32' className="first" src={this.state.uri32} alt=''  height={20} onClick={this.changeLogo32}/></td>
                                <td ><img id='id33' className="first" src={this.state.uri33} alt=''  height={20} onClick={this.changeLogo33}/><img  id='id34' className="first" src={this.state.uri34} alt=''  height={20} onClick={this.changeLogo34}/><img  id='id35' className="first" src={this.state.uri35} alt=''  height={20} onClick={this.changeLogo35}/><img  id='id36' className="first" src={this.state.uri36} alt=''  height={20} onClick={this.changeLogo36}/></td>
                                <td ><img id='id37' className="first" src={this.state.uri37} alt=''  height={20} onClick={this.changeLogo37}/><img  id='id38' className="first" src={this.state.uri38} alt=''  height={20} onClick={this.changeLogo38}/><img  id='id39' className="first" src={this.state.uri39} alt=''  height={20} onClick={this.changeLogo39}/><img  id='id40' className="first" src={this.state.uri40} alt=''  height={20} onClick={this.changeLogo40}/></td>
                            </tr>
                        </table>
                    </view>
                </div>
            </div>
        );
    }
}
export {taskPage};
