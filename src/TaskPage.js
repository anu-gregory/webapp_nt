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
            changeTask1: '',changeTask2:'',changeTask3:'',changeTask4:'',
            nDate:tDate,
            key1:'',key2:'',key3:'',key4:'',
            uri1: require('./circle_wh.jpg'),  uri2: require('./circle_wh.jpg'), uri3: require('./circle_wh.jpg'), uri4: require('./circle_wh.jpg'),uri5: require('./circle_wh.jpg'),  uri6: require('./circle_wh.jpg'), uri7: require('./circle_wh.jpg'), uri8: require('./circle_wh.jpg'),uri9: require('./circle_wh.jpg'),  uri10: require('./circle_wh.jpg'), uri11: require('./circle_wh.jpg'), uri12: require('./circle_wh.jpg'),uri13: require('./circle_wh.jpg'),  uri14: require('./circle_wh.jpg'), uri15: require('./circle_wh.jpg'), uri16: require('./circle_wh.jpg'),uri17: require('./circle_wh.jpg'),  uri18: require('./circle_wh.jpg'), uri19: require('./circle_wh.jpg'), uri20: require('./circle_wh.jpg'),uri21: require('./circle_wh.jpg'),  uri22: require('./circle_wh.jpg'), uri23: require('./circle_wh.jpg'), uri24: require('./circle_wh.jpg'),uri25: require('./circle_wh.jpg'),  uri26: require('./circle_wh.jpg'), uri27: require('./circle_wh.jpg'), uri28: require('./circle_wh.jpg'),uri29: require('./circle_wh.jpg'),  uri30: require('./circle_wh.jpg'), uri31: require('./circle_wh.jpg'), uri32: require('./circle_wh.jpg'),uri33: require('./circle_wh.jpg'),  uri34: require('./circle_wh.jpg'), uri35: require('./circle_wh.jpg'), uri36: require('./circle_wh.jpg'),uri37: require('./circle_wh.jpg'),  uri38: require('./circle_wh.jpg'), uri39: require('./circle_wh.jpg'), uri40: require('./circle_wh.jpg'),
            uri41: require('./circle_wh.jpg'),  uri42: require('./circle_wh.jpg'), uri43: require('./circle_wh.jpg'), uri44: require('./circle_wh.jpg'),uri45: require('./circle_wh.jpg'),  uri46: require('./circle_wh.jpg'), uri47: require('./circle_wh.jpg'), uri48: require('./circle_wh.jpg'),uri49: require('./circle_wh.jpg'),  uri50: require('./circle_wh.jpg'), uri51: require('./circle_wh.jpg'), uri52: require('./circle_wh.jpg'),uri53: require('./circle_wh.jpg'),  uri54: require('./circle_wh.jpg'), uri55: require('./circle_wh.jpg'), uri56: require('./circle_wh.jpg'),uri57: require('./circle_wh.jpg'),  uri58: require('./circle_wh.jpg'), uri59: require('./circle_wh.jpg'), uri60: require('./circle_wh.jpg'),uri61: require('./circle_wh.jpg'),  uri62: require('./circle_wh.jpg'), uri63: require('./circle_wh.jpg'), uri64: require('./circle_wh.jpg'),uri65: require('./circle_wh.jpg'),  uri66: require('./circle_wh.jpg'), uri67: require('./circle_wh.jpg'), uri68: require('./circle_wh.jpg'),uri69: require('./circle_wh.jpg'),  uri70: require('./circle_wh.jpg'), uri71: require('./circle_wh.jpg'), uri72: require('./circle_wh.jpg'),uri73: require('./circle_wh.jpg'),  uri74: require('./circle_wh.jpg'), uri75: require('./circle_wh.jpg'), uri76: require('./circle_wh.jpg'),uri77: require('./circle_wh.jpg'),  uri78: require('./circle_wh.jpg'), uri79: require('./circle_wh.jpg'), uri80: require('./circle_wh.jpg'),
            uri81: require('./circle_wh.jpg'),  uri82: require('./circle_wh.jpg'), uri83: require('./circle_wh.jpg'), uri84: require('./circle_wh.jpg'),uri85: require('./circle_wh.jpg'),  uri86: require('./circle_wh.jpg'), uri87: require('./circle_wh.jpg'), uri88: require('./circle_wh.jpg'),uri89: require('./circle_wh.jpg'),  uri90: require('./circle_wh.jpg'), uri91: require('./circle_wh.jpg'), uri92: require('./circle_wh.jpg'),uri93: require('./circle_wh.jpg'),  uri94: require('./circle_wh.jpg'), uri95: require('./circle_wh.jpg'), uri96: require('./circle_wh.jpg'),uri97: require('./circle_wh.jpg'),  uri98: require('./circle_wh.jpg'), uri99: require('./circle_wh.jpg'), uri100: require('./circle_wh.jpg'),uri101: require('./circle_wh.jpg'),  uri102: require('./circle_wh.jpg'), uri103: require('./circle_wh.jpg'), uri104: require('./circle_wh.jpg'),uri105: require('./circle_wh.jpg'),  uri106: require('./circle_wh.jpg'), uri107: require('./circle_wh.jpg'), uri108: require('./circle_wh.jpg'),uri109: require('./circle_wh.jpg'),  uri110: require('./circle_wh.jpg'), uri111: require('./circle_wh.jpg'), uri112: require('./circle_wh.jpg'),uri113: require('./circle_wh.jpg'),  uri114: require('./circle_wh.jpg'), uri115: require('./circle_wh.jpg'), uri116: require('./circle_wh.jpg'),uri117: require('./circle_wh.jpg'),  uri118: require('./circle_wh.jpg'), uri119: require('./circle_wh.jpg'), uri120: require('./circle_wh.jpg'),
            uri121: require('./circle_wh.jpg'),  uri122: require('./circle_wh.jpg'), uri123: require('./circle_wh.jpg'), uri124: require('./circle_wh.jpg'),uri125: require('./circle_wh.jpg'),  uri126: require('./circle_wh.jpg'), uri127: require('./circle_wh.jpg'), uri128: require('./circle_wh.jpg'),uri129: require('./circle_wh.jpg'),  uri130: require('./circle_wh.jpg'), uri131: require('./circle_wh.jpg'), uri132: require('./circle_wh.jpg'),uri133: require('./circle_wh.jpg'),  uri134: require('./circle_wh.jpg'), uri135: require('./circle_wh.jpg'), uri136: require('./circle_wh.jpg'),uri137: require('./circle_wh.jpg'),  uri138: require('./circle_wh.jpg'), uri139: require('./circle_wh.jpg'), uri140: require('./circle_wh.jpg'),uri141: require('./circle_wh.jpg'),  uri142: require('./circle_wh.jpg'), uri143: require('./circle_wh.jpg'), uri144: require('./circle_wh.jpg'),uri145: require('./circle_wh.jpg'),  uri146: require('./circle_wh.jpg'), uri147: require('./circle_wh.jpg'), uri148: require('./circle_wh.jpg'),uri149: require('./circle_wh.jpg'),  uri150: require('./circle_wh.jpg'), uri151: require('./circle_wh.jpg'), uri152: require('./circle_wh.jpg'),uri153: require('./circle_wh.jpg'),  uri154: require('./circle_wh.jpg'), uri155: require('./circle_wh.jpg'), uri156: require('./circle_wh.jpg'),uri157: require('./circle_wh.jpg'),  uri158: require('./circle_wh.jpg'), uri159: require('./circle_wh.jpg'), uri160: require('./circle_wh.jpg'),

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
        let that = this;
        this.setState({changeTask1:'', uri1: require('./circle_wh.jpg'),  uri2: require('./circle_wh.jpg'), uri3: require('./circle_wh.jpg'), uri4: require('./circle_wh.jpg'),uri5: require('./circle_wh.jpg'),  uri6: require('./circle_wh.jpg'), uri7: require('./circle_wh.jpg'), uri8: require('./circle_wh.jpg'),uri9: require('./circle_wh.jpg'),  uri10: require('./circle_wh.jpg'), uri11: require('./circle_wh.jpg'), uri12: require('./circle_wh.jpg'),uri13: require('./circle_wh.jpg'),  uri14: require('./circle_wh.jpg'), uri15: require('./circle_wh.jpg'), uri16: require('./circle_wh.jpg'),uri17: require('./circle_wh.jpg'),  uri18: require('./circle_wh.jpg'), uri19: require('./circle_wh.jpg'), uri20: require('./circle_wh.jpg'),uri21: require('./circle_wh.jpg'),  uri22: require('./circle_wh.jpg'), uri23: require('./circle_wh.jpg'), uri24: require('./circle_wh.jpg'),uri25: require('./circle_wh.jpg'),  uri26: require('./circle_wh.jpg'), uri27: require('./circle_wh.jpg'), uri28: require('./circle_wh.jpg'),uri29: require('./circle_wh.jpg'),  uri30: require('./circle_wh.jpg'), uri31: require('./circle_wh.jpg'), uri32: require('./circle_wh.jpg'),uri33: require('./circle_wh.jpg'),  uri34: require('./circle_wh.jpg'), uri35: require('./circle_wh.jpg'), uri36: require('./circle_wh.jpg'),uri37: require('./circle_wh.jpg'),  uri38: require('./circle_wh.jpg'), uri39: require('./circle_wh.jpg'), uri40: require('./circle_wh.jpg'),
            changeTask2:'',uri41: require('./circle_wh.jpg'),  uri42: require('./circle_wh.jpg'), uri43: require('./circle_wh.jpg'), uri44: require('./circle_wh.jpg'),uri45: require('./circle_wh.jpg'),  uri46: require('./circle_wh.jpg'), uri47: require('./circle_wh.jpg'), uri48: require('./circle_wh.jpg'),uri49: require('./circle_wh.jpg'),  uri50: require('./circle_wh.jpg'), uri51: require('./circle_wh.jpg'), uri52: require('./circle_wh.jpg'),uri53: require('./circle_wh.jpg'),  uri54: require('./circle_wh.jpg'), uri55: require('./circle_wh.jpg'), uri56: require('./circle_wh.jpg'),uri57: require('./circle_wh.jpg'),  uri58: require('./circle_wh.jpg'), uri59: require('./circle_wh.jpg'), uri60: require('./circle_wh.jpg'),uri61: require('./circle_wh.jpg'),  uri62: require('./circle_wh.jpg'), uri63: require('./circle_wh.jpg'), uri64: require('./circle_wh.jpg'),uri65: require('./circle_wh.jpg'),  uri66: require('./circle_wh.jpg'), uri67: require('./circle_wh.jpg'), uri68: require('./circle_wh.jpg'),uri69: require('./circle_wh.jpg'),  uri70: require('./circle_wh.jpg'), uri71: require('./circle_wh.jpg'), uri72: require('./circle_wh.jpg'),uri73: require('./circle_wh.jpg'),  uri74: require('./circle_wh.jpg'), uri75: require('./circle_wh.jpg'), uri76: require('./circle_wh.jpg'),uri77: require('./circle_wh.jpg'),  uri78: require('./circle_wh.jpg'), uri79: require('./circle_wh.jpg'), uri80: require('./circle_wh.jpg'),
            changeTask3:'',uri81: require('./circle_wh.jpg'),  uri82: require('./circle_wh.jpg'), uri83: require('./circle_wh.jpg'), uri84: require('./circle_wh.jpg'),uri85: require('./circle_wh.jpg'),  uri86: require('./circle_wh.jpg'), uri87: require('./circle_wh.jpg'), uri88: require('./circle_wh.jpg'),uri89: require('./circle_wh.jpg'),  uri90: require('./circle_wh.jpg'), uri91: require('./circle_wh.jpg'), uri92: require('./circle_wh.jpg'),uri93: require('./circle_wh.jpg'),  uri94: require('./circle_wh.jpg'), uri95: require('./circle_wh.jpg'), uri96: require('./circle_wh.jpg'),uri97: require('./circle_wh.jpg'),  uri98: require('./circle_wh.jpg'), uri99: require('./circle_wh.jpg'), uri100: require('./circle_wh.jpg'),uri101: require('./circle_wh.jpg'),  uri102: require('./circle_wh.jpg'), uri103: require('./circle_wh.jpg'), uri104: require('./circle_wh.jpg'),uri105: require('./circle_wh.jpg'),  uri106: require('./circle_wh.jpg'), uri107: require('./circle_wh.jpg'), uri108: require('./circle_wh.jpg'),uri109: require('./circle_wh.jpg'),  uri110: require('./circle_wh.jpg'), uri111: require('./circle_wh.jpg'), uri112: require('./circle_wh.jpg'),uri113: require('./circle_wh.jpg'),  uri114: require('./circle_wh.jpg'), uri115: require('./circle_wh.jpg'), uri116: require('./circle_wh.jpg'),uri117: require('./circle_wh.jpg'),  uri118: require('./circle_wh.jpg'), uri119: require('./circle_wh.jpg'), uri120: require('./circle_wh.jpg'),
            changeTask4:'',uri121: require('./circle_wh.jpg'),  uri122: require('./circle_wh.jpg'), uri123: require('./circle_wh.jpg'), uri124: require('./circle_wh.jpg'),uri125: require('./circle_wh.jpg'),  uri126: require('./circle_wh.jpg'), uri127: require('./circle_wh.jpg'), uri128: require('./circle_wh.jpg'),uri129: require('./circle_wh.jpg'),  uri130: require('./circle_wh.jpg'), uri131: require('./circle_wh.jpg'), uri132: require('./circle_wh.jpg'),uri133: require('./circle_wh.jpg'),  uri134: require('./circle_wh.jpg'), uri135: require('./circle_wh.jpg'), uri136: require('./circle_wh.jpg'),uri137: require('./circle_wh.jpg'),  uri138: require('./circle_wh.jpg'), uri139: require('./circle_wh.jpg'), uri140: require('./circle_wh.jpg'),uri141: require('./circle_wh.jpg'),  uri142: require('./circle_wh.jpg'), uri143: require('./circle_wh.jpg'), uri144: require('./circle_wh.jpg'),uri145: require('./circle_wh.jpg'),  uri146: require('./circle_wh.jpg'), uri147: require('./circle_wh.jpg'), uri148: require('./circle_wh.jpg'),uri149: require('./circle_wh.jpg'),  uri150: require('./circle_wh.jpg'), uri151: require('./circle_wh.jpg'), uri152: require('./circle_wh.jpg'),uri153: require('./circle_wh.jpg'),  uri154: require('./circle_wh.jpg'), uri155: require('./circle_wh.jpg'), uri156: require('./circle_wh.jpg'),uri157: require('./circle_wh.jpg'),  uri158: require('./circle_wh.jpg'), uri159: require('./circle_wh.jpg'), uri160: require('./circle_wh.jpg'),

        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key1`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask1 : ''});
                }
                if(child.val() !==''){
                    that.setState({key1 : child.val()});
                    this.task_row_one(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key2`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask2 : ''});
                }
                if(child.val() !==''){
                    that.setState({key2 : child.val()});
                    this.task_row_two(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key3`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask3 : ''});
                }
                if(child.val() !==''){
                    that.setState({key3 : child.val()});
                    this.task_row_three(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key4`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask4 : ''});
                }
                if(child.val() !==''){
                    that.setState({key4 : child.val()});
                    this.task_row_four(child.val());
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
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key2`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask2 : ''});
                }
                if(child.val() !==''){
                    that.setState({key2 : child.val()});
                    this.task_row_two(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key3`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask3 : ''});
                }
                if(child.val() !==''){
                    that.setState({key3 : child.val()});
                    this.task_row_three(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key4`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask4 : ''});
                }
                if(child.val() !==''){
                    that.setState({key4 : child.val()});
                    this.task_row_four(child.val());
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

    task_row_two(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key2 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key2}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask2 : child.val()});
                    this.bubble_row_two();
                }
            });
        });
    }

    task_row_three(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key3 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key3}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask3 : child.val()});
                    this.bubble_row_three();
                }
            });
        });
    }

    task_row_four(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key4 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key4}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask4 : child.val()});
                    this.bubble_row_four();
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

    bubble_row_two(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri41: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri41:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri42: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri42:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri43: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri43:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri44: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri44:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri45: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri45:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri46: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri46:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri47: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri47:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri48: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri48:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri49: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri49:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri50: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri50:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri51: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri51:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri52: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri52:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri53: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri53:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri54: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri54:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri55: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri55:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri56: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri56:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri57: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri57:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri58: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri58:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri59: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri59:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri60: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri60:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri61: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri61:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri62: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri62:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri63: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri63:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri64: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri64:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri65: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri65:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri66: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri66:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri67: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri67:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri68: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri68:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri69: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri69:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri70: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri70:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri71: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri71:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri72: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri72:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri73: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri73:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri74: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri74:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri75: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri75:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri76: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri76:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri77: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri77:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri78: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri78:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri79: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri79:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask2}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri80: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri80:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_three(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri81: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri81:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri82: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri82:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri83: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri83:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri84: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri84:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri85: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri85:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri86: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri86:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri87: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri87:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri88: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri88:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri89: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri89:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri90: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri90:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri91: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri91:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri92: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri92:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri93: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri93:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri94: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri94:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri95: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri95:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri96: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri96:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri97: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri97:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri98: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri98:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri99: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri99:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri100: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri100:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri101: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri101:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri102: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri102:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri103: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri103:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri104: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri104:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri105: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri105:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri106: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri106:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri107: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri107:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri108: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri108:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri109: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri109:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri110: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri110:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri111: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri111:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri112: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri112:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri113: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri113:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri114: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri114:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri115: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri115:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri116: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri116:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri117: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri117:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri118: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri118:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri119: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri119:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask3}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri120: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri120:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_four(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri121: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri121:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri122: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri122:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri123: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri123:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri124: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri124:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri125: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri125:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri126: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri126:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri127: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri127:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri128: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri128:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri129: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri129:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri130: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri130:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri131: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri131:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri132: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri132:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri133: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri133:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri134: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri134:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri135: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri135:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri136: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri136:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri137: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri137:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri138: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri138:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri139: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri139:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri140: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri140:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri141: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri141:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri142: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri142:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri143: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri143:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri144: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri144:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri145: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri145:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri146: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri146:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri147: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri147:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri148: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri148:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri149: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri149:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri150: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri150:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri151: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri151:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri152: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri152:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri153: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri153:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri154: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri154:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri155: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri155:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri156: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri156:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri157: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri157:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri158: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri158:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri159: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri159:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask4}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri160: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri160:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    handleEditTask1=(event)=>{
        this.setState({
            changeTask1: event.target.value
        });
    };

    handleEditTask2=(event)=>{
        this.setState({
           changeTask2: event.target.value
        });
    };

    handleEditTask3=(event)=>{
        this.setState({
            changeTask3: event.target.value
        });
    };

    handleEditTask4=(event)=>{
        this.setState({
            changeTask4: event.target.value
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

    addTask2=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key2: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask2 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key2`).set({ key: key });
        alert("Task Added");
    };

    addTask3=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key3: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask3 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key3`).set({ key: key });
        alert("Task Added");
    };

    addTask4=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key4: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask4 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key4`).set({ key: key });
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

    delTask2=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key2;
        let name = this.state.changeTask2;
        let key2 = 'key2';
        console.log(key);
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key2).set(null);
        this.setState({
            changeTask2:'',uri41: require('./circle_wh.jpg'),  uri42: require('./circle_wh.jpg'), uri43: require('./circle_wh.jpg'), uri44: require('./circle_wh.jpg'),uri45: require('./circle_wh.jpg'),  uri46: require('./circle_wh.jpg'), uri47: require('./circle_wh.jpg'), uri48: require('./circle_wh.jpg'),uri49: require('./circle_wh.jpg'),  uri50: require('./circle_wh.jpg'), uri51: require('./circle_wh.jpg'), uri52: require('./circle_wh.jpg'),uri53: require('./circle_wh.jpg'),  uri54: require('./circle_wh.jpg'), uri55: require('./circle_wh.jpg'), uri56: require('./circle_wh.jpg'),uri57: require('./circle_wh.jpg'),  uri58: require('./circle_wh.jpg'), uri59: require('./circle_wh.jpg'), uri60: require('./circle_wh.jpg'),uri61: require('./circle_wh.jpg'),  uri62: require('./circle_wh.jpg'), uri63: require('./circle_wh.jpg'), uri64: require('./circle_wh.jpg'),uri65: require('./circle_wh.jpg'),  uri66: require('./circle_wh.jpg'), uri67: require('./circle_wh.jpg'), uri68: require('./circle_wh.jpg'),uri69: require('./circle_wh.jpg'),  uri70: require('./circle_wh.jpg'), uri71: require('./circle_wh.jpg'), uri72: require('./circle_wh.jpg'),uri73: require('./circle_wh.jpg'),  uri74: require('./circle_wh.jpg'), uri75: require('./circle_wh.jpg'), uri76: require('./circle_wh.jpg'),uri77: require('./circle_wh.jpg'),  uri78: require('./circle_wh.jpg'), uri79: require('./circle_wh.jpg'), uri80: require('./circle_wh.jpg'),
        })
    };

    delTask3=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key3;
        let name = this.state.changeTask3;
        let key3 = 'key3';
        console.log(key);
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key3).set(null);
        this.setState({
            changeTask3:'',
            uri81: require('./circle_wh.jpg'),  uri82: require('./circle_wh.jpg'), uri83: require('./circle_wh.jpg'), uri84: require('./circle_wh.jpg'),uri85: require('./circle_wh.jpg'),  uri86: require('./circle_wh.jpg'), uri87: require('./circle_wh.jpg'), uri88: require('./circle_wh.jpg'),uri89: require('./circle_wh.jpg'),  uri90: require('./circle_wh.jpg'), uri91: require('./circle_wh.jpg'), uri92: require('./circle_wh.jpg'),uri93: require('./circle_wh.jpg'),  uri94: require('./circle_wh.jpg'), uri95: require('./circle_wh.jpg'), uri96: require('./circle_wh.jpg'),uri97: require('./circle_wh.jpg'),  uri98: require('./circle_wh.jpg'), uri99: require('./circle_wh.jpg'), uri100: require('./circle_wh.jpg'),uri101: require('./circle_wh.jpg'),  uri102: require('./circle_wh.jpg'), uri103: require('./circle_wh.jpg'), uri104: require('./circle_wh.jpg'),uri105: require('./circle_wh.jpg'),  uri106: require('./circle_wh.jpg'), uri107: require('./circle_wh.jpg'), uri108: require('./circle_wh.jpg'),uri109: require('./circle_wh.jpg'),  uri110: require('./circle_wh.jpg'), uri111: require('./circle_wh.jpg'), uri112: require('./circle_wh.jpg'),uri113: require('./circle_wh.jpg'),  uri114: require('./circle_wh.jpg'), uri115: require('./circle_wh.jpg'), uri116: require('./circle_wh.jpg'),uri117: require('./circle_wh.jpg'),  uri118: require('./circle_wh.jpg'), uri119: require('./circle_wh.jpg'), uri120: require('./circle_wh.jpg'),
        })
    };

    delTask4=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key4;
        let name = this.state.changeTask4;
        let key4 = 'key4';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key4).set(null);
        this.setState({
            changeTask4:'',
            uri121: require('./circle_wh.jpg'),  uri122: require('./circle_wh.jpg'), uri123: require('./circle_wh.jpg'), uri124: require('./circle_wh.jpg'),uri125: require('./circle_wh.jpg'),  uri126: require('./circle_wh.jpg'), uri127: require('./circle_wh.jpg'), uri128: require('./circle_wh.jpg'),uri129: require('./circle_wh.jpg'),  uri130: require('./circle_wh.jpg'), uri131: require('./circle_wh.jpg'), uri132: require('./circle_wh.jpg'),uri133: require('./circle_wh.jpg'),  uri134: require('./circle_wh.jpg'), uri135: require('./circle_wh.jpg'), uri136: require('./circle_wh.jpg'),uri137: require('./circle_wh.jpg'),  uri138: require('./circle_wh.jpg'), uri139: require('./circle_wh.jpg'), uri140: require('./circle_wh.jpg'),uri141: require('./circle_wh.jpg'),  uri142: require('./circle_wh.jpg'), uri143: require('./circle_wh.jpg'), uri144: require('./circle_wh.jpg'),uri145: require('./circle_wh.jpg'),  uri146: require('./circle_wh.jpg'), uri147: require('./circle_wh.jpg'), uri148: require('./circle_wh.jpg'),uri149: require('./circle_wh.jpg'),  uri150: require('./circle_wh.jpg'), uri151: require('./circle_wh.jpg'), uri152: require('./circle_wh.jpg'),uri153: require('./circle_wh.jpg'),  uri154: require('./circle_wh.jpg'), uri155: require('./circle_wh.jpg'), uri156: require('./circle_wh.jpg'),uri157: require('./circle_wh.jpg'),  uri158: require('./circle_wh.jpg'), uri159: require('./circle_wh.jpg'), uri160: require('./circle_wh.jpg'),
        })
    };

    changeLogo1 =()=>{
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
    };
    changeLogo2 =()=>{
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
    };
    changeLogo3 =()=>{
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
    };
    changeLogo4 =()=>{
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
    };
    changeLogo5 =()=>{
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
    };
    changeLogo6 =()=>{
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
    };
    changeLogo7 =()=>{
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
    };
    changeLogo8 =()=>{
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
    };
    changeLogo9 =()=>{
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
    };
    changeLogo10=()=>{
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
    };
    changeLogo11=()=>{
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
    };
    changeLogo12=()=>{
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
    };
    changeLogo13=()=>{
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
    };
    changeLogo14=()=>{
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
    };
    changeLogo15=()=>{
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
    };
    changeLogo16=()=>{
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
    };
    changeLogo17=()=>{
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
    };
    changeLogo18=()=>{
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
    };
    changeLogo19=()=>{
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
    };
    changeLogo20=()=>{
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
    };
    changeLogo21=()=>{
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
    };
    changeLogo22=()=>{
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
    };
    changeLogo23=()=>{
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
    };
    changeLogo24=()=>{
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
    };
    changeLogo25=()=>{
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
    };
    changeLogo26=()=>{
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
    };
    changeLogo27=()=>{
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
    };
    changeLogo28=()=>{
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
    };
    changeLogo29=()=>{
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
    };
    changeLogo30=()=>{
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
    };
    changeLogo31=()=>{
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
    };
    changeLogo32=()=>{
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
    };
    changeLogo33=()=>{
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
    };
    changeLogo34=()=>{
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
    };
    changeLogo35=()=>{
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
    };
    changeLogo36=()=>{
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
    };
    changeLogo37=()=>{
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
    };
    changeLogo38=()=>{
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
    };
    changeLogo39=()=>{
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
    };
    changeLogo40=()=>{
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
    changeLogo41=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri41!==require('./circle_bl.jpg')) {
            this.setState({
                uri41: require('./circle_bl.jpg')
            });
            console.log(this.state.uri41);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });
        }
        if(this.state.uri41===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri41:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri41);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });
        }
    };
    changeLogo42=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri42!==require('./circle_bl.jpg')) {
            this.setState({
                uri42: require('./circle_bl.jpg')
            });
            console.log(this.state.uri42);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });
        }
        if(this.state.uri42===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri42:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri42);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });
        }
    };
    changeLogo43=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri43!==require('./circle_bl.jpg')) {
            this.setState({
                uri43: require('./circle_bl.jpg')
            });
            console.log(this.state.uri43);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });
        }
        if(this.state.uri43===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri43:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri43);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });
        }
    };
    changeLogo44=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri44!==require('./circle_bl.jpg')) {
            this.setState({
                uri44: require('./circle_bl.jpg')
            });
            console.log(this.state.uri44);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });
        }
        if(this.state.uri44===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri44:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri44);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });
        }
    };
    changeLogo45=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri45!==require('./circle_bl.jpg')) {
            this.setState({
                uri45: require('./circle_bl.jpg')
            });
            console.log(this.state.uri45);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });
        }
        if(this.state.uri45===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri45:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri45);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });
        }
    };
    changeLogo46=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri46!==require('./circle_bl.jpg')) {
            this.setState({
                uri46: require('./circle_bl.jpg')
            });
            console.log(this.state.uri46);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });
        }
        if(this.state.uri46===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri46:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri46);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });
        }
    };
    changeLogo47=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        let date = this.state.nDate;
        if(this.state.uri47!==require('./circle_bl.jpg')) {
            this.setState({
                uri47: require('./circle_bl.jpg')
            });
            console.log(this.state.uri47);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });
        }
        if(this.state.uri47===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri47:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri47);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });
        }
    };
    changeLogo48=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri48!==require('./circle_bl.jpg')) {
            this.setState({
                uri48: require('./circle_bl.jpg')
            });
            console.log(this.state.uri48);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });
        }
        if(this.state.uri48===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri48:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri48);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });
        }
    };
    changeLogo49=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        console.log(name);
        let date = this.state.nDate;
        if(this.state.uri49!==require('./circle_bl.jpg')) {
            this.setState({
                uri49: require('./circle_bl.jpg')
            });
            console.log(this.state.uri49);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });
        }
        if(this.state.uri49===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri49:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri49);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });
        }
    };
    changeLogo50=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        let date = this.state.nDate;
        if(this.state.uri50!==require('./circle_bl.jpg')) {
            this.setState({
                uri50: require('./circle_bl.jpg')
            });
            console.log(this.state.uri50);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });
        }
        if(this.state.uri50===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri50:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri50);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });
        }
    };
    changeLogo51=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        let date = this.state.nDate;
        if(this.state.uri51!==require('./circle_bl.jpg')) {
            this.setState({
                uri51: require('./circle_bl.jpg')
            });
            console.log(this.state.uri51);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });
        }
        if(this.state.uri51===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri51:require('./circle_wh.jpg')
                }
            );
            console.log(this.state.uri51);
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });
        }
    };
    changeLogo52=()=>{
        let user = firebase.auth().currentUser;
        let name = this.state.changeTask2;
        let date = this.state.nDate;
        if(this.state.uri52!==require('./circle_bl.jpg')) {
            this.setState({
                uri52: require('./circle_bl.jpg')
            });
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });
        }
        if(this.state.uri52===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri52:require('./circle_wh.jpg')
                }
            );
            firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });
        }
    };
    changeLogo53=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri53!==require('./circle_bl.jpg')) {
            this.setState({
                uri53: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri53===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri53:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo54=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri54!==require('./circle_bl.jpg')) {
            this.setState({
                uri54: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri54===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri54:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo55=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri55!==require('./circle_bl.jpg')) {
            this.setState({
                uri55: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri55===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri55:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo56=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri56!==require('./circle_bl.jpg')) {
            this.setState({
                uri56: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri56===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri56:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo57=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri57!==require('./circle_bl.jpg')) {
            this.setState({
                uri57: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri57===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri57:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo58=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri58!==require('./circle_bl.jpg')) {
            this.setState({
                uri58: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri58===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri58:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo59=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri59!==require('./circle_bl.jpg')) {
            this.setState({
                uri59: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri59===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri59:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo60=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri60!==require('./circle_bl.jpg')) {
            this.setState({
                uri60: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri60===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri60:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo61=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri61!==require('./circle_bl.jpg')) {
            this.setState({
                uri61: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri61===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri61:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo62=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri62!==require('./circle_bl.jpg')) {
            this.setState({
                uri62: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri62===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri62:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo63=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri63!==require('./circle_bl.jpg')) {
            this.setState({
                uri63: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri63===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri63:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo64=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri64!==require('./circle_bl.jpg')) {
            this.setState({
                uri64: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri64===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri64:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo65=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri65!==require('./circle_bl.jpg')) {
            this.setState({
                uri65: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri65===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri65:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo66=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri66!==require('./circle_bl.jpg')) {
            this.setState({
                uri66: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri66===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri66:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo67=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri67!==require('./circle_bl.jpg')) {
            this.setState({
                uri67: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri67===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri67:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo68=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri68!==require('./circle_bl.jpg')) {
            this.setState({
                uri68: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri68===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri68:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo69=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri69!==require('./circle_bl.jpg')) {
            this.setState({
                uri69: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri69===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri69:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo70=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri70!==require('./circle_bl.jpg')) {
            this.setState({
                uri70: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri70===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri70:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo71=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri71!==require('./circle_bl.jpg')) {
            this.setState({
                uri71: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri71===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri71:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo72=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri72!==require('./circle_bl.jpg')) {
            this.setState({
                uri72: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri72===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri72:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo73=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri73!==require('./circle_bl.jpg')) {
            this.setState({
                uri73: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri73===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri73:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo74=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri74!==require('./circle_bl.jpg')) {
            this.setState({
                uri74: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri74===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri74:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo75=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri75!==require('./circle_bl.jpg')) {
            this.setState({
                uri75: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri75===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri75:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo76=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri76!==require('./circle_bl.jpg')) {
            this.setState({
                uri76: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri76===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri76:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo77=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri77!==require('./circle_bl.jpg')) {
            this.setState({
                uri77: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri77===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri77:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo78=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri78!==require('./circle_bl.jpg')) {
            this.setState({
                uri78: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri78===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri78:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo79=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri79!==require('./circle_bl.jpg')) {
            this.setState({
                uri79: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri79===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri79:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo80=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask2;let date = this.state.nDate;
        if(this.state.uri80!==require('./circle_bl.jpg')) {
            this.setState({
                uri80: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri80===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri80:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo81=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri81!==require('./circle_bl.jpg')) {
            this.setState({
                uri81: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri81===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri81:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo82=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri82!==require('./circle_bl.jpg')) {
            this.setState({
                uri82: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri82===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri82:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo83=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri83!==require('./circle_bl.jpg')) {
            this.setState({
                uri83: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri83===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri83:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo84=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri84!==require('./circle_bl.jpg')) {
            this.setState({
                uri84: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri84===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri84:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo85=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri85!==require('./circle_bl.jpg')) {
            this.setState({
                uri85: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri85===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri85:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo86=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri86!==require('./circle_bl.jpg')) {
            this.setState({
                uri86: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri86===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri86:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo87=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri87!==require('./circle_bl.jpg')) {
            this.setState({
                uri87: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri87===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri87:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo88=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri88!==require('./circle_bl.jpg')) {
            this.setState({
                uri88: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri88===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri88:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo89=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri89!==require('./circle_bl.jpg')) {
            this.setState({
                uri89: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri89===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri89:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo90=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri90!==require('./circle_bl.jpg')) {
            this.setState({
                uri90: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri90===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri90:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo91=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri91!==require('./circle_bl.jpg')) {
            this.setState({
                uri91: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri91===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri91:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo92=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri92!==require('./circle_bl.jpg')) {
            this.setState({
                uri92: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri92===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri92:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo93=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri93!==require('./circle_bl.jpg')) {
            this.setState({
                uri93: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri93===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri93:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo94=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri94!==require('./circle_bl.jpg')) {
            this.setState({
                uri94: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri94===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri94:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo95=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri95!==require('./circle_bl.jpg')) {
            this.setState({
                uri95: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri95===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri95:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo96=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri96!==require('./circle_bl.jpg')) {
            this.setState({
                uri96: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri96===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri96:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo97=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri97!==require('./circle_bl.jpg')) {
            this.setState({
                uri97: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri97===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri97:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo98=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri98!==require('./circle_bl.jpg')) {
            this.setState({
                uri98: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri98===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri98:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo99=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri99!==require('./circle_bl.jpg')) {
            this.setState({
                uri99: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri99===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri99:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo100=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri100!==require('./circle_bl.jpg')) {
            this.setState({
                uri100: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri100===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri100:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo101=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri101!==require('./circle_bl.jpg')) {
            this.setState({
                uri101: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri101===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri101:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo102=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri102!==require('./circle_bl.jpg')) {
            this.setState({
                uri102: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri102===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri102:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo103=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri103!==require('./circle_bl.jpg')) {
            this.setState({
                uri103: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri103===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri103:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo104=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri104!==require('./circle_bl.jpg')) {
            this.setState({
                uri104: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri104===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri104:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo105=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri105!==require('./circle_bl.jpg')) {
            this.setState({
                uri105: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri105===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri105:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo106=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri106!==require('./circle_bl.jpg')) {
            this.setState({
                uri106: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri106===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri106:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo107=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri107!==require('./circle_bl.jpg')) {
            this.setState({
                uri107: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri107===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri107:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo108=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri108!==require('./circle_bl.jpg')) {
            this.setState({
                uri108: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri108===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri108:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo109=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri109!==require('./circle_bl.jpg')) {
            this.setState({
                uri109: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri109===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri109:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo110=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri110!==require('./circle_bl.jpg')) {
            this.setState({
                uri110: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri110===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri110:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo111=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri111!==require('./circle_bl.jpg')) {
            this.setState({
                uri111: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri111===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri111:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo112=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri112!==require('./circle_bl.jpg')) {
            this.setState({
                uri112: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri112===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri112:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo113=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri113!==require('./circle_bl.jpg')) {
            this.setState({
                uri113: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri113===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri113:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo114=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri114!==require('./circle_bl.jpg')) {
            this.setState({
                uri114: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri114===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri114:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo115=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri115!==require('./circle_bl.jpg')) {
            this.setState({
                uri115: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri115===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri115:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo116=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri116!==require('./circle_bl.jpg')) {
            this.setState({
                uri116: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri116===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri116:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo117=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri117!==require('./circle_bl.jpg')) {
            this.setState({
                uri117: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri117===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri117:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo118=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri118!==require('./circle_bl.jpg')) {
            this.setState({
                uri118: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri118===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri118:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo119=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri119!==require('./circle_bl.jpg')) {
            this.setState({
                uri119: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri119===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri119:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo120=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask3;let date = this.state.nDate;
        if(this.state.uri120!==require('./circle_bl.jpg')) {
            this.setState({
                uri120: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri120===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri120:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo121=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri121!==require('./circle_bl.jpg')) {
            this.setState({
                uri121: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri121===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri121:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo122=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri122!==require('./circle_bl.jpg')) {
            this.setState({
                uri122: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri122===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri122:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo123=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri123!==require('./circle_bl.jpg')) {
            this.setState({
                uri123: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri123===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri123:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo124=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri124!==require('./circle_bl.jpg')) {
            this.setState({
                uri124: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri124===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri124:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo125=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri125!==require('./circle_bl.jpg')) {
            this.setState({
                uri125: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri125===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri125:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo126=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri126!==require('./circle_bl.jpg')) {
            this.setState({
                uri126: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri126===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri126:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo127=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri127!==require('./circle_bl.jpg')) {
            this.setState({
                uri127: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri127===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri127:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo128=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri128!==require('./circle_bl.jpg')) {
            this.setState({
                uri128: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri128===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri128:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo129=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri129!==require('./circle_bl.jpg')) {
            this.setState({
                uri129: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri129===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri129:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo130=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri130!==require('./circle_bl.jpg')) {
            this.setState({
                uri130: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri130===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri130:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo131=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri131!==require('./circle_bl.jpg')) {
            this.setState({
                uri131: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri131===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri131:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo132=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri132!==require('./circle_bl.jpg')) {
            this.setState({
                uri132: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri132===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri132:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo133=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri133!==require('./circle_bl.jpg')) {
            this.setState({
                uri133: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri133===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri133:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo134=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri134!==require('./circle_bl.jpg')) {
            this.setState({
                uri134: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri134===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri134:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo135=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri135!==require('./circle_bl.jpg')) {
            this.setState({
                uri135: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri135===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri135:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo136=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri136!==require('./circle_bl.jpg')) {
            this.setState({
                uri136: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri136===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri136:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo137=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri137!==require('./circle_bl.jpg')) {
            this.setState({
                uri137: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri137===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri137:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo138=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri138!==require('./circle_bl.jpg')) {
            this.setState({
                uri138: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri138===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri138:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo139=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri139!==require('./circle_bl.jpg')) {
            this.setState({
                uri139: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri139===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri139:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo140=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri140!==require('./circle_bl.jpg')) {
            this.setState({
                uri140: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri140===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri140:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo141=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri141!==require('./circle_bl.jpg')) {
            this.setState({
                uri141: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri141===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri141:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo142=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri142!==require('./circle_bl.jpg')) {
            this.setState({
                uri142: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri142===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri142:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo143=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri143!==require('./circle_bl.jpg')) {
            this.setState({
                uri143: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri143===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri143:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo144=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri144!==require('./circle_bl.jpg')) {
            this.setState({
                uri144: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri144===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri144:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo145=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri145!==require('./circle_bl.jpg')) {
            this.setState({
                uri145: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri145===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri145:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo146=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri146!==require('./circle_bl.jpg')) {
            this.setState({
                uri146: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri146===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri146:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo147=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri147!==require('./circle_bl.jpg')) {
            this.setState({
                uri147: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri147===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri147:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo148=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri148!==require('./circle_bl.jpg')) {
            this.setState({
                uri148: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri148===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri148:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo149=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri149!==require('./circle_bl.jpg')) {
            this.setState({
                uri149: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri149===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri149:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo150=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri150!==require('./circle_bl.jpg')) {
            this.setState({
                uri150: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri150===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri150:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo151=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri151!==require('./circle_bl.jpg')) {
            this.setState({
                uri151: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri151===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri151:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo152=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri152!==require('./circle_bl.jpg')) {
            this.setState({
                uri152: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri152===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri152:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo153=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri153!==require('./circle_bl.jpg')) {
            this.setState({
                uri153: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri153===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri153:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo154=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri154!==require('./circle_bl.jpg')) {
            this.setState({
                uri154: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri154===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri154:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo155=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri155!==require('./circle_bl.jpg')) {
            this.setState({
                uri155: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri155===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri155:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo156=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri156!==require('./circle_bl.jpg')) {
            this.setState({
                uri156: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri156===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri156:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo157=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri157!==require('./circle_bl.jpg')) {
            this.setState({
                uri157: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri157===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri157:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo158=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri158!==require('./circle_bl.jpg')) {
            this.setState({
                uri158: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri158===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri158:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo159=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri159!==require('./circle_bl.jpg')) {
            this.setState({
                uri159: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri159===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri159:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo160=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask4;let date = this.state.nDate;
        if(this.state.uri160!==require('./circle_bl.jpg')) {
            this.setState({
                uri160: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri160===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri160:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
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
                                <td><input type="textField" id="textBox1" className="first" maxLength={10}  value={this.state.changeTask1} onChange={this.handleEditTask1}/><button onClick={this.addTask1}>+</button><button onClick={this.delTask1}>-</button></td>
                                <td><img  id='id1'  className="first" src={this.state.uri1 } alt=''  height={20} onClick={this.changeLogo1 }/><img  id='id2'  className="first" src={this.state.uri2 } alt=''  height={20} onClick={this.changeLogo2 }/><img  id='id3'  className="first" src={this.state.uri3 } alt=''  height={20} onClick={this.changeLogo3 }/><img  id='id4'  className="first" src={this.state.uri4 } alt=''  height={20} onClick={this.changeLogo4 }/></td>
                                <td ><img id='id5'  className="first" src={this.state.uri5 } alt=''  height={20} onClick={this.changeLogo5 }/><img  id='id6'  className="first" src={this.state.uri6 } alt=''  height={20} onClick={this.changeLogo6 }/><img  id='id7'  className="first" src={this.state.uri7 } alt=''  height={20} onClick={this.changeLogo7 }/><img  id='id8'  className="first" src={this.state.uri8 } alt=''  height={20} onClick={this.changeLogo8 }/></td>
                                <td ><img id='id9'  className="first" src={this.state.uri9 } alt=''  height={20} onClick={this.changeLogo9 }/><img  id='id10' className="first" src={this.state.uri10} alt=''  height={20} onClick={this.changeLogo10}/><img  id='id11' className="first" src={this.state.uri11} alt=''  height={20} onClick={this.changeLogo11}/><img  id='id12' className="first" src={this.state.uri12} alt=''  height={20} onClick={this.changeLogo12}/></td>
                                <td ><img id='id13' className="first" src={this.state.uri13} alt=''  height={20} onClick={this.changeLogo13}/><img  id='id14' className="first" src={this.state.uri14} alt=''  height={20} onClick={this.changeLogo14}/><img  id='id15' className="first" src={this.state.uri15} alt=''  height={20} onClick={this.changeLogo15}/><img  id='id16' className="first" src={this.state.uri16} alt=''  height={20} onClick={this.changeLogo16}/></td>
                                <td ><img id='id17' className="first" src={this.state.uri17} alt=''  height={20} onClick={this.changeLogo17}/><img  id='id18' className="first" src={this.state.uri18} alt=''  height={20} onClick={this.changeLogo18}/><img  id='id19' className="first" src={this.state.uri19} alt=''  height={20} onClick={this.changeLogo19}/><img  id='id20' className="first" src={this.state.uri20} alt=''  height={20} onClick={this.changeLogo20}/></td>
                                <td ><img id='id21' className="first" src={this.state.uri21} alt=''  height={20} onClick={this.changeLogo21}/><img  id='id22' className="first" src={this.state.uri22} alt=''  height={20} onClick={this.changeLogo22}/><img  id='id23' className="first" src={this.state.uri23} alt=''  height={20} onClick={this.changeLogo23}/><img  id='id24' className="first" src={this.state.uri24} alt=''  height={20} onClick={this.changeLogo24}/></td>
                                <td ><img id='id25' className="first" src={this.state.uri25} alt=''  height={20} onClick={this.changeLogo25}/><img  id='id26' className="first" src={this.state.uri26} alt=''  height={20} onClick={this.changeLogo26}/><img  id='id27' className="first" src={this.state.uri27} alt=''  height={20} onClick={this.changeLogo27}/><img  id='id28' className="first" src={this.state.uri28} alt=''  height={20} onClick={this.changeLogo28}/></td>
                                <td ><img id='id29' className="first" src={this.state.uri29} alt=''  height={20} onClick={this.changeLogo29}/><img  id='id30' className="first" src={this.state.uri30} alt=''  height={20} onClick={this.changeLogo30}/><img  id='id31' className="first" src={this.state.uri31} alt=''  height={20} onClick={this.changeLogo31}/><img  id='id32' className="first" src={this.state.uri32} alt=''  height={20} onClick={this.changeLogo32}/></td>
                                <td ><img id='id33' className="first" src={this.state.uri33} alt=''  height={20} onClick={this.changeLogo33}/><img  id='id34' className="first" src={this.state.uri34} alt=''  height={20} onClick={this.changeLogo34}/><img  id='id35' className="first" src={this.state.uri35} alt=''  height={20} onClick={this.changeLogo35}/><img  id='id36' className="first" src={this.state.uri36} alt=''  height={20} onClick={this.changeLogo36}/></td>
                                <td ><img id='id37' className="first" src={this.state.uri37} alt=''  height={20} onClick={this.changeLogo37}/><img  id='id38' className="first" src={this.state.uri38} alt=''  height={20} onClick={this.changeLogo38}/><img  id='id39' className="first" src={this.state.uri39} alt=''  height={20} onClick={this.changeLogo39}/><img  id='id40' className="first" src={this.state.uri40} alt=''  height={20} onClick={this.changeLogo40}/></td>
                            </tr>
                            
                            <tr>
                                <td><input type="textField" id="textBox2" className="second" maxLength={10}  value={this.state.changeTask2} onChange={this.handleEditTask2}/><button onClick={this.addTask2}>+</button><button onClick={this.delTask2}>-</button></td>
                                <td><img  id='id41' className="second" src={this.state.uri41} alt=''  height={20} onClick={this.changeLogo41}/><img  id='id42' className="second" src={this.state.uri42} alt=''  height={20} onClick={this.changeLogo42}/><img  id='id43' className="second" src={this.state.uri43} alt=''  height={20} onClick={this.changeLogo43}/><img  id='id44' className="second" src={this.state.uri44} alt=''  height={20} onClick={this.changeLogo44}/></td>
                                <td ><img id='id45' className="second" src={this.state.uri45} alt=''  height={20} onClick={this.changeLogo45}/><img  id='id46' className="second" src={this.state.uri46} alt=''  height={20} onClick={this.changeLogo46}/><img  id='id47' className="second" src={this.state.uri47} alt=''  height={20} onClick={this.changeLogo47}/><img  id='id48' className="second" src={this.state.uri48} alt=''  height={20} onClick={this.changeLogo48}/></td>
                                <td ><img id='id49' className="second" src={this.state.uri49} alt=''  height={20} onClick={this.changeLogo49}/><img  id='id50' className="second" src={this.state.uri50} alt=''  height={20} onClick={this.changeLogo50}/><img  id='id51' className="second" src={this.state.uri51} alt=''  height={20} onClick={this.changeLogo51}/><img  id='id52' className="second" src={this.state.uri52} alt=''  height={20} onClick={this.changeLogo52}/></td>
                                <td ><img id='id53' className="second" src={this.state.uri53} alt=''  height={20} onClick={this.changeLogo53}/><img  id='id54' className="second" src={this.state.uri54} alt=''  height={20} onClick={this.changeLogo54}/><img  id='id55' className="second" src={this.state.uri55} alt=''  height={20} onClick={this.changeLogo55}/><img  id='id56' className="second" src={this.state.uri56} alt=''  height={20} onClick={this.changeLogo56}/></td>
                                <td ><img id='id57' className="second" src={this.state.uri57} alt=''  height={20} onClick={this.changeLogo57}/><img  id='id58' className="second" src={this.state.uri58} alt=''  height={20} onClick={this.changeLogo58}/><img  id='id59' className="second" src={this.state.uri59} alt=''  height={20} onClick={this.changeLogo59}/><img  id='id60' className="second" src={this.state.uri60} alt=''  height={20} onClick={this.changeLogo60}/></td>
                                <td ><img id='id61' className="second" src={this.state.uri61} alt=''  height={20} onClick={this.changeLogo61}/><img  id='id62' className="second" src={this.state.uri62} alt=''  height={20} onClick={this.changeLogo62}/><img  id='id63' className="second" src={this.state.uri63} alt=''  height={20} onClick={this.changeLogo63}/><img  id='id64' className="second" src={this.state.uri64} alt=''  height={20} onClick={this.changeLogo64}/></td>
                                <td ><img id='id65' className="second" src={this.state.uri65} alt=''  height={20} onClick={this.changeLogo65}/><img  id='id66' className="second" src={this.state.uri66} alt=''  height={20} onClick={this.changeLogo66}/><img  id='id67' className="second" src={this.state.uri67} alt=''  height={20} onClick={this.changeLogo67}/><img  id='id68' className="second" src={this.state.uri68} alt=''  height={20} onClick={this.changeLogo68}/></td>
                                <td ><img id='id69' className="second" src={this.state.uri69} alt=''  height={20} onClick={this.changeLogo69}/><img  id='id70' className="second" src={this.state.uri70} alt=''  height={20} onClick={this.changeLogo70}/><img  id='id71' className="second" src={this.state.uri71} alt=''  height={20} onClick={this.changeLogo71}/><img  id='id72' className="second" src={this.state.uri72} alt=''  height={20} onClick={this.changeLogo72}/></td>
                                <td ><img id='id73' className="second" src={this.state.uri73} alt=''  height={20} onClick={this.changeLogo73}/><img  id='id74' className="second" src={this.state.uri74} alt=''  height={20} onClick={this.changeLogo74}/><img  id='id75' className="second" src={this.state.uri75} alt=''  height={20} onClick={this.changeLogo75}/><img  id='id76' className="second" src={this.state.uri76} alt=''  height={20} onClick={this.changeLogo76}/></td>
                                <td ><img id='id77' className="second" src={this.state.uri77} alt=''  height={20} onClick={this.changeLogo77}/><img  id='id78' className="second" src={this.state.uri78} alt=''  height={20} onClick={this.changeLogo78}/><img  id='id79' className="second" src={this.state.uri79} alt=''  height={20} onClick={this.changeLogo79}/><img  id='id80' className="second" src={this.state.uri80} alt=''  height={20} onClick={this.changeLogo80}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox3" className="third" maxLength={10}  value={this.state.changeTask3} onChange={this.handleEditTask3}/><button onClick={this.addTask3}>+</button><button onClick={this.delTask3}>-</button></td>
                                <td><img  id='id81' className="third" src={this.state.uri81} alt=''  height={20} onClick={this.changeLogo81}/><img  id='id82' className="third" src={this.state.uri82} alt=''  height={20} onClick={this.changeLogo82}/><img  id='id83' className="third" src={this.state.uri83} alt=''  height={20} onClick={this.changeLogo83}/><img  id='id84' className="third" src={this.state.uri84} alt=''  height={20} onClick={this.changeLogo84}/></td>
                                <td ><img id='id85' className="third" src={this.state.uri85} alt=''  height={20} onClick={this.changeLogo85}/><img  id='id86' className="third" src={this.state.uri86} alt=''  height={20} onClick={this.changeLogo86}/><img  id='id87' className="third" src={this.state.uri87} alt=''  height={20} onClick={this.changeLogo87}/><img  id='id88' className="third" src={this.state.uri88} alt=''  height={20} onClick={this.changeLogo88}/></td>
                                <td ><img id='id89' className="third" src={this.state.uri89} alt=''  height={20} onClick={this.changeLogo89}/><img  id='id90' className="third" src={this.state.uri90} alt=''  height={20} onClick={this.changeLogo90}/><img  id='id91' className="third" src={this.state.uri91} alt=''  height={20} onClick={this.changeLogo91}/><img  id='id92' className="third" src={this.state.uri92} alt=''  height={20} onClick={this.changeLogo92}/></td>
                                <td ><img id='id93' className="third" src={this.state.uri93} alt=''  height={20} onClick={this.changeLogo93}/><img  id='id94' className="third" src={this.state.uri94} alt=''  height={20} onClick={this.changeLogo94}/><img  id='id95' className="third" src={this.state.uri95} alt=''  height={20} onClick={this.changeLogo95}/><img  id='id96' className="third" src={this.state.uri96} alt=''  height={20} onClick={this.changeLogo96}/></td>
                                <td ><img id='id97' className="third" src={this.state.uri97} alt=''  height={20} onClick={this.changeLogo97}/><img  id='id98' className="third" src={this.state.uri98} alt=''  height={20} onClick={this.changeLogo98}/><img  id='id99' className="third" src={this.state.uri99} alt=''  height={20} onClick={this.changeLogo99}/><img  id='id100' className="third" src={this.state.uri100} alt='' height={20} onClick={this.changeLogo100}/></td>
                                <td ><img id='id101' className="third" src={this.state.uri101} alt=''  height={20} onClick={this.changeLogo101}/><img  id='id102' className="third" src={this.state.uri102} alt=''  height={20} onClick={this.changeLogo102}/><img  id='id103' className="third" src={this.state.uri103} alt=''  height={20} onClick={this.changeLogo103}/><img  id='id104' className="third" src={this.state.uri104} alt=''  height={20} onClick={this.changeLogo104}/></td>
                                <td ><img id='id105' className="third" src={this.state.uri105} alt=''  height={20} onClick={this.changeLogo105}/><img  id='id106' className="third" src={this.state.uri106} alt=''  height={20} onClick={this.changeLogo106}/><img  id='id107' className="third" src={this.state.uri107} alt=''  height={20} onClick={this.changeLogo107}/><img  id='id108' className="third" src={this.state.uri108} alt=''  height={20} onClick={this.changeLogo108}/></td>
                                <td ><img id='id109' className="third" src={this.state.uri109} alt=''  height={20} onClick={this.changeLogo109}/><img  id='id110' className="third" src={this.state.uri110} alt=''  height={20} onClick={this.changeLogo110}/><img  id='id111' className="third" src={this.state.uri111} alt=''  height={20} onClick={this.changeLogo111}/><img  id='id112' className="third" src={this.state.uri112} alt=''  height={20} onClick={this.changeLogo112}/></td>
                                <td ><img id='id113' className="third" src={this.state.uri113} alt=''  height={20} onClick={this.changeLogo113}/><img  id='id114' className="third" src={this.state.uri114} alt=''  height={20} onClick={this.changeLogo114}/><img  id='id115' className="third" src={this.state.uri115} alt=''  height={20} onClick={this.changeLogo115}/><img  id='id116' className="third" src={this.state.uri116} alt=''  height={20} onClick={this.changeLogo116}/></td>
                                <td ><img id='id117' className="third" src={this.state.uri117} alt=''  height={20} onClick={this.changeLogo117}/><img  id='id118' className="third" src={this.state.uri118} alt=''  height={20} onClick={this.changeLogo118}/><img  id='id119' className="third" src={this.state.uri119} alt=''  height={20} onClick={this.changeLogo119}/><img  id='id120' className="third" src={this.state.uri120} alt=''  height={20} onClick={this.changeLogo120}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox4" className="four" maxLength={10}  value={this.state.changeTask4} onChange={this.handleEditTask4}/><button onClick={this.addTask4}>+</button><button onClick={this.delTask4}>-</button></td>
                                <td><img  id='id121' className="four" src={this.state.uri121} alt=''  height={20} onClick={this.changeLogo121}/><img  id='id122' className="four" src={this.state.uri122} alt=''  height={20} onClick={this.changeLogo122}/><img  id='id123' className="four" src={this.state.uri123} alt=''  height={20} onClick={this.changeLogo123}/><img  id='id124' className="four" src={this.state.uri124} alt=''  height={20} onClick={this.changeLogo124}/></td>
                                <td ><img id='id125' className="four" src={this.state.uri125} alt=''  height={20} onClick={this.changeLogo125}/><img  id='id126' className="four" src={this.state.uri126} alt=''  height={20} onClick={this.changeLogo126}/><img  id='id127' className="four" src={this.state.uri127} alt=''  height={20} onClick={this.changeLogo127}/><img  id='id128' className="four" src={this.state.uri128} alt=''  height={20} onClick={this.changeLogo128}/></td>
                                <td ><img id='id129' className="four" src={this.state.uri129} alt=''  height={20} onClick={this.changeLogo129}/><img  id='id130' className="four" src={this.state.uri130} alt=''  height={20} onClick={this.changeLogo130}/><img  id='id131' className="four" src={this.state.uri131} alt=''  height={20} onClick={this.changeLogo131}/><img  id='id132' className="four" src={this.state.uri132} alt=''  height={20} onClick={this.changeLogo132}/></td>
                                <td ><img id='id133' className="four" src={this.state.uri133} alt=''  height={20} onClick={this.changeLogo133}/><img  id='id134' className="four" src={this.state.uri134} alt=''  height={20} onClick={this.changeLogo134}/><img  id='id135' className="four" src={this.state.uri135} alt=''  height={20} onClick={this.changeLogo135}/><img  id='id136' className="four" src={this.state.uri136} alt=''  height={20} onClick={this.changeLogo136}/></td>
                                <td ><img id='id137' className="four" src={this.state.uri137} alt=''  height={20} onClick={this.changeLogo137}/><img  id='id138' className="four" src={this.state.uri138} alt=''  height={20} onClick={this.changeLogo138}/><img  id='id139' className="four" src={this.state.uri139} alt=''  height={20} onClick={this.changeLogo139}/><img  id='id140' className="four" src={this.state.uri140} alt=''  height={20} onClick={this.changeLogo140}/></td>
                                <td ><img id='id141' className="four" src={this.state.uri141} alt=''  height={20} onClick={this.changeLogo141}/><img  id='id142' className="four" src={this.state.uri142} alt=''  height={20} onClick={this.changeLogo142}/><img  id='id143' className="four" src={this.state.uri143} alt=''  height={20} onClick={this.changeLogo143}/><img  id='id144' className="four" src={this.state.uri144} alt=''  height={20} onClick={this.changeLogo144}/></td>
                                <td ><img id='id145' className="four" src={this.state.uri145} alt=''  height={20} onClick={this.changeLogo145}/><img  id='id146' className="four" src={this.state.uri146} alt=''  height={20} onClick={this.changeLogo146}/><img  id='id147' className="four" src={this.state.uri147} alt=''  height={20} onClick={this.changeLogo147}/><img  id='id148' className="four" src={this.state.uri148} alt=''  height={20} onClick={this.changeLogo148}/></td>
                                <td ><img id='id149' className="four" src={this.state.uri149} alt=''  height={20} onClick={this.changeLogo149}/><img  id='id150' className="four" src={this.state.uri150} alt=''  height={20} onClick={this.changeLogo150}/><img  id='id151' className="four" src={this.state.uri151} alt=''  height={20} onClick={this.changeLogo151}/><img  id='id152' className="four" src={this.state.uri152} alt=''  height={20} onClick={this.changeLogo152}/></td>
                                <td ><img id='id153' className="four" src={this.state.uri153} alt=''  height={20} onClick={this.changeLogo153}/><img  id='id154' className="four" src={this.state.uri154} alt=''  height={20} onClick={this.changeLogo154}/><img  id='id155' className="four" src={this.state.uri155} alt=''  height={20} onClick={this.changeLogo155}/><img  id='id156' className="four" src={this.state.uri156} alt=''  height={20} onClick={this.changeLogo156}/></td>
                                <td ><img id='id157' className="four" src={this.state.uri157} alt=''  height={20} onClick={this.changeLogo157}/><img  id='id158' className="four" src={this.state.uri158} alt=''  height={20} onClick={this.changeLogo158}/><img  id='id159' className="four" src={this.state.uri159} alt=''  height={20} onClick={this.changeLogo159}/><img  id='id160' className="four" src={this.state.uri160} alt=''  height={20} onClick={this.changeLogo160}/></td>
                            </tr>
                        </table>
                    </view>
                </div>
            </div>
        );
    }
}
export {taskPage};
