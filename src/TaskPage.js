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
            changeTask1: '',changeTask2:'',changeTask3:'',changeTask4:'',changeTask5:'',changeTask6:'',changeTask7:'',changeTask8:'',changeTask9:'',changeTask10:'',
            nDate:tDate,
            key1:'',key2:'',key3:'',key4:'',key5:'',key6:'',key7:'',key8:'',key9:'',key10:'',
            uri1: require('./circle_wh.jpg'),  uri2: require('./circle_wh.jpg'), uri3: require('./circle_wh.jpg'), uri4: require('./circle_wh.jpg'),uri5: require('./circle_wh.jpg'),  uri6: require('./circle_wh.jpg'), uri7: require('./circle_wh.jpg'), uri8: require('./circle_wh.jpg'),uri9: require('./circle_wh.jpg'),  uri10: require('./circle_wh.jpg'), uri11: require('./circle_wh.jpg'), uri12: require('./circle_wh.jpg'),uri13: require('./circle_wh.jpg'),  uri14: require('./circle_wh.jpg'), uri15: require('./circle_wh.jpg'), uri16: require('./circle_wh.jpg'),uri17: require('./circle_wh.jpg'),  uri18: require('./circle_wh.jpg'), uri19: require('./circle_wh.jpg'), uri20: require('./circle_wh.jpg'),uri21: require('./circle_wh.jpg'),  uri22: require('./circle_wh.jpg'), uri23: require('./circle_wh.jpg'), uri24: require('./circle_wh.jpg'),uri25: require('./circle_wh.jpg'),  uri26: require('./circle_wh.jpg'), uri27: require('./circle_wh.jpg'), uri28: require('./circle_wh.jpg'),uri29: require('./circle_wh.jpg'),  uri30: require('./circle_wh.jpg'), uri31: require('./circle_wh.jpg'), uri32: require('./circle_wh.jpg'),uri33: require('./circle_wh.jpg'),  uri34: require('./circle_wh.jpg'), uri35: require('./circle_wh.jpg'), uri36: require('./circle_wh.jpg'),uri37: require('./circle_wh.jpg'),  uri38: require('./circle_wh.jpg'), uri39: require('./circle_wh.jpg'), uri40: require('./circle_wh.jpg'),
            uri41: require('./circle_wh.jpg'),  uri42: require('./circle_wh.jpg'), uri43: require('./circle_wh.jpg'), uri44: require('./circle_wh.jpg'),uri45: require('./circle_wh.jpg'),  uri46: require('./circle_wh.jpg'), uri47: require('./circle_wh.jpg'), uri48: require('./circle_wh.jpg'),uri49: require('./circle_wh.jpg'),  uri50: require('./circle_wh.jpg'), uri51: require('./circle_wh.jpg'), uri52: require('./circle_wh.jpg'),uri53: require('./circle_wh.jpg'),  uri54: require('./circle_wh.jpg'), uri55: require('./circle_wh.jpg'), uri56: require('./circle_wh.jpg'),uri57: require('./circle_wh.jpg'),  uri58: require('./circle_wh.jpg'), uri59: require('./circle_wh.jpg'), uri60: require('./circle_wh.jpg'),uri61: require('./circle_wh.jpg'),  uri62: require('./circle_wh.jpg'), uri63: require('./circle_wh.jpg'), uri64: require('./circle_wh.jpg'),uri65: require('./circle_wh.jpg'),  uri66: require('./circle_wh.jpg'), uri67: require('./circle_wh.jpg'), uri68: require('./circle_wh.jpg'),uri69: require('./circle_wh.jpg'),  uri70: require('./circle_wh.jpg'), uri71: require('./circle_wh.jpg'), uri72: require('./circle_wh.jpg'),uri73: require('./circle_wh.jpg'),  uri74: require('./circle_wh.jpg'), uri75: require('./circle_wh.jpg'), uri76: require('./circle_wh.jpg'),uri77: require('./circle_wh.jpg'),  uri78: require('./circle_wh.jpg'), uri79: require('./circle_wh.jpg'), uri80: require('./circle_wh.jpg'),
            uri81: require('./circle_wh.jpg'),  uri82: require('./circle_wh.jpg'), uri83: require('./circle_wh.jpg'), uri84: require('./circle_wh.jpg'),uri85: require('./circle_wh.jpg'),  uri86: require('./circle_wh.jpg'), uri87: require('./circle_wh.jpg'), uri88: require('./circle_wh.jpg'),uri89: require('./circle_wh.jpg'),  uri90: require('./circle_wh.jpg'), uri91: require('./circle_wh.jpg'), uri92: require('./circle_wh.jpg'),uri93: require('./circle_wh.jpg'),  uri94: require('./circle_wh.jpg'), uri95: require('./circle_wh.jpg'), uri96: require('./circle_wh.jpg'),uri97: require('./circle_wh.jpg'),  uri98: require('./circle_wh.jpg'), uri99: require('./circle_wh.jpg'), uri100: require('./circle_wh.jpg'),uri101: require('./circle_wh.jpg'),  uri102: require('./circle_wh.jpg'), uri103: require('./circle_wh.jpg'), uri104: require('./circle_wh.jpg'),uri105: require('./circle_wh.jpg'),  uri106: require('./circle_wh.jpg'), uri107: require('./circle_wh.jpg'), uri108: require('./circle_wh.jpg'),uri109: require('./circle_wh.jpg'),  uri110: require('./circle_wh.jpg'), uri111: require('./circle_wh.jpg'), uri112: require('./circle_wh.jpg'),uri113: require('./circle_wh.jpg'),  uri114: require('./circle_wh.jpg'), uri115: require('./circle_wh.jpg'), uri116: require('./circle_wh.jpg'),uri117: require('./circle_wh.jpg'),  uri118: require('./circle_wh.jpg'), uri119: require('./circle_wh.jpg'), uri120: require('./circle_wh.jpg'),
            uri121: require('./circle_wh.jpg'),  uri122: require('./circle_wh.jpg'), uri123: require('./circle_wh.jpg'), uri124: require('./circle_wh.jpg'),uri125: require('./circle_wh.jpg'),  uri126: require('./circle_wh.jpg'), uri127: require('./circle_wh.jpg'), uri128: require('./circle_wh.jpg'),uri129: require('./circle_wh.jpg'),  uri130: require('./circle_wh.jpg'), uri131: require('./circle_wh.jpg'), uri132: require('./circle_wh.jpg'),uri133: require('./circle_wh.jpg'),  uri134: require('./circle_wh.jpg'), uri135: require('./circle_wh.jpg'), uri136: require('./circle_wh.jpg'),uri137: require('./circle_wh.jpg'),  uri138: require('./circle_wh.jpg'), uri139: require('./circle_wh.jpg'), uri140: require('./circle_wh.jpg'),uri141: require('./circle_wh.jpg'),  uri142: require('./circle_wh.jpg'), uri143: require('./circle_wh.jpg'), uri144: require('./circle_wh.jpg'),uri145: require('./circle_wh.jpg'),  uri146: require('./circle_wh.jpg'), uri147: require('./circle_wh.jpg'), uri148: require('./circle_wh.jpg'),uri149: require('./circle_wh.jpg'),  uri150: require('./circle_wh.jpg'), uri151: require('./circle_wh.jpg'), uri152: require('./circle_wh.jpg'),uri153: require('./circle_wh.jpg'),  uri154: require('./circle_wh.jpg'), uri155: require('./circle_wh.jpg'), uri156: require('./circle_wh.jpg'),uri157: require('./circle_wh.jpg'),  uri158: require('./circle_wh.jpg'), uri159: require('./circle_wh.jpg'), uri160: require('./circle_wh.jpg'),
            uri161: require('./circle_wh.jpg'),  uri162: require('./circle_wh.jpg'), uri163: require('./circle_wh.jpg'), uri164: require('./circle_wh.jpg'),uri165: require('./circle_wh.jpg'),  uri166: require('./circle_wh.jpg'), uri167: require('./circle_wh.jpg'), uri168: require('./circle_wh.jpg'),uri169: require('./circle_wh.jpg'),  uri170: require('./circle_wh.jpg'), uri171: require('./circle_wh.jpg'), uri172: require('./circle_wh.jpg'),uri173: require('./circle_wh.jpg'),  uri174: require('./circle_wh.jpg'), uri175: require('./circle_wh.jpg'), uri176: require('./circle_wh.jpg'),uri177: require('./circle_wh.jpg'),  uri178: require('./circle_wh.jpg'), uri179: require('./circle_wh.jpg'), uri180: require('./circle_wh.jpg'),uri181: require('./circle_wh.jpg'),  uri182: require('./circle_wh.jpg'), uri183: require('./circle_wh.jpg'), uri184: require('./circle_wh.jpg'),uri185: require('./circle_wh.jpg'),  uri186: require('./circle_wh.jpg'), uri187: require('./circle_wh.jpg'), uri188: require('./circle_wh.jpg'),uri189: require('./circle_wh.jpg'),  uri190: require('./circle_wh.jpg'), uri191: require('./circle_wh.jpg'), uri192: require('./circle_wh.jpg'),uri193: require('./circle_wh.jpg'),  uri194: require('./circle_wh.jpg'), uri195: require('./circle_wh.jpg'), uri196: require('./circle_wh.jpg'),uri197: require('./circle_wh.jpg'),  uri198: require('./circle_wh.jpg'), uri199: require('./circle_wh.jpg'), uri200: require('./circle_wh.jpg'),
            uri201: require('./circle_wh.jpg'),  uri202: require('./circle_wh.jpg'), uri203: require('./circle_wh.jpg'), uri204: require('./circle_wh.jpg'),uri205: require('./circle_wh.jpg'),  uri206: require('./circle_wh.jpg'), uri207: require('./circle_wh.jpg'), uri208: require('./circle_wh.jpg'),uri209: require('./circle_wh.jpg'),  uri210: require('./circle_wh.jpg'), uri211: require('./circle_wh.jpg'), uri212: require('./circle_wh.jpg'),uri213: require('./circle_wh.jpg'),  uri214: require('./circle_wh.jpg'), uri215: require('./circle_wh.jpg'), uri216: require('./circle_wh.jpg'),uri217: require('./circle_wh.jpg'),  uri218: require('./circle_wh.jpg'), uri219: require('./circle_wh.jpg'), uri220: require('./circle_wh.jpg'),uri221: require('./circle_wh.jpg'),  uri222: require('./circle_wh.jpg'), uri223: require('./circle_wh.jpg'), uri224: require('./circle_wh.jpg'),uri225: require('./circle_wh.jpg'),  uri226: require('./circle_wh.jpg'), uri227: require('./circle_wh.jpg'), uri228: require('./circle_wh.jpg'),uri229: require('./circle_wh.jpg'),  uri230: require('./circle_wh.jpg'), uri231: require('./circle_wh.jpg'), uri232: require('./circle_wh.jpg'),uri233: require('./circle_wh.jpg'),  uri234: require('./circle_wh.jpg'), uri235: require('./circle_wh.jpg'), uri236: require('./circle_wh.jpg'),uri237: require('./circle_wh.jpg'),  uri238: require('./circle_wh.jpg'), uri239: require('./circle_wh.jpg'), uri240: require('./circle_wh.jpg'),
            uri241: require('./circle_wh.jpg'),  uri242: require('./circle_wh.jpg'), uri243: require('./circle_wh.jpg'), uri244: require('./circle_wh.jpg'),uri245: require('./circle_wh.jpg'),  uri246: require('./circle_wh.jpg'), uri247: require('./circle_wh.jpg'), uri248: require('./circle_wh.jpg'),uri249: require('./circle_wh.jpg'),  uri250: require('./circle_wh.jpg'), uri251: require('./circle_wh.jpg'), uri252: require('./circle_wh.jpg'),uri253: require('./circle_wh.jpg'),  uri254: require('./circle_wh.jpg'), uri255: require('./circle_wh.jpg'), uri256: require('./circle_wh.jpg'),uri257: require('./circle_wh.jpg'),  uri258: require('./circle_wh.jpg'), uri259: require('./circle_wh.jpg'), uri260: require('./circle_wh.jpg'),uri261: require('./circle_wh.jpg'),  uri262: require('./circle_wh.jpg'), uri263: require('./circle_wh.jpg'), uri264: require('./circle_wh.jpg'),uri265: require('./circle_wh.jpg'),  uri266: require('./circle_wh.jpg'), uri267: require('./circle_wh.jpg'), uri268: require('./circle_wh.jpg'),uri269: require('./circle_wh.jpg'),  uri270: require('./circle_wh.jpg'), uri271: require('./circle_wh.jpg'), uri272: require('./circle_wh.jpg'),uri273: require('./circle_wh.jpg'),  uri274: require('./circle_wh.jpg'), uri275: require('./circle_wh.jpg'), uri276: require('./circle_wh.jpg'),uri277: require('./circle_wh.jpg'),  uri278: require('./circle_wh.jpg'), uri279: require('./circle_wh.jpg'), uri280: require('./circle_wh.jpg'),
            uri281: require('./circle_wh.jpg'),  uri282: require('./circle_wh.jpg'), uri283: require('./circle_wh.jpg'), uri284: require('./circle_wh.jpg'),uri285: require('./circle_wh.jpg'),  uri286: require('./circle_wh.jpg'), uri287: require('./circle_wh.jpg'), uri288: require('./circle_wh.jpg'),uri289: require('./circle_wh.jpg'),  uri290: require('./circle_wh.jpg'), uri291: require('./circle_wh.jpg'), uri292: require('./circle_wh.jpg'),uri293: require('./circle_wh.jpg'),  uri294: require('./circle_wh.jpg'), uri295: require('./circle_wh.jpg'), uri296: require('./circle_wh.jpg'),uri297: require('./circle_wh.jpg'),  uri298: require('./circle_wh.jpg'), uri299: require('./circle_wh.jpg'), uri300: require('./circle_wh.jpg'),uri301: require('./circle_wh.jpg'),  uri302: require('./circle_wh.jpg'), uri303: require('./circle_wh.jpg'), uri304: require('./circle_wh.jpg'),uri305: require('./circle_wh.jpg'),  uri306: require('./circle_wh.jpg'), uri307: require('./circle_wh.jpg'), uri308: require('./circle_wh.jpg'),uri309: require('./circle_wh.jpg'),  uri310: require('./circle_wh.jpg'), uri311: require('./circle_wh.jpg'), uri312: require('./circle_wh.jpg'),uri313: require('./circle_wh.jpg'),  uri314: require('./circle_wh.jpg'), uri315: require('./circle_wh.jpg'), uri316: require('./circle_wh.jpg'),uri317: require('./circle_wh.jpg'),  uri318: require('./circle_wh.jpg'), uri319: require('./circle_wh.jpg'), uri320: require('./circle_wh.jpg'),
            uri321: require('./circle_wh.jpg'),  uri322: require('./circle_wh.jpg'), uri323: require('./circle_wh.jpg'), uri324: require('./circle_wh.jpg'),uri325: require('./circle_wh.jpg'),  uri326: require('./circle_wh.jpg'), uri327: require('./circle_wh.jpg'), uri328: require('./circle_wh.jpg'),uri329: require('./circle_wh.jpg'),  uri330: require('./circle_wh.jpg'), uri331: require('./circle_wh.jpg'), uri332: require('./circle_wh.jpg'),uri333: require('./circle_wh.jpg'),  uri334: require('./circle_wh.jpg'), uri335: require('./circle_wh.jpg'), uri336: require('./circle_wh.jpg'),uri337: require('./circle_wh.jpg'),  uri338: require('./circle_wh.jpg'), uri339: require('./circle_wh.jpg'), uri340: require('./circle_wh.jpg'),uri341: require('./circle_wh.jpg'),  uri342: require('./circle_wh.jpg'), uri343: require('./circle_wh.jpg'), uri344: require('./circle_wh.jpg'),uri345: require('./circle_wh.jpg'),  uri346: require('./circle_wh.jpg'), uri347: require('./circle_wh.jpg'), uri348: require('./circle_wh.jpg'),uri349: require('./circle_wh.jpg'),  uri350: require('./circle_wh.jpg'), uri351: require('./circle_wh.jpg'), uri352: require('./circle_wh.jpg'),uri353: require('./circle_wh.jpg'),  uri354: require('./circle_wh.jpg'), uri355: require('./circle_wh.jpg'), uri356: require('./circle_wh.jpg'),uri357: require('./circle_wh.jpg'),  uri358: require('./circle_wh.jpg'), uri359: require('./circle_wh.jpg'), uri360: require('./circle_wh.jpg'),
            uri361: require('./circle_wh.jpg'),  uri362: require('./circle_wh.jpg'), uri363: require('./circle_wh.jpg'), uri364: require('./circle_wh.jpg'),uri365: require('./circle_wh.jpg'),  uri366: require('./circle_wh.jpg'), uri367: require('./circle_wh.jpg'), uri368: require('./circle_wh.jpg'),uri369: require('./circle_wh.jpg'),  uri370: require('./circle_wh.jpg'), uri371: require('./circle_wh.jpg'), uri372: require('./circle_wh.jpg'),uri373: require('./circle_wh.jpg'),  uri374: require('./circle_wh.jpg'), uri375: require('./circle_wh.jpg'), uri376: require('./circle_wh.jpg'),uri377: require('./circle_wh.jpg'),  uri378: require('./circle_wh.jpg'), uri379: require('./circle_wh.jpg'), uri380: require('./circle_wh.jpg'),uri381: require('./circle_wh.jpg'),  uri382: require('./circle_wh.jpg'), uri383: require('./circle_wh.jpg'), uri384: require('./circle_wh.jpg'),uri385: require('./circle_wh.jpg'),  uri386: require('./circle_wh.jpg'), uri387: require('./circle_wh.jpg'), uri388: require('./circle_wh.jpg'),uri389: require('./circle_wh.jpg'),  uri390: require('./circle_wh.jpg'), uri391: require('./circle_wh.jpg'), uri392: require('./circle_wh.jpg'),uri393: require('./circle_wh.jpg'),  uri394: require('./circle_wh.jpg'), uri395: require('./circle_wh.jpg'), uri396: require('./circle_wh.jpg'),uri397: require('./circle_wh.jpg'),  uri398: require('./circle_wh.jpg'), uri399: require('./circle_wh.jpg'), uri400: require('./circle_wh.jpg'),

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
            changeTask5:'',uri161: require('./circle_wh.jpg'),  uri162: require('./circle_wh.jpg'), uri163: require('./circle_wh.jpg'), uri164: require('./circle_wh.jpg'),uri165: require('./circle_wh.jpg'),  uri166: require('./circle_wh.jpg'), uri167: require('./circle_wh.jpg'), uri168: require('./circle_wh.jpg'),uri169: require('./circle_wh.jpg'),  uri170: require('./circle_wh.jpg'), uri171: require('./circle_wh.jpg'), uri172: require('./circle_wh.jpg'),uri173: require('./circle_wh.jpg'),  uri174: require('./circle_wh.jpg'), uri175: require('./circle_wh.jpg'), uri176: require('./circle_wh.jpg'),uri177: require('./circle_wh.jpg'),  uri178: require('./circle_wh.jpg'), uri179: require('./circle_wh.jpg'), uri180: require('./circle_wh.jpg'),uri181: require('./circle_wh.jpg'),  uri182: require('./circle_wh.jpg'), uri183: require('./circle_wh.jpg'), uri184: require('./circle_wh.jpg'),uri185: require('./circle_wh.jpg'),  uri186: require('./circle_wh.jpg'), uri187: require('./circle_wh.jpg'), uri188: require('./circle_wh.jpg'),uri189: require('./circle_wh.jpg'),  uri190: require('./circle_wh.jpg'), uri191: require('./circle_wh.jpg'), uri192: require('./circle_wh.jpg'),uri193: require('./circle_wh.jpg'),  uri194: require('./circle_wh.jpg'), uri195: require('./circle_wh.jpg'), uri196: require('./circle_wh.jpg'),uri197: require('./circle_wh.jpg'),  uri198: require('./circle_wh.jpg'), uri199: require('./circle_wh.jpg'), uri200: require('./circle_wh.jpg'),
            changeTask6:'',uri201: require('./circle_wh.jpg'),  uri202: require('./circle_wh.jpg'), uri203: require('./circle_wh.jpg'), uri204: require('./circle_wh.jpg'),uri205: require('./circle_wh.jpg'),  uri206: require('./circle_wh.jpg'), uri207: require('./circle_wh.jpg'), uri208: require('./circle_wh.jpg'),uri209: require('./circle_wh.jpg'),  uri210: require('./circle_wh.jpg'), uri211: require('./circle_wh.jpg'), uri212: require('./circle_wh.jpg'),uri213: require('./circle_wh.jpg'),  uri214: require('./circle_wh.jpg'), uri215: require('./circle_wh.jpg'), uri216: require('./circle_wh.jpg'),uri217: require('./circle_wh.jpg'),  uri218: require('./circle_wh.jpg'), uri219: require('./circle_wh.jpg'), uri220: require('./circle_wh.jpg'),uri221: require('./circle_wh.jpg'),  uri222: require('./circle_wh.jpg'), uri223: require('./circle_wh.jpg'), uri224: require('./circle_wh.jpg'),uri225: require('./circle_wh.jpg'),  uri226: require('./circle_wh.jpg'), uri227: require('./circle_wh.jpg'), uri228: require('./circle_wh.jpg'),uri229: require('./circle_wh.jpg'),  uri230: require('./circle_wh.jpg'), uri231: require('./circle_wh.jpg'), uri232: require('./circle_wh.jpg'),uri233: require('./circle_wh.jpg'),  uri234: require('./circle_wh.jpg'), uri235: require('./circle_wh.jpg'), uri236: require('./circle_wh.jpg'),uri237: require('./circle_wh.jpg'),  uri238: require('./circle_wh.jpg'), uri239: require('./circle_wh.jpg'), uri240: require('./circle_wh.jpg'),
            changeTask7:'',uri241: require('./circle_wh.jpg'),  uri242: require('./circle_wh.jpg'), uri243: require('./circle_wh.jpg'), uri244: require('./circle_wh.jpg'),uri245: require('./circle_wh.jpg'),  uri246: require('./circle_wh.jpg'), uri247: require('./circle_wh.jpg'), uri248: require('./circle_wh.jpg'),uri249: require('./circle_wh.jpg'),  uri250: require('./circle_wh.jpg'), uri251: require('./circle_wh.jpg'), uri252: require('./circle_wh.jpg'),uri253: require('./circle_wh.jpg'),  uri254: require('./circle_wh.jpg'), uri255: require('./circle_wh.jpg'), uri256: require('./circle_wh.jpg'),uri257: require('./circle_wh.jpg'),  uri258: require('./circle_wh.jpg'), uri259: require('./circle_wh.jpg'), uri260: require('./circle_wh.jpg'),uri261: require('./circle_wh.jpg'),  uri262: require('./circle_wh.jpg'), uri263: require('./circle_wh.jpg'), uri264: require('./circle_wh.jpg'),uri265: require('./circle_wh.jpg'),  uri266: require('./circle_wh.jpg'), uri267: require('./circle_wh.jpg'), uri268: require('./circle_wh.jpg'),uri269: require('./circle_wh.jpg'),  uri270: require('./circle_wh.jpg'), uri271: require('./circle_wh.jpg'), uri272: require('./circle_wh.jpg'),uri273: require('./circle_wh.jpg'),  uri274: require('./circle_wh.jpg'), uri275: require('./circle_wh.jpg'), uri276: require('./circle_wh.jpg'),uri277: require('./circle_wh.jpg'),  uri278: require('./circle_wh.jpg'), uri279: require('./circle_wh.jpg'), uri280: require('./circle_wh.jpg'),
            changeTask8:'',uri281: require('./circle_wh.jpg'),  uri282: require('./circle_wh.jpg'), uri283: require('./circle_wh.jpg'), uri284: require('./circle_wh.jpg'),uri285: require('./circle_wh.jpg'),  uri286: require('./circle_wh.jpg'), uri287: require('./circle_wh.jpg'), uri288: require('./circle_wh.jpg'),uri289: require('./circle_wh.jpg'),  uri290: require('./circle_wh.jpg'), uri291: require('./circle_wh.jpg'), uri292: require('./circle_wh.jpg'),uri293: require('./circle_wh.jpg'),  uri294: require('./circle_wh.jpg'), uri295: require('./circle_wh.jpg'), uri296: require('./circle_wh.jpg'),uri297: require('./circle_wh.jpg'),  uri298: require('./circle_wh.jpg'), uri299: require('./circle_wh.jpg'), uri300: require('./circle_wh.jpg'),uri301: require('./circle_wh.jpg'),  uri302: require('./circle_wh.jpg'), uri303: require('./circle_wh.jpg'), uri304: require('./circle_wh.jpg'),uri305: require('./circle_wh.jpg'),  uri306: require('./circle_wh.jpg'), uri307: require('./circle_wh.jpg'), uri308: require('./circle_wh.jpg'),uri309: require('./circle_wh.jpg'),  uri310: require('./circle_wh.jpg'), uri311: require('./circle_wh.jpg'), uri312: require('./circle_wh.jpg'),uri313: require('./circle_wh.jpg'),  uri314: require('./circle_wh.jpg'), uri315: require('./circle_wh.jpg'), uri316: require('./circle_wh.jpg'),uri317: require('./circle_wh.jpg'),  uri318: require('./circle_wh.jpg'), uri319: require('./circle_wh.jpg'), uri320: require('./circle_wh.jpg'),
            changeTask9:'',uri321: require('./circle_wh.jpg'),  uri322: require('./circle_wh.jpg'), uri323: require('./circle_wh.jpg'), uri324: require('./circle_wh.jpg'),uri325: require('./circle_wh.jpg'),  uri326: require('./circle_wh.jpg'), uri327: require('./circle_wh.jpg'), uri328: require('./circle_wh.jpg'),uri329: require('./circle_wh.jpg'),  uri330: require('./circle_wh.jpg'), uri331: require('./circle_wh.jpg'), uri332: require('./circle_wh.jpg'),uri333: require('./circle_wh.jpg'),  uri334: require('./circle_wh.jpg'), uri335: require('./circle_wh.jpg'), uri336: require('./circle_wh.jpg'),uri337: require('./circle_wh.jpg'),  uri338: require('./circle_wh.jpg'), uri339: require('./circle_wh.jpg'), uri340: require('./circle_wh.jpg'),uri341: require('./circle_wh.jpg'),  uri342: require('./circle_wh.jpg'), uri343: require('./circle_wh.jpg'), uri344: require('./circle_wh.jpg'),uri345: require('./circle_wh.jpg'),  uri346: require('./circle_wh.jpg'), uri347: require('./circle_wh.jpg'), uri348: require('./circle_wh.jpg'),uri349: require('./circle_wh.jpg'),  uri350: require('./circle_wh.jpg'), uri351: require('./circle_wh.jpg'), uri352: require('./circle_wh.jpg'),uri353: require('./circle_wh.jpg'),  uri354: require('./circle_wh.jpg'), uri355: require('./circle_wh.jpg'), uri356: require('./circle_wh.jpg'),uri357: require('./circle_wh.jpg'),  uri358: require('./circle_wh.jpg'), uri359: require('./circle_wh.jpg'), uri360: require('./circle_wh.jpg'),
            changeTask10:'',uri361: require('./circle_wh.jpg'),  uri362: require('./circle_wh.jpg'), uri363: require('./circle_wh.jpg'), uri364: require('./circle_wh.jpg'),uri365: require('./circle_wh.jpg'),  uri366: require('./circle_wh.jpg'), uri367: require('./circle_wh.jpg'), uri368: require('./circle_wh.jpg'),uri369: require('./circle_wh.jpg'),  uri370: require('./circle_wh.jpg'), uri371: require('./circle_wh.jpg'), uri372: require('./circle_wh.jpg'),uri373: require('./circle_wh.jpg'),  uri374: require('./circle_wh.jpg'), uri375: require('./circle_wh.jpg'), uri376: require('./circle_wh.jpg'),uri377: require('./circle_wh.jpg'),  uri378: require('./circle_wh.jpg'), uri379: require('./circle_wh.jpg'), uri380: require('./circle_wh.jpg'),uri381: require('./circle_wh.jpg'),  uri382: require('./circle_wh.jpg'), uri383: require('./circle_wh.jpg'), uri384: require('./circle_wh.jpg'),uri385: require('./circle_wh.jpg'),  uri386: require('./circle_wh.jpg'), uri387: require('./circle_wh.jpg'), uri388: require('./circle_wh.jpg'),uri389: require('./circle_wh.jpg'),  uri390: require('./circle_wh.jpg'), uri391: require('./circle_wh.jpg'), uri392: require('./circle_wh.jpg'),uri393: require('./circle_wh.jpg'),  uri394: require('./circle_wh.jpg'), uri395: require('./circle_wh.jpg'), uri396: require('./circle_wh.jpg'),uri397: require('./circle_wh.jpg'),  uri398: require('./circle_wh.jpg'), uri399: require('./circle_wh.jpg'), uri400: require('./circle_wh.jpg'),

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
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key5`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask5 : ''});
                }
                if(child.val() !==''){
                    that.setState({key5 : child.val()});
                    this.task_row_five(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key6`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask6 : ''});
                }
                if(child.val() !==''){
                    that.setState({key6 : child.val()});
                    this.task_row_six(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key7`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask7 : ''});
                }
                if(child.val() !==''){
                    that.setState({key7 : child.val()});
                    this.task_row_seven(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key8`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask8 : ''});
                }
                if(child.val() !==''){
                    that.setState({key8 : child.val()});
                    this.task_row_eight(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key9`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask9 : ''});
                }
                if(child.val() !==''){
                    that.setState({key9 : child.val()});
                    this.task_row_nine(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key10`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child === null){
                    that.setState({changeTask10 : ''});
                }
                if(child.val() !==''){
                    that.setState({key10 : child.val()});
                    this.task_row_ten(child.val());
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
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key5`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask5 : ''});
                }
                if(child.val() !==''){
                    that.setState({key5 : child.val()});
                    this.task_row_five(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key6`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask6 : ''});
                }
                if(child.val() !==''){
                    that.setState({key6 : child.val()});
                    this.task_row_six(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key7`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask7 : ''});
                }
                if(child.val() !==''){
                    that.setState({key7 : child.val()});
                    this.task_row_seven(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key8`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask8 : ''});
                }
                if(child.val() !==''){
                    that.setState({key8 : child.val()});
                    this.task_row_eight(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key9`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask9 : ''});
                }
                if(child.val() !==''){
                    that.setState({key9 : child.val()});
                    this.task_row_nine(child.val());
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key10`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val() === ''){
                    that.setState({changeTask10 : ''});
                }
                if(child.val() !==''){
                    that.setState({key10 : child.val()});
                    this.task_row_ten(child.val());
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

    task_row_five(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key5 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key5}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask5 : child.val()});
                    this.bubble_row_five();
                }
            });
        });
    }

    task_row_six(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key6 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key6}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask6 : child.val()});
                    this.bubble_row_six();
                }
            });
        });
    }

    task_row_seven(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key7 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key7}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask7 : child.val()});
                    this.bubble_row_seven();
                }
            });
        });
    }

    task_row_eight(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key8 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key8}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask8 : child.val()});
                    this.bubble_row_eight();
                }
            });
        });
    }

    task_row_nine(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key9 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key9}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask9 : child.val()});
                    this.bubble_row_nine();
                }
            });
        });
    }

    task_row_ten(key){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key10 = key;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/${key10}`).once('value').then((snapshot)=>{
            snapshot.forEach((child)=>{
                if(child.val().name !==''){
                    that.setState({changeTask10 : child.val()});
                    this.bubble_row_ten();
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

    bubble_row_five(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri161: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri161:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri162: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri162:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri163: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri163:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri164: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri164:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri165: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri165:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri166: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri166:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri167: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri167:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri168: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri168:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri169: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri169:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri170: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri170:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri171: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri171:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri172: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri172:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri173: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri173:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri174: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri174:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri175: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri175:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri176: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri176:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri177: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri177:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri178: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri178:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri179: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri179:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri180: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri180:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri181: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri181:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri182: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri182:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri183: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri183:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri184: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri184:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri185: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri185:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri186: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri186:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri187: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri187:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri188: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri188:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri189: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri189:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri190: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri190:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri191: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri191:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri192: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri192:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri193: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri193:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri194: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri194:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri195: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri195:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri196: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri196:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri197: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri197:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri198: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri198:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri199: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri199:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask5}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri200: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri200:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_six(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri201: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri201:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri202: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri202:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri203: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri203:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri204: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri204:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri205: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri205:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri206: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri206:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri207: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri207:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri208: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri208:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri209: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri209:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri210: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri210:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri211: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri211:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri212: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri212:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri213: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri213:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri214: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri214:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri215: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri215:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri216: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri216:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri217: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri217:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri218: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri218:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri219: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri219:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri220: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri220:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri221: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri221:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri222: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri222:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri223: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri223:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri224: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri224:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri225: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri225:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri226: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri226:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri227: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri227:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri228: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri228:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri229: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri229:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri230: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri230:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri231: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri231:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri232: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri232:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri233: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri233:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri234: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri234:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri235: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri235:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri236: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri236:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri237: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri237:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri238: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri238:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri239: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri239:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask6}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri240: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri240:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_seven(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri241: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri241:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri242: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri242:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri243: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri243:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri244: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri244:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri245: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri245:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri246: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri246:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri247: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri247:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri248: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri248:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri249: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri249:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri250: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri250:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri251: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri251:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri252: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri252:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri253: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri253:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri254: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri254:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri255: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri255:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri256: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri256:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri257: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri257:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri258: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri258:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri259: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri259:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri260: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri260:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri261: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri261:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri262: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri262:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri263: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri263:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri264: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri264:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri265: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri265:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri266: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri266:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri267: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri267:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri268: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri268:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri269: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri269:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri270: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri270:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri271: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri271:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri272: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri272:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri273: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri273:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri274: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri274:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri275: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri275:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri276: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri276:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri277: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri277:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri278: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri278:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri279: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri279:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask7}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri280: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri280:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_eight(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri281: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri281:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri282: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri282:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri283: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri283:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri284: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri284:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri285: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri285:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri286: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri286:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri287: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri287:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri288: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri288:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri289: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri289:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri290: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri290:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri291: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri291:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri292: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri292:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri293: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri293:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri294: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri294:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri295: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri295:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri296: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri296:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri297: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri297:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri298: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri298:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri299: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri299:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri300: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri300:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri301: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri301:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri302: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri302:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri303: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri303:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri304: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri304:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri305: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri305:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri306: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri306:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri307: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri307:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri308: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri308:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri309: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri309:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri310: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri310:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri311: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri311:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri312: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri312:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri313: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri313:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri314: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri314:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri315: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri315:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri316: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri316:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri317: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri317:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri318: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri318:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri319: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri319:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask8}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri320: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri320:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_nine(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri321: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri321:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri322: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri322:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri323: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri323:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri324: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri324:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri325: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri325:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri326: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri326:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri327: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri327:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri328: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri328:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri329: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri329:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri330: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri330:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri331: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri331:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri332: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri332:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri333: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri333:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri334: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri334:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri335: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri335:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri336: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri336:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri337: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri337:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri338: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri338:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri339: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri339:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri340: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri340:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri341: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri341:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri342: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri342:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri343: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri343:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri344: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri344:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri345: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri345:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri346: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri346:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri347: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri347:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri348: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri348:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri349: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri349:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri350: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri350:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri351: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri351:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri352: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri352:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri353: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri353:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri354: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri354:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri355: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri355:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri356: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri356:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri357: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri357:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri358: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri358:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri359: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri359:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask9}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri360: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri360:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
    }

    bubble_row_ten(){
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let that = this;
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot1`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri361: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri361:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot2`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri362: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri362:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot3`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri363: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri363:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot4`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri364: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri364:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot5`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri365: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri365:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot6`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri366: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri366:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot7`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri367: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri367:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot8`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri368: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri368:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot9`) .once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri369: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri369:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot10`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri370: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri370:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot11`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri371: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri371:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot12`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri372: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri372:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot13`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri373: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri373:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot14`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri374: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri374:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot15`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri375: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri375:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot16`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri376: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri376:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot17`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri377: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri377:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot18`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri378: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri378:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot19`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri379: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri379:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot20`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri380: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri380:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot21`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri381: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri381:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot22`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri382: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri382:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot23`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri383: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri383:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot24`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri384: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri384:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot25`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri385: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri385:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot26`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri386: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri386:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot27`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri387: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri387:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot28`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri388: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri388:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot29`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri389: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri389:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot30`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri390: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri390:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot31`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri391: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri391:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot32`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri392: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri392:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot33`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri393: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri393:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot34`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri394: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri394:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot35`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri395: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri395:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot36`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri396: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri396:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot37`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri397: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri397:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot38`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri398: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri398:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot39`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri399: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri399:require('./circle_bl.jpg')
                        }
                    );
                }
            });
        });
        firebase.database().ref(`Users/${user.uid}/${date}/${this.state.changeTask10}/dot40`).once('value').then((snapshot)=>{
            snapshot.forEach(function(child) {
                if(child.val()!==4) {
                    that.setState({
                        uri400: require('./circle_wh.jpg')
                    });
                }
                if(child.val()===4) {
                    that.setState(
                        {
                            uri400:require('./circle_bl.jpg')
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

    handleEditTask5=(event)=>{
        this.setState({
            changeTask5: event.target.value
        });
    };

    handleEditTask6=(event)=>{
        this.setState({
            changeTask6: event.target.value
        });
    };

    handleEditTask7=(event)=>{
        this.setState({
            changeTask7: event.target.value
        });
    };

    handleEditTask8=(event)=>{
        this.setState({
            changeTask8: event.target.value
        });
    };

    handleEditTask9=(event)=>{
        this.setState({
            changeTask9: event.target.value
        });
    };

    handleEditTask10=(event)=>{
        this.setState({
            changeTask10: event.target.value
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

    addTask5=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key5: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask5 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key5`).set({ key: key });
        alert("Task Added");
    };

    addTask6=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key6: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask6 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key6`).set({ key: key });
        alert("Task Added");
    };

    addTask7=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key7: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask7 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key7`).set({ key: key });
        alert("Task Added");
    };

    addTask8=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key8: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask8 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key8`).set({ key: key });
        alert("Task Added");
    };

    addTask9=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key9: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask9 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key9`).set({ key: key });
        alert("Task Added");
    };

    addTask10=()=>{
        let user = firebase.auth().currentUser;
        let that = this;
        let date = that.state.nDate;
        let key = firebase.database().ref(`Users/${user.uid}/${date}/tasks`).push().key;
        that.setState({ key10: key});
        firebase.database().ref(`Users/${user.uid}/${date}/tasks`).child(key).set({ name: this.state.changeTask10 });
        firebase.database().ref(`Users/${user.uid}/${date}/keys/key10`).set({ key: key });
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

    delTask5=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key5;
        let name = this.state.changeTask5;
        let key5 = 'key5';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key5).set(null);
        this.setState({
            changeTask5:'',
            uri161: require('./circle_wh.jpg'),  uri162: require('./circle_wh.jpg'), uri163: require('./circle_wh.jpg'), uri164: require('./circle_wh.jpg'),uri165: require('./circle_wh.jpg'),  uri166: require('./circle_wh.jpg'), uri167: require('./circle_wh.jpg'), uri168: require('./circle_wh.jpg'),uri169: require('./circle_wh.jpg'),  uri170: require('./circle_wh.jpg'), uri171: require('./circle_wh.jpg'), uri172: require('./circle_wh.jpg'),uri173: require('./circle_wh.jpg'),  uri174: require('./circle_wh.jpg'), uri175: require('./circle_wh.jpg'), uri176: require('./circle_wh.jpg'),uri177: require('./circle_wh.jpg'),  uri178: require('./circle_wh.jpg'), uri179: require('./circle_wh.jpg'), uri180: require('./circle_wh.jpg'),uri181: require('./circle_wh.jpg'),  uri182: require('./circle_wh.jpg'), uri183: require('./circle_wh.jpg'), uri184: require('./circle_wh.jpg'),uri185: require('./circle_wh.jpg'),  uri186: require('./circle_wh.jpg'), uri187: require('./circle_wh.jpg'), uri188: require('./circle_wh.jpg'),uri189: require('./circle_wh.jpg'),  uri190: require('./circle_wh.jpg'), uri191: require('./circle_wh.jpg'), uri192: require('./circle_wh.jpg'),uri193: require('./circle_wh.jpg'),  uri194: require('./circle_wh.jpg'), uri195: require('./circle_wh.jpg'), uri196: require('./circle_wh.jpg'),uri197: require('./circle_wh.jpg'),  uri198: require('./circle_wh.jpg'), uri199: require('./circle_wh.jpg'), uri200: require('./circle_wh.jpg'),
        })
    };

    delTask6=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key6;
        let name = this.state.changeTask6;
        let key6 = 'key6';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key6).set(null);
        this.setState({
            changeTask6:'',
            uri201: require('./circle_wh.jpg'),  uri202: require('./circle_wh.jpg'), uri203: require('./circle_wh.jpg'), uri204: require('./circle_wh.jpg'),uri205: require('./circle_wh.jpg'),  uri206: require('./circle_wh.jpg'), uri207: require('./circle_wh.jpg'), uri208: require('./circle_wh.jpg'),uri209: require('./circle_wh.jpg'),  uri210: require('./circle_wh.jpg'), uri211: require('./circle_wh.jpg'), uri212: require('./circle_wh.jpg'),uri213: require('./circle_wh.jpg'),  uri214: require('./circle_wh.jpg'), uri215: require('./circle_wh.jpg'), uri216: require('./circle_wh.jpg'),uri217: require('./circle_wh.jpg'),  uri218: require('./circle_wh.jpg'), uri219: require('./circle_wh.jpg'), uri220: require('./circle_wh.jpg'),uri221: require('./circle_wh.jpg'),  uri222: require('./circle_wh.jpg'), uri223: require('./circle_wh.jpg'), uri224: require('./circle_wh.jpg'),uri225: require('./circle_wh.jpg'),  uri226: require('./circle_wh.jpg'), uri227: require('./circle_wh.jpg'), uri228: require('./circle_wh.jpg'),uri229: require('./circle_wh.jpg'),  uri230: require('./circle_wh.jpg'), uri231: require('./circle_wh.jpg'), uri232: require('./circle_wh.jpg'),uri233: require('./circle_wh.jpg'),  uri234: require('./circle_wh.jpg'), uri235: require('./circle_wh.jpg'), uri236: require('./circle_wh.jpg'),uri237: require('./circle_wh.jpg'),  uri238: require('./circle_wh.jpg'), uri239: require('./circle_wh.jpg'), uri240: require('./circle_wh.jpg'),
        })
    };

    delTask7=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key7;
        let name = this.state.changeTask7;
        let key7 = 'key7';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key7).set(null);
        this.setState({
            changeTask7:'',
            uri241: require('./circle_wh.jpg'),  uri242: require('./circle_wh.jpg'), uri243: require('./circle_wh.jpg'), uri244: require('./circle_wh.jpg'),uri245: require('./circle_wh.jpg'),  uri246: require('./circle_wh.jpg'), uri247: require('./circle_wh.jpg'), uri248: require('./circle_wh.jpg'),uri249: require('./circle_wh.jpg'),  uri250: require('./circle_wh.jpg'), uri251: require('./circle_wh.jpg'), uri252: require('./circle_wh.jpg'),uri253: require('./circle_wh.jpg'),  uri254: require('./circle_wh.jpg'), uri255: require('./circle_wh.jpg'), uri256: require('./circle_wh.jpg'),uri257: require('./circle_wh.jpg'),  uri258: require('./circle_wh.jpg'), uri259: require('./circle_wh.jpg'), uri260: require('./circle_wh.jpg'),uri261: require('./circle_wh.jpg'),  uri262: require('./circle_wh.jpg'), uri263: require('./circle_wh.jpg'), uri264: require('./circle_wh.jpg'),uri265: require('./circle_wh.jpg'),  uri266: require('./circle_wh.jpg'), uri267: require('./circle_wh.jpg'), uri268: require('./circle_wh.jpg'),uri269: require('./circle_wh.jpg'),  uri270: require('./circle_wh.jpg'), uri271: require('./circle_wh.jpg'), uri272: require('./circle_wh.jpg'),uri273: require('./circle_wh.jpg'),  uri274: require('./circle_wh.jpg'), uri275: require('./circle_wh.jpg'), uri276: require('./circle_wh.jpg'),uri277: require('./circle_wh.jpg'),  uri278: require('./circle_wh.jpg'), uri279: require('./circle_wh.jpg'), uri280: require('./circle_wh.jpg'),
        })
    };

    delTask8=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key8;
        let name = this.state.changeTask8;
        let key8 = 'key8';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key8).set(null);
        this.setState({
            changeTask8:'',
            uri281: require('./circle_wh.jpg'),  uri282: require('./circle_wh.jpg'), uri283: require('./circle_wh.jpg'), uri284: require('./circle_wh.jpg'),uri285: require('./circle_wh.jpg'),  uri286: require('./circle_wh.jpg'), uri287: require('./circle_wh.jpg'), uri288: require('./circle_wh.jpg'),uri289: require('./circle_wh.jpg'),  uri290: require('./circle_wh.jpg'), uri291: require('./circle_wh.jpg'), uri292: require('./circle_wh.jpg'),uri293: require('./circle_wh.jpg'),  uri294: require('./circle_wh.jpg'), uri295: require('./circle_wh.jpg'), uri296: require('./circle_wh.jpg'),uri297: require('./circle_wh.jpg'),  uri298: require('./circle_wh.jpg'), uri299: require('./circle_wh.jpg'), uri300: require('./circle_wh.jpg'),uri301: require('./circle_wh.jpg'),  uri302: require('./circle_wh.jpg'), uri303: require('./circle_wh.jpg'), uri304: require('./circle_wh.jpg'),uri305: require('./circle_wh.jpg'),  uri306: require('./circle_wh.jpg'), uri307: require('./circle_wh.jpg'), uri308: require('./circle_wh.jpg'),uri309: require('./circle_wh.jpg'),  uri310: require('./circle_wh.jpg'), uri311: require('./circle_wh.jpg'), uri312: require('./circle_wh.jpg'),uri313: require('./circle_wh.jpg'),  uri314: require('./circle_wh.jpg'), uri315: require('./circle_wh.jpg'), uri316: require('./circle_wh.jpg'),uri317: require('./circle_wh.jpg'),  uri318: require('./circle_wh.jpg'), uri319: require('./circle_wh.jpg'), uri320: require('./circle_wh.jpg'),
        })
    };

    delTask9=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key9;
        let name = this.state.changeTask9;
        let key9 = 'key9';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key9).set(null);
        this.setState({
            changeTask9:'',
            uri321: require('./circle_wh.jpg'),  uri322: require('./circle_wh.jpg'), uri323: require('./circle_wh.jpg'), uri324: require('./circle_wh.jpg'),uri325: require('./circle_wh.jpg'),  uri326: require('./circle_wh.jpg'), uri327: require('./circle_wh.jpg'), uri328: require('./circle_wh.jpg'),uri329: require('./circle_wh.jpg'),  uri330: require('./circle_wh.jpg'), uri331: require('./circle_wh.jpg'), uri332: require('./circle_wh.jpg'),uri333: require('./circle_wh.jpg'),  uri334: require('./circle_wh.jpg'), uri335: require('./circle_wh.jpg'), uri336: require('./circle_wh.jpg'),uri337: require('./circle_wh.jpg'),  uri338: require('./circle_wh.jpg'), uri339: require('./circle_wh.jpg'), uri340: require('./circle_wh.jpg'),uri341: require('./circle_wh.jpg'),  uri342: require('./circle_wh.jpg'), uri343: require('./circle_wh.jpg'), uri344: require('./circle_wh.jpg'),uri345: require('./circle_wh.jpg'),  uri346: require('./circle_wh.jpg'), uri347: require('./circle_wh.jpg'), uri348: require('./circle_wh.jpg'),uri349: require('./circle_wh.jpg'),  uri350: require('./circle_wh.jpg'), uri351: require('./circle_wh.jpg'), uri352: require('./circle_wh.jpg'),uri353: require('./circle_wh.jpg'),  uri354: require('./circle_wh.jpg'), uri355: require('./circle_wh.jpg'), uri356: require('./circle_wh.jpg'),uri357: require('./circle_wh.jpg'),  uri358: require('./circle_wh.jpg'), uri359: require('./circle_wh.jpg'), uri360: require('./circle_wh.jpg'),
        })
    };

    delTask10=()=>{
        let user = firebase.auth().currentUser;
        let date = this.state.nDate;
        let key = this.state.key10;
        let name = this.state.changeTask10;
        let key10 = 'key10';
        firebase.database().ref(`Users/${user.uid}/${date}/tasks/`).child(key).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/`).child(name).set(null);
        firebase.database().ref(`Users/${user.uid}/${date}/keys`).child(key10).set(null);
        this.setState({
            changeTask10:'',
            uri361: require('./circle_wh.jpg'),  uri362: require('./circle_wh.jpg'), uri363: require('./circle_wh.jpg'), uri364: require('./circle_wh.jpg'),uri365: require('./circle_wh.jpg'),  uri366: require('./circle_wh.jpg'), uri367: require('./circle_wh.jpg'), uri368: require('./circle_wh.jpg'),uri369: require('./circle_wh.jpg'),  uri370: require('./circle_wh.jpg'), uri371: require('./circle_wh.jpg'), uri372: require('./circle_wh.jpg'),uri373: require('./circle_wh.jpg'),  uri374: require('./circle_wh.jpg'), uri375: require('./circle_wh.jpg'), uri376: require('./circle_wh.jpg'),uri377: require('./circle_wh.jpg'),  uri378: require('./circle_wh.jpg'), uri379: require('./circle_wh.jpg'), uri380: require('./circle_wh.jpg'),uri381: require('./circle_wh.jpg'),  uri382: require('./circle_wh.jpg'), uri383: require('./circle_wh.jpg'), uri384: require('./circle_wh.jpg'),uri385: require('./circle_wh.jpg'),  uri386: require('./circle_wh.jpg'), uri387: require('./circle_wh.jpg'), uri388: require('./circle_wh.jpg'),uri389: require('./circle_wh.jpg'),  uri390: require('./circle_wh.jpg'), uri391: require('./circle_wh.jpg'), uri392: require('./circle_wh.jpg'),uri393: require('./circle_wh.jpg'),  uri394: require('./circle_wh.jpg'), uri395: require('./circle_wh.jpg'), uri396: require('./circle_wh.jpg'),uri397: require('./circle_wh.jpg'),  uri398: require('./circle_wh.jpg'), uri399: require('./circle_wh.jpg'), uri400: require('./circle_wh.jpg'),
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
    changeLogo161=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri161!==require('./circle_bl.jpg')) {
            this.setState({
                uri161: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri161===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri161:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo162=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri162!==require('./circle_bl.jpg')) {
            this.setState({
                uri162: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri162===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri162:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo163=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri163!==require('./circle_bl.jpg')) {
            this.setState({
                uri163: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri163===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri163:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo164=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri164!==require('./circle_bl.jpg')) {
            this.setState({
                uri164: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri164===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri164:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo165=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri165!==require('./circle_bl.jpg')) {
            this.setState({
                uri165: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri165===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri165:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo166=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri166!==require('./circle_bl.jpg')) {
            this.setState({
                uri166: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri166===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri166:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo167=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri167!==require('./circle_bl.jpg')) {
            this.setState({
                uri167: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri167===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri167:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo168=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri168!==require('./circle_bl.jpg')) {
            this.setState({
                uri168: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri168===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri168:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo169=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri169!==require('./circle_bl.jpg')) {
            this.setState({
                uri169: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri169===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri169:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo170=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri170!==require('./circle_bl.jpg')) {
            this.setState({
                uri170: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri170===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri170:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo171=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri171!==require('./circle_bl.jpg')) {
            this.setState({
                uri171: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri171===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri171:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo172=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri172!==require('./circle_bl.jpg')) {
            this.setState({
                uri172: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri172===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri172:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo173=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri173!==require('./circle_bl.jpg')) {
            this.setState({
                uri173: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri173===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri173:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo174=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri174!==require('./circle_bl.jpg')) {
            this.setState({
                uri174: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri174===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri174:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo175=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri175!==require('./circle_bl.jpg')) {
            this.setState({
                uri175: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri175===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri175:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo176=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri176!==require('./circle_bl.jpg')) {
            this.setState({
                uri176: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri176===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri176:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo177=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri177!==require('./circle_bl.jpg')) {
            this.setState({
                uri177: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri177===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri177:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo178=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri178!==require('./circle_bl.jpg')) {
            this.setState({
                uri178: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri178===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri178:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo179=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri179!==require('./circle_bl.jpg')) {
            this.setState({
                uri179: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri179===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri179:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo180=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri180!==require('./circle_bl.jpg')) {
            this.setState({
                uri180: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri180===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri180:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo181=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri181!==require('./circle_bl.jpg')) {
            this.setState({
                uri181: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri181===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri181:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo182=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri182!==require('./circle_bl.jpg')) {
            this.setState({
                uri182: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri182===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri182:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo183=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri183!==require('./circle_bl.jpg')) {
            this.setState({
                uri183: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri183===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri183:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo184=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri184!==require('./circle_bl.jpg')) {
            this.setState({
                uri184: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri184===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri184:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo185=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri185!==require('./circle_bl.jpg')) {
            this.setState({
                uri185: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri185===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri185:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo186=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri186!==require('./circle_bl.jpg')) {
            this.setState({
                uri186: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri186===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri186:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo187=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri187!==require('./circle_bl.jpg')) {
            this.setState({
                uri187: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri187===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri187:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo188=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri188!==require('./circle_bl.jpg')) {
            this.setState({
                uri188: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri188===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri188:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo189=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri189!==require('./circle_bl.jpg')) {
            this.setState({
                uri189: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri189===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri189:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo190=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri190!==require('./circle_bl.jpg')) {
            this.setState({
                uri190: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri190===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri190:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo191=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri191!==require('./circle_bl.jpg')) {
            this.setState({
                uri191: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri191===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri191:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo192=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri192!==require('./circle_bl.jpg')) {
            this.setState({
                uri192: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri192===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri192:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo193=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri193!==require('./circle_bl.jpg')) {
            this.setState({
                uri193: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri193===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri193:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo194=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri194!==require('./circle_bl.jpg')) {
            this.setState({
                uri194: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri194===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri194:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo195=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri195!==require('./circle_bl.jpg')) {
            this.setState({
                uri195: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri195===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri195:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo196=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri196!==require('./circle_bl.jpg')) {
            this.setState({
                uri196: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri196===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri196:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo197=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri197!==require('./circle_bl.jpg')) {
            this.setState({
                uri197: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri197===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri197:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo198=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri198!==require('./circle_bl.jpg')) {
            this.setState({
                uri198: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri198===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri198:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo199=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri199!==require('./circle_bl.jpg')) {
            this.setState({
                uri199: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri199===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri199:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo200=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask5;let date = this.state.nDate;
        if(this.state.uri200!==require('./circle_bl.jpg')) {
            this.setState({
                uri200: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri200===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri200:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo201=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri201!==require('./circle_bl.jpg')) {
            this.setState({
                uri201: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri201===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri201:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo202=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri202!==require('./circle_bl.jpg')) {
            this.setState({
                uri202: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri202===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri202:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo203=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri203!==require('./circle_bl.jpg')) {
            this.setState({
                uri203: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri203===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri203:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo204=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri204!==require('./circle_bl.jpg')) {
            this.setState({
                uri204: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri204===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri204:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo205=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri205!==require('./circle_bl.jpg')) {
            this.setState({
                uri205: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri205===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri205:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo206=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri206!==require('./circle_bl.jpg')) {
            this.setState({
                uri206: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri206===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri206:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo207=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri207!==require('./circle_bl.jpg')) {
            this.setState({
                uri207: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri207===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri207:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo208=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri208!==require('./circle_bl.jpg')) {
            this.setState({
                uri208: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri208===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri208:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo209=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri209!==require('./circle_bl.jpg')) {
            this.setState({
                uri209: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri209===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri209:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo210=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri210!==require('./circle_bl.jpg')) {
            this.setState({
                uri210: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri210===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri210:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo211=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri211!==require('./circle_bl.jpg')) {
            this.setState({
                uri211: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri211===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri211:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo212=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri212!==require('./circle_bl.jpg')) {
            this.setState({
                uri212: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri212===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri212:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo213=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri213!==require('./circle_bl.jpg')) {
            this.setState({
                uri213: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri213===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri213:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo214=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri214!==require('./circle_bl.jpg')) {
            this.setState({
                uri214: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri214===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri214:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo215=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri215!==require('./circle_bl.jpg')) {
            this.setState({
                uri215: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri215===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri215:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo216=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri216!==require('./circle_bl.jpg')) {
            this.setState({
                uri216: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri216===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri216:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo217=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri217!==require('./circle_bl.jpg')) {
            this.setState({
                uri217: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri217===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri217:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo218=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri218!==require('./circle_bl.jpg')) {
            this.setState({
                uri218: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri218===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri218:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo219=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri219!==require('./circle_bl.jpg')) {
            this.setState({
                uri219: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri219===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri219:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo220=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri220!==require('./circle_bl.jpg')) {
            this.setState({
                uri220: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri220===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri220:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo221=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri221!==require('./circle_bl.jpg')) {
            this.setState({
                uri221: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri221===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri221:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo222=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri222!==require('./circle_bl.jpg')) {
            this.setState({
                uri222: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri222===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri222:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo223=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri223!==require('./circle_bl.jpg')) {
            this.setState({
                uri223: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri223===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri223:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo224=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri224!==require('./circle_bl.jpg')) {
            this.setState({
                uri224: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri224===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri224:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo225=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri225!==require('./circle_bl.jpg')) {
            this.setState({
                uri225: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri225===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri225:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo226=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri226!==require('./circle_bl.jpg')) {
            this.setState({
                uri226: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri226===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri226:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo227=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri227!==require('./circle_bl.jpg')) {
            this.setState({
                uri227: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri227===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri227:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo228=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri228!==require('./circle_bl.jpg')) {
            this.setState({
                uri228: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri228===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri228:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo229=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri229!==require('./circle_bl.jpg')) {
            this.setState({
                uri229: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri229===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri229:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo230=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri230!==require('./circle_bl.jpg')) {
            this.setState({
                uri230: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri230===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri230:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo231=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri231!==require('./circle_bl.jpg')) {
            this.setState({
                uri231: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri231===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri231:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo232=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri232!==require('./circle_bl.jpg')) {
            this.setState({
                uri232: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri232===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri232:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo233=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri233!==require('./circle_bl.jpg')) {
            this.setState({
                uri233: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri233===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri233:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo234=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri234!==require('./circle_bl.jpg')) {
            this.setState({
                uri234: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri234===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri234:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo235=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri235!==require('./circle_bl.jpg')) {
            this.setState({
                uri235: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri235===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri235:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo236=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri236!==require('./circle_bl.jpg')) {
            this.setState({
                uri236: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri236===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri236:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo237=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri237!==require('./circle_bl.jpg')) {
            this.setState({
                uri237: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri237===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri237:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo238=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri238!==require('./circle_bl.jpg')) {
            this.setState({
                uri238: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri238===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri238:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo239=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri239!==require('./circle_bl.jpg')) {
            this.setState({
                uri239: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri239===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri239:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo240=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask6;let date = this.state.nDate;
        if(this.state.uri240!==require('./circle_bl.jpg')) {
            this.setState({
                uri240: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri240===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri240:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo241=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri241!==require('./circle_bl.jpg')) {
            this.setState({
                uri241: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri241===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri241:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo242=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri242!==require('./circle_bl.jpg')) {
            this.setState({
                uri242: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri242===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri242:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo243=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri243!==require('./circle_bl.jpg')) {
            this.setState({
                uri243: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri243===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri243:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo244=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri244!==require('./circle_bl.jpg')) {
            this.setState({
                uri244: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri244===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri244:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo245=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri245!==require('./circle_bl.jpg')) {
            this.setState({
                uri245: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri245===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri245:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo246=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri246!==require('./circle_bl.jpg')) {
            this.setState({
                uri246: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri246===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri246:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo247=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri247!==require('./circle_bl.jpg')) {
            this.setState({
                uri247: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri247===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri247:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo248=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri248!==require('./circle_bl.jpg')) {
            this.setState({
                uri248: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri248===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri248:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo249=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri249!==require('./circle_bl.jpg')) {
            this.setState({
                uri249: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri249===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri249:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo250=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri250!==require('./circle_bl.jpg')) {
            this.setState({
                uri250: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri250===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri250:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo251=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri251!==require('./circle_bl.jpg')) {
            this.setState({
                uri251: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri251===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri251:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo252=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri252!==require('./circle_bl.jpg')) {
            this.setState({
                uri252: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri252===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri252:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo253=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri253!==require('./circle_bl.jpg')) {
            this.setState({
                uri253: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri253===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri253:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo254=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri254!==require('./circle_bl.jpg')) {
            this.setState({
                uri254: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri254===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri254:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo255=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri255!==require('./circle_bl.jpg')) {
            this.setState({
                uri255: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri255===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri255:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo256=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri256!==require('./circle_bl.jpg')) {
            this.setState({
                uri256: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri256===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri256:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo257=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri257!==require('./circle_bl.jpg')) {
            this.setState({
                uri257: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri257===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri257:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo258=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri258!==require('./circle_bl.jpg')) {
            this.setState({
                uri258: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri258===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri258:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo259=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri259!==require('./circle_bl.jpg')) {
            this.setState({
                uri259: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri259===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri259:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo260=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri260!==require('./circle_bl.jpg')) {
            this.setState({
                uri260: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri260===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri260:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo261=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri261!==require('./circle_bl.jpg')) {
            this.setState({
                uri261: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri261===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri261:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo262=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri262!==require('./circle_bl.jpg')) {
            this.setState({
                uri262: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri262===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri262:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo263=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri263!==require('./circle_bl.jpg')) {
            this.setState({
                uri263: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri263===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri263:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo264=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri264!==require('./circle_bl.jpg')) {
            this.setState({
                uri264: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri264===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri264:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo265=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri265!==require('./circle_bl.jpg')) {
            this.setState({
                uri265: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri265===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri265:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo266=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri266!==require('./circle_bl.jpg')) {
            this.setState({
                uri266: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri266===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri266:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo267=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri267!==require('./circle_bl.jpg')) {
            this.setState({
                uri267: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri267===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri267:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo268=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri268!==require('./circle_bl.jpg')) {
            this.setState({
                uri268: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri268===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri268:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo269=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri269!==require('./circle_bl.jpg')) {
            this.setState({
                uri269: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri269===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri269:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo270=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri270!==require('./circle_bl.jpg')) {
            this.setState({
                uri270: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri270===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri270:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo271=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri271!==require('./circle_bl.jpg')) {
            this.setState({
                uri271: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri271===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri271:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo272=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri272!==require('./circle_bl.jpg')) {
            this.setState({
                uri272: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri272===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri272:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo273=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri273!==require('./circle_bl.jpg')) {
            this.setState({
                uri273: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri273===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri273:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo274=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri274!==require('./circle_bl.jpg')) {
            this.setState({
                uri274: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri274===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri274:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo275=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri275!==require('./circle_bl.jpg')) {
            this.setState({
                uri275: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri275===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri275:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo276=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri276!==require('./circle_bl.jpg')) {
            this.setState({
                uri276: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri276===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri276:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo277=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri277!==require('./circle_bl.jpg')) {
            this.setState({
                uri277: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri277===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri277:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo278=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri278!==require('./circle_bl.jpg')) {
            this.setState({
                uri278: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri278===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri278:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo279=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri279!==require('./circle_bl.jpg')) {
            this.setState({
                uri279: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri279===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri279:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo280=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask7;let date = this.state.nDate;
        if(this.state.uri280!==require('./circle_bl.jpg')) {
            this.setState({
                uri280: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri280===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri280:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo281=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri281!==require('./circle_bl.jpg')) {
            this.setState({
                uri281: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri281===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri281:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo282=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri282!==require('./circle_bl.jpg')) {
            this.setState({
                uri282: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri282===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri282:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo283=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri283!==require('./circle_bl.jpg')) {
            this.setState({
                uri283: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri283===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri283:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo284=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri284!==require('./circle_bl.jpg')) {
            this.setState({
                uri284: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri284===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri284:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo285=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri285!==require('./circle_bl.jpg')) {
            this.setState({
                uri285: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri285===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri285:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo286=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri286!==require('./circle_bl.jpg')) {
            this.setState({
                uri286: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri286===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri286:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo287=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri287!==require('./circle_bl.jpg')) {
            this.setState({
                uri287: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri287===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri287:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo288=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri288!==require('./circle_bl.jpg')) {
            this.setState({
                uri288: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri288===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri288:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo289=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri289!==require('./circle_bl.jpg')) {
            this.setState({
                uri289: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri289===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri289:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo290=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri290!==require('./circle_bl.jpg')) {
            this.setState({
                uri290: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri290===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri290:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo291=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri291!==require('./circle_bl.jpg')) {
            this.setState({
                uri291: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri291===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri291:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo292=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri292!==require('./circle_bl.jpg')) {
            this.setState({
                uri292: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri292===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri292:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo293=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri293!==require('./circle_bl.jpg')) {
            this.setState({
                uri293: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri293===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri293:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo294=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri294!==require('./circle_bl.jpg')) {
            this.setState({
                uri294: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri294===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri294:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo295=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri295!==require('./circle_bl.jpg')) {
            this.setState({
                uri295: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri295===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri295:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo296=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri296!==require('./circle_bl.jpg')) {
            this.setState({
                uri296: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri296===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri296:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo297=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri297!==require('./circle_bl.jpg')) {
            this.setState({
                uri297: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri297===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri297:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo298=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri298!==require('./circle_bl.jpg')) {
            this.setState({
                uri298: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri298===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri298:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo299=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri299!==require('./circle_bl.jpg')) {
            this.setState({
                uri299: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri299===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri299:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo300=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri300!==require('./circle_bl.jpg')) {
            this.setState({
                uri300: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri300===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri300:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo301=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri301!==require('./circle_bl.jpg')) {
            this.setState({
                uri301: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri301===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri301:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo302=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri302!==require('./circle_bl.jpg')) {
            this.setState({
                uri302: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri302===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri302:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo303=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri303!==require('./circle_bl.jpg')) {
            this.setState({
                uri303: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri303===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri303:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo304=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri304!==require('./circle_bl.jpg')) {
            this.setState({
                uri304: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri304===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri304:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo305=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri305!==require('./circle_bl.jpg')) {
            this.setState({
                uri305: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri305===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri305:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo306=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri306!==require('./circle_bl.jpg')) {
            this.setState({
                uri306: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri306===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri306:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo307=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri307!==require('./circle_bl.jpg')) {
            this.setState({
                uri307: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri307===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri307:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo308=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri308!==require('./circle_bl.jpg')) {
            this.setState({
                uri308: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri308===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri308:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo309=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri309!==require('./circle_bl.jpg')) {
            this.setState({
                uri309: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri309===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri309:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo310=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri310!==require('./circle_bl.jpg')) {
            this.setState({
                uri310: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri310===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri310:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo311=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri311!==require('./circle_bl.jpg')) {
            this.setState({
                uri311: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri311===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri311:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo312=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri312!==require('./circle_bl.jpg')) {
            this.setState({
                uri312: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri312===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri312:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo313=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri313!==require('./circle_bl.jpg')) {
            this.setState({
                uri313: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri313===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri313:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo314=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri314!==require('./circle_bl.jpg')) {
            this.setState({
                uri314: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri314===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri314:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo315=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri315!==require('./circle_bl.jpg')) {
            this.setState({
                uri315: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri315===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri315:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo316=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri316!==require('./circle_bl.jpg')) {
            this.setState({
                uri316: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri316===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri316:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo317=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri317!==require('./circle_bl.jpg')) {
            this.setState({
                uri317: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri317===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri317:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo318=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri318!==require('./circle_bl.jpg')) {
            this.setState({
                uri318: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri318===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri318:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo319=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri319!==require('./circle_bl.jpg')) {
            this.setState({
                uri319: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri319===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri319:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo320=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask8;let date = this.state.nDate;
        if(this.state.uri320!==require('./circle_bl.jpg')) {
            this.setState({
                uri320: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri320===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri320:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo321=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri321!==require('./circle_bl.jpg')) {
            this.setState({
                uri321: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri321===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri321:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo322=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri322!==require('./circle_bl.jpg')) {
            this.setState({
                uri322: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri322===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri322:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo323=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri323!==require('./circle_bl.jpg')) {
            this.setState({
                uri323: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri323===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri323:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo324=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri324!==require('./circle_bl.jpg')) {
            this.setState({
                uri324: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri324===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri324:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo325=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri325!==require('./circle_bl.jpg')) {
            this.setState({
                uri325: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri325===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri325:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo326=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri326!==require('./circle_bl.jpg')) {
            this.setState({
                uri326: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri326===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri326:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo327=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri327!==require('./circle_bl.jpg')) {
            this.setState({
                uri327: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri327===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri327:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo328=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri328!==require('./circle_bl.jpg')) {
            this.setState({
                uri328: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri328===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri328:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo329=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri329!==require('./circle_bl.jpg')) {
            this.setState({
                uri329: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri329===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri329:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo330=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri330!==require('./circle_bl.jpg')) {
            this.setState({
                uri330: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri330===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri330:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo331=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri331!==require('./circle_bl.jpg')) {
            this.setState({
                uri331: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri331===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri331:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo332=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri332!==require('./circle_bl.jpg')) {
            this.setState({
                uri332: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri332===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri332:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo333=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri333!==require('./circle_bl.jpg')) {
            this.setState({
                uri333: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri333===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri333:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo334=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri334!==require('./circle_bl.jpg')) {
            this.setState({
                uri334: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri334===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri334:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo335=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri335!==require('./circle_bl.jpg')) {
            this.setState({
                uri335: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri335===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri335:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo336=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri336!==require('./circle_bl.jpg')) {
            this.setState({
                uri336: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri336===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri336:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo337=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri337!==require('./circle_bl.jpg')) {
            this.setState({
                uri337: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri337===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri337:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo338=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri338!==require('./circle_bl.jpg')) {
            this.setState({
                uri338: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri338===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri338:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo339=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri339!==require('./circle_bl.jpg')) {
            this.setState({
                uri339: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri339===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri339:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo340=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri340!==require('./circle_bl.jpg')) {
            this.setState({
                uri340: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri340===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri340:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo341=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri341!==require('./circle_bl.jpg')) {
            this.setState({
                uri341: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri341===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri341:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo342=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri342!==require('./circle_bl.jpg')) {
            this.setState({
                uri342: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri342===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri342:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo343=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri343!==require('./circle_bl.jpg')) {
            this.setState({
                uri343: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri343===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri343:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo344=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri344!==require('./circle_bl.jpg')) {
            this.setState({
                uri344: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri344===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri344:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo345=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri345!==require('./circle_bl.jpg')) {
            this.setState({
                uri345: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri345===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri345:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo346=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri346!==require('./circle_bl.jpg')) {
            this.setState({
                uri346: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri346===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri346:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo347=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri347!==require('./circle_bl.jpg')) {
            this.setState({
                uri347: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri347===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri347:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo348=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri348!==require('./circle_bl.jpg')) {
            this.setState({
                uri348: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri348===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri348:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo349=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri349!==require('./circle_bl.jpg')) {
            this.setState({
                uri349: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri349===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri349:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo350=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri350!==require('./circle_bl.jpg')) {
            this.setState({
                uri350: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri350===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri350:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo351=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri351!==require('./circle_bl.jpg')) {
            this.setState({
                uri351: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri351===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri351:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo352=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri352!==require('./circle_bl.jpg')) {
            this.setState({
                uri352: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri352===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri352:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo353=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri353!==require('./circle_bl.jpg')) {
            this.setState({
                uri353: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri353===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri353:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo354=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri354!==require('./circle_bl.jpg')) {
            this.setState({
                uri354: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri354===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri354:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo355=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri355!==require('./circle_bl.jpg')) {
            this.setState({
                uri355: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri355===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri355:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo356=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri356!==require('./circle_bl.jpg')) {
            this.setState({
                uri356: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri356===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri356:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo357=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri357!==require('./circle_bl.jpg')) {
            this.setState({
                uri357: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri357===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri357:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo358=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri358!==require('./circle_bl.jpg')) {
            this.setState({
                uri358: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri358===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri358:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo359=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri359!==require('./circle_bl.jpg')) {
            this.setState({
                uri359: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri359===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri359:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo360=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask9;let date = this.state.nDate;
        if(this.state.uri360!==require('./circle_bl.jpg')) {
            this.setState({
                uri360: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri360===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri360:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:5 });}
    };
    changeLogo361=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri361!==require('./circle_bl.jpg')) {
            this.setState({
                uri361: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:4 });}
        if(this.state.uri361===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri361:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot1`).update({ state:5 });}
    };
    changeLogo362=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri362!==require('./circle_bl.jpg')) {
            this.setState({
                uri362: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:4 });}
        if(this.state.uri362===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri362:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot2`).update({ state:5 });}
    };
    changeLogo363=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri363!==require('./circle_bl.jpg')) {
            this.setState({
                uri363: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:4 });}
        if(this.state.uri363===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri363:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot3`).update({ state:5 });}
    };
    changeLogo364=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri364!==require('./circle_bl.jpg')) {
            this.setState({
                uri364: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:4 });}
        if(this.state.uri364===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri364:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot4`).update({ state:5 });}
    };
    changeLogo365=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri365!==require('./circle_bl.jpg')) {
            this.setState({
                uri365: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:4 });}
        if(this.state.uri365===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri365:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot5`).update({ state:5 });}
    };
    changeLogo366=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri366!==require('./circle_bl.jpg')) {
            this.setState({
                uri366: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:4 });}
        if(this.state.uri366===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri366:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot6`).update({ state:5 });}
    };
    changeLogo367=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri367!==require('./circle_bl.jpg')) {
            this.setState({
                uri367: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:4 });}
        if(this.state.uri367===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri367:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot7`).update({ state:5 });}
    };
    changeLogo368=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri368!==require('./circle_bl.jpg')) {
            this.setState({
                uri368: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:4 });}
        if(this.state.uri368===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri368:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot8`).update({ state:5 });}
    };
    changeLogo369=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri369!==require('./circle_bl.jpg')) {
            this.setState({
                uri369: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:4 });}
        if(this.state.uri369===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri369:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot9`).update({ state:5 });}
    };
    changeLogo370=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri370!==require('./circle_bl.jpg')) {
            this.setState({
                uri370: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:4 });}
        if(this.state.uri370===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri370:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot10`).update({ state:5 });}
    };
    changeLogo371=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri371!==require('./circle_bl.jpg')) {
            this.setState({
                uri371: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:4 });}
        if(this.state.uri371===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri371:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot11`).update({ state:5 });}
    };
    changeLogo372=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri372!==require('./circle_bl.jpg')) {
            this.setState({
                uri372: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:4 });}
        if(this.state.uri372===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri372:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot12`).update({ state:5 });}
    };
    changeLogo373=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri373!==require('./circle_bl.jpg')) {
            this.setState({
                uri373: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:4 });}
        if(this.state.uri373===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri373:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot13`).update({ state:5 });}
    };
    changeLogo374=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri374!==require('./circle_bl.jpg')) {
            this.setState({
                uri374: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:4 });}
        if(this.state.uri374===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri374:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot14`).update({ state:5 });}
    };
    changeLogo375=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri375!==require('./circle_bl.jpg')) {
            this.setState({
                uri375: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:4 });}
        if(this.state.uri375===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri375:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot15`).update({ state:5 });}
    };
    changeLogo376=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri376!==require('./circle_bl.jpg')) {
            this.setState({
                uri376: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:4 });}
        if(this.state.uri376===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri376:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot16`).update({ state:5 });}
    };
    changeLogo377=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri377!==require('./circle_bl.jpg')) {
            this.setState({
                uri377: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:4 });}
        if(this.state.uri377===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri377:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot17`).update({ state:5 });}
    };
    changeLogo378=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri378!==require('./circle_bl.jpg')) {
            this.setState({
                uri378: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:4 });}
        if(this.state.uri378===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri378:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot18`).update({ state:5 });}
    };
    changeLogo379=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri379!==require('./circle_bl.jpg')) {
            this.setState({
                uri379: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:4 });}
        if(this.state.uri379===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri379:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot19`).update({ state:5 });}
    };
    changeLogo380=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri380!==require('./circle_bl.jpg')) {
            this.setState({
                uri380: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:4 });}
        if(this.state.uri380===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri380:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot20`).update({ state:5 });}
    };
    changeLogo381=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri381!==require('./circle_bl.jpg')) {
            this.setState({
                uri381: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:4 });}
        if(this.state.uri381===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri381:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot21`).update({ state:5 });}
    };
    changeLogo382=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri382!==require('./circle_bl.jpg')) {
            this.setState({
                uri382: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:4 });}
        if(this.state.uri382===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri382:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot22`).update({ state:5 });}
    };
    changeLogo383=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri383!==require('./circle_bl.jpg')) {
            this.setState({
                uri383: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:4 });}
        if(this.state.uri383===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri383:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot23`).update({ state:5 });}
    };
    changeLogo384=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri384!==require('./circle_bl.jpg')) {
            this.setState({
                uri384: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:4 });}
        if(this.state.uri384===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri384:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot24`).update({ state:5 });}
    };
    changeLogo385=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri385!==require('./circle_bl.jpg')) {
            this.setState({
                uri385: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:4 });}
        if(this.state.uri385===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri385:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot25`).update({ state:5 });}
    };
    changeLogo386=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri386!==require('./circle_bl.jpg')) {
            this.setState({
                uri386: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:4 });}
        if(this.state.uri386===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri386:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot26`).update({ state:5 });}
    };
    changeLogo387=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri387!==require('./circle_bl.jpg')) {
            this.setState({
                uri387: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:4 });}
        if(this.state.uri387===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri387:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot27`).update({ state:5 });}
    };
    changeLogo388=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri388!==require('./circle_bl.jpg')) {
            this.setState({
                uri388: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:4 });}
        if(this.state.uri388===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri388:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot28`).update({ state:5 });}
    };
    changeLogo389=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri389!==require('./circle_bl.jpg')) {
            this.setState({
                uri389: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:4 });}
        if(this.state.uri389===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri389:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot29`).update({ state:5 });}
    };
    changeLogo390=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri390!==require('./circle_bl.jpg')) {
            this.setState({
                uri390: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:4 });}
        if(this.state.uri390===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri390:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot30`).update({ state:5 });}
    };
    changeLogo391=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri391!==require('./circle_bl.jpg')) {
            this.setState({
                uri391: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:4 });}
        if(this.state.uri391===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri391:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot31`).update({ state:5 });}
    };
    changeLogo392=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri392!==require('./circle_bl.jpg')) {
            this.setState({
                uri392: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:4 });}
        if(this.state.uri392===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri392:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot32`).update({ state:5 });}
    };
    changeLogo393=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri393!==require('./circle_bl.jpg')) {
            this.setState({
                uri393: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:4 });}
        if(this.state.uri393===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri393:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot33`).update({ state:5 });}
    };
    changeLogo394=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri394!==require('./circle_bl.jpg')) {
            this.setState({
                uri394: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:4 });}
        if(this.state.uri394===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri394:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot34`).update({ state:5 });}
    };
    changeLogo395=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri395!==require('./circle_bl.jpg')) {
            this.setState({
                uri395: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:4 });}
        if(this.state.uri395===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri395:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot35`).update({ state:5 });}
    };
    changeLogo396=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri396!==require('./circle_bl.jpg')) {
            this.setState({
                uri396: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:4 });}
        if(this.state.uri396===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri396:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot36`).update({ state:5 });}
    };
    changeLogo397=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri397!==require('./circle_bl.jpg')) {
            this.setState({
                uri397: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:4 });}
        if(this.state.uri397===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri397:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot37`).update({ state:5 });}
    };
    changeLogo398=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri398!==require('./circle_bl.jpg')) {
            this.setState({
                uri398: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:4 });}
        if(this.state.uri398===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri398:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot38`).update({ state:5 });}
    };
    changeLogo399=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri399!==require('./circle_bl.jpg')) {
            this.setState({
                uri399: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:4 });}
        if(this.state.uri399===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri399:require('./circle_wh.jpg')
                }
            );firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot39`).update({ state:5 });}
    };
    changeLogo400=()=>{
        let user = firebase.auth().currentUser;let name = this.state.changeTask10;let date = this.state.nDate;
        if(this.state.uri400!==require('./circle_bl.jpg')) {
            this.setState({
                uri400: require('./circle_bl.jpg')
            });firebase.database().ref(`Users/${user.uid}/${date}/${name}/dot40`).update({ state:4 });}
        if(this.state.uri400===require('./circle_bl.jpg')) {
            this.setState(
                {
                    uri400:require('./circle_wh.jpg')
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

                            <tr>
                                <td><input type="textField" id="textBox5" className="five" maxLength={10}  value={this.state.changeTask5} onChange={this.handleEditTask5}/><button onClick={this.addTask5}>+</button><button onClick={this.delTask5}>-</button></td>
                                <td><img  id='id161' className="five" src={this.state.uri161} alt=''  height={20} onClick={this.changeLogo161}/><img  id='id162' className="five" src={this.state.uri162} alt=''  height={20} onClick={this.changeLogo162}/><img  id='id163' className="five" src={this.state.uri163} alt=''  height={20} onClick={this.changeLogo163}/><img  id='id164' className="five" src={this.state.uri164} alt=''  height={20} onClick={this.changeLogo164}/></td>
                                <td ><img id='id165' className="five" src={this.state.uri165} alt=''  height={20} onClick={this.changeLogo165}/><img  id='id166' className="five" src={this.state.uri166} alt=''  height={20} onClick={this.changeLogo166}/><img  id='id167' className="five" src={this.state.uri167} alt=''  height={20} onClick={this.changeLogo167}/><img  id='id168' className="five" src={this.state.uri168} alt=''  height={20} onClick={this.changeLogo168}/></td>
                                <td ><img id='id169' className="five" src={this.state.uri169} alt=''  height={20} onClick={this.changeLogo169}/><img  id='id170' className="five" src={this.state.uri170} alt=''  height={20} onClick={this.changeLogo170}/><img  id='id171' className="five" src={this.state.uri171} alt=''  height={20} onClick={this.changeLogo171}/><img  id='id172' className="five" src={this.state.uri172} alt=''  height={20} onClick={this.changeLogo172}/></td>
                                <td ><img id='id173' className="five" src={this.state.uri173} alt=''  height={20} onClick={this.changeLogo173}/><img  id='id174' className="five" src={this.state.uri174} alt=''  height={20} onClick={this.changeLogo174}/><img  id='id175' className="five" src={this.state.uri175} alt=''  height={20} onClick={this.changeLogo175}/><img  id='id176' className="five" src={this.state.uri176} alt=''  height={20} onClick={this.changeLogo176}/></td>
                                <td ><img id='id177' className="five" src={this.state.uri177} alt=''  height={20} onClick={this.changeLogo177}/><img  id='id178' className="five" src={this.state.uri178} alt=''  height={20} onClick={this.changeLogo178}/><img  id='id179' className="five" src={this.state.uri179} alt=''  height={20} onClick={this.changeLogo179}/><img  id='id180' className="five" src={this.state.uri180} alt=''  height={20} onClick={this.changeLogo180}/></td>
                                <td ><img id='id181' className="five" src={this.state.uri181} alt=''  height={20} onClick={this.changeLogo181}/><img  id='id182' className="five" src={this.state.uri182} alt=''  height={20} onClick={this.changeLogo182}/><img  id='id183' className="five" src={this.state.uri183} alt=''  height={20} onClick={this.changeLogo183}/><img  id='id184' className="five" src={this.state.uri184} alt=''  height={20} onClick={this.changeLogo184}/></td>
                                <td ><img id='id185' className="five" src={this.state.uri185} alt=''  height={20} onClick={this.changeLogo185}/><img  id='id186' className="five" src={this.state.uri186} alt=''  height={20} onClick={this.changeLogo186}/><img  id='id187' className="five" src={this.state.uri187} alt=''  height={20} onClick={this.changeLogo187}/><img  id='id188' className="five" src={this.state.uri188} alt=''  height={20} onClick={this.changeLogo188}/></td>
                                <td ><img id='id189' className="five" src={this.state.uri189} alt=''  height={20} onClick={this.changeLogo189}/><img  id='id190' className="five" src={this.state.uri190} alt=''  height={20} onClick={this.changeLogo190}/><img  id='id191' className="five" src={this.state.uri191} alt=''  height={20} onClick={this.changeLogo191}/><img  id='id192' className="five" src={this.state.uri192} alt=''  height={20} onClick={this.changeLogo192}/></td>
                                <td ><img id='id193' className="five" src={this.state.uri193} alt=''  height={20} onClick={this.changeLogo193}/><img  id='id194' className="five" src={this.state.uri194} alt=''  height={20} onClick={this.changeLogo194}/><img  id='id195' className="five" src={this.state.uri195} alt=''  height={20} onClick={this.changeLogo195}/><img  id='id196' className="five" src={this.state.uri196} alt=''  height={20} onClick={this.changeLogo196}/></td>
                                <td ><img id='id197' className="five" src={this.state.uri197} alt=''  height={20} onClick={this.changeLogo197}/><img  id='id198' className="five" src={this.state.uri198} alt=''  height={20} onClick={this.changeLogo198}/><img  id='id199' className="five" src={this.state.uri199} alt=''  height={20} onClick={this.changeLogo199}/><img  id='id200' className="five" src={this.state.uri200} alt=''  height={20} onClick={this.changeLogo200}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox6" className="six" maxLength={10}  value={this.state.changeTask6} onChange={this.handleEditTask6}/><button onClick={this.addTask6}>+</button><button onClick={this.delTask6}>-</button></td>
                                <td><img  id='id201' className="six" src={this.state.uri201} alt=''  height={20} onClick={this.changeLogo201}/><img  id='id202' className="six" src={this.state.uri202} alt=''  height={20} onClick={this.changeLogo202}/><img  id='id203' className="six" src={this.state.uri203} alt=''  height={20} onClick={this.changeLogo203}/><img  id='id204' className="six" src={this.state.uri204} alt=''  height={20} onClick={this.changeLogo204}/></td>
                                <td ><img id='id205' className="six" src={this.state.uri205} alt=''  height={20} onClick={this.changeLogo205}/><img  id='id206' className="six" src={this.state.uri206} alt=''  height={20} onClick={this.changeLogo206}/><img  id='id207' className="six" src={this.state.uri207} alt=''  height={20} onClick={this.changeLogo207}/><img  id='id208' className="six" src={this.state.uri208} alt=''  height={20} onClick={this.changeLogo208}/></td>
                                <td ><img id='id209' className="six" src={this.state.uri209} alt=''  height={20} onClick={this.changeLogo209}/><img  id='id210' className="six" src={this.state.uri210} alt=''  height={20} onClick={this.changeLogo210}/><img  id='id211' className="six" src={this.state.uri211} alt=''  height={20} onClick={this.changeLogo211}/><img  id='id212' className="six" src={this.state.uri212} alt=''  height={20} onClick={this.changeLogo212}/></td>
                                <td ><img id='id213' className="six" src={this.state.uri213} alt=''  height={20} onClick={this.changeLogo213}/><img  id='id214' className="six" src={this.state.uri214} alt=''  height={20} onClick={this.changeLogo214}/><img  id='id215' className="six" src={this.state.uri215} alt=''  height={20} onClick={this.changeLogo215}/><img  id='id216' className="six" src={this.state.uri216} alt=''  height={20} onClick={this.changeLogo216}/></td>
                                <td ><img id='id217' className="six" src={this.state.uri217} alt=''  height={20} onClick={this.changeLogo217}/><img  id='id218' className="six" src={this.state.uri218} alt=''  height={20} onClick={this.changeLogo218}/><img  id='id219' className="six" src={this.state.uri219} alt=''  height={20} onClick={this.changeLogo219}/><img  id='id220' className="six" src={this.state.uri220} alt=''  height={20} onClick={this.changeLogo220}/></td>
                                <td ><img id='id221' className="six" src={this.state.uri221} alt=''  height={20} onClick={this.changeLogo221}/><img  id='id222' className="six" src={this.state.uri222} alt=''  height={20} onClick={this.changeLogo222}/><img  id='id223' className="six" src={this.state.uri223} alt=''  height={20} onClick={this.changeLogo223}/><img  id='id224' className="six" src={this.state.uri224} alt=''  height={20} onClick={this.changeLogo224}/></td>
                                <td ><img id='id225' className="six" src={this.state.uri225} alt=''  height={20} onClick={this.changeLogo225}/><img  id='id226' className="six" src={this.state.uri226} alt=''  height={20} onClick={this.changeLogo226}/><img  id='id227' className="six" src={this.state.uri227} alt=''  height={20} onClick={this.changeLogo227}/><img  id='id228' className="six" src={this.state.uri228} alt=''  height={20} onClick={this.changeLogo228}/></td>
                                <td ><img id='id229' className="six" src={this.state.uri229} alt=''  height={20} onClick={this.changeLogo229}/><img  id='id230' className="six" src={this.state.uri230} alt=''  height={20} onClick={this.changeLogo230}/><img  id='id231' className="six" src={this.state.uri231} alt=''  height={20} onClick={this.changeLogo231}/><img  id='id232' className="six" src={this.state.uri232} alt=''  height={20} onClick={this.changeLogo232}/></td>
                                <td ><img id='id233' className="six" src={this.state.uri233} alt=''  height={20} onClick={this.changeLogo233}/><img  id='id234' className="six" src={this.state.uri234} alt=''  height={20} onClick={this.changeLogo234}/><img  id='id235' className="six" src={this.state.uri235} alt=''  height={20} onClick={this.changeLogo235}/><img  id='id236' className="six" src={this.state.uri236} alt=''  height={20} onClick={this.changeLogo236}/></td>
                                <td ><img id='id237' className="six" src={this.state.uri237} alt=''  height={20} onClick={this.changeLogo237}/><img  id='id238' className="six" src={this.state.uri238} alt=''  height={20} onClick={this.changeLogo238}/><img  id='id239' className="six" src={this.state.uri239} alt=''  height={20} onClick={this.changeLogo239}/><img  id='id240' className="six" src={this.state.uri240} alt=''  height={20} onClick={this.changeLogo240}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox7" className="seven" maxLength={10}  value={this.state.changeTask7} onChange={this.handleEditTask7}/><button onClick={this.addTask7}>+</button><button onClick={this.delTask7}>-</button></td>
                                <td><img  id='id241' className="seven" src={this.state.uri241} alt=''  height={20} onClick={this.changeLogo241}/><img  id='id242' className="seven" src={this.state.uri242} alt=''  height={20} onClick={this.changeLogo242}/><img  id='id243' className="seven" src={this.state.uri243} alt=''  height={20} onClick={this.changeLogo243}/><img  id='id244' className="seven" src={this.state.uri244} alt=''  height={20} onClick={this.changeLogo244}/></td>
                                <td ><img id='id245' className="seven" src={this.state.uri245} alt=''  height={20} onClick={this.changeLogo245}/><img  id='id246' className="seven" src={this.state.uri246} alt=''  height={20} onClick={this.changeLogo246}/><img  id='id247' className="seven" src={this.state.uri247} alt=''  height={20} onClick={this.changeLogo247}/><img  id='id248' className="seven" src={this.state.uri248} alt=''  height={20} onClick={this.changeLogo248}/></td>
                                <td ><img id='id249' className="seven" src={this.state.uri249} alt=''  height={20} onClick={this.changeLogo249}/><img  id='id250' className="seven" src={this.state.uri250} alt=''  height={20} onClick={this.changeLogo250}/><img  id='id251' className="seven" src={this.state.uri251} alt=''  height={20} onClick={this.changeLogo251}/><img  id='id252' className="seven" src={this.state.uri252} alt=''  height={20} onClick={this.changeLogo252}/></td>
                                <td ><img id='id253' className="seven" src={this.state.uri253} alt=''  height={20} onClick={this.changeLogo253}/><img  id='id254' className="seven" src={this.state.uri254} alt=''  height={20} onClick={this.changeLogo254}/><img  id='id255' className="seven" src={this.state.uri255} alt=''  height={20} onClick={this.changeLogo255}/><img  id='id256' className="seven" src={this.state.uri256} alt=''  height={20} onClick={this.changeLogo256}/></td>
                                <td ><img id='id257' className="seven" src={this.state.uri257} alt=''  height={20} onClick={this.changeLogo257}/><img  id='id258' className="seven" src={this.state.uri258} alt=''  height={20} onClick={this.changeLogo258}/><img  id='id259' className="seven" src={this.state.uri259} alt=''  height={20} onClick={this.changeLogo259}/><img  id='id260' className="seven" src={this.state.uri260} alt=''  height={20} onClick={this.changeLogo260}/></td>
                                <td ><img id='id261' className="seven" src={this.state.uri261} alt=''  height={20} onClick={this.changeLogo261}/><img  id='id262' className="seven" src={this.state.uri262} alt=''  height={20} onClick={this.changeLogo262}/><img  id='id263' className="seven" src={this.state.uri263} alt=''  height={20} onClick={this.changeLogo263}/><img  id='id264' className="seven" src={this.state.uri264} alt=''  height={20} onClick={this.changeLogo264}/></td>
                                <td ><img id='id265' className="seven" src={this.state.uri265} alt=''  height={20} onClick={this.changeLogo265}/><img  id='id266' className="seven" src={this.state.uri266} alt=''  height={20} onClick={this.changeLogo266}/><img  id='id267' className="seven" src={this.state.uri267} alt=''  height={20} onClick={this.changeLogo267}/><img  id='id268' className="seven" src={this.state.uri268} alt=''  height={20} onClick={this.changeLogo268}/></td>
                                <td ><img id='id269' className="seven" src={this.state.uri269} alt=''  height={20} onClick={this.changeLogo269}/><img  id='id270' className="seven" src={this.state.uri270} alt=''  height={20} onClick={this.changeLogo270}/><img  id='id271' className="seven" src={this.state.uri271} alt=''  height={20} onClick={this.changeLogo271}/><img  id='id272' className="seven" src={this.state.uri272} alt=''  height={20} onClick={this.changeLogo272}/></td>
                                <td ><img id='id273' className="seven" src={this.state.uri273} alt=''  height={20} onClick={this.changeLogo273}/><img  id='id274' className="seven" src={this.state.uri274} alt=''  height={20} onClick={this.changeLogo274}/><img  id='id275' className="seven" src={this.state.uri275} alt=''  height={20} onClick={this.changeLogo275}/><img  id='id276' className="seven" src={this.state.uri276} alt=''  height={20} onClick={this.changeLogo276}/></td>
                                <td ><img id='id277' className="seven" src={this.state.uri277} alt=''  height={20} onClick={this.changeLogo277}/><img  id='id278' className="seven" src={this.state.uri278} alt=''  height={20} onClick={this.changeLogo278}/><img  id='id279' className="seven" src={this.state.uri279} alt=''  height={20} onClick={this.changeLogo279}/><img  id='id280' className="seven" src={this.state.uri280} alt=''  height={20} onClick={this.changeLogo280}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox8" className="eight" maxLength={10}  value={this.state.changeTask8} onChange={this.handleEditTask8}/><button onClick={this.addTask8}>+</button><button onClick={this.delTask8}>-</button></td>
                                <td><img  id='id281' className="eight" src={this.state.uri281} alt=''  height={20} onClick={this.changeLogo281}/><img  id='id282' className="eight" src={this.state.uri282} alt=''  height={20} onClick={this.changeLogo282}/><img  id='id283' className="eight" src={this.state.uri283} alt=''  height={20} onClick={this.changeLogo283}/><img  id='id284' className="eight" src={this.state.uri284} alt=''  height={20} onClick={this.changeLogo284}/></td>
                                <td ><img id='id285' className="eight" src={this.state.uri285} alt=''  height={20} onClick={this.changeLogo285}/><img  id='id286' className="eight" src={this.state.uri286} alt=''  height={20} onClick={this.changeLogo286}/><img  id='id287' className="eight" src={this.state.uri287} alt=''  height={20} onClick={this.changeLogo287}/><img  id='id288' className="eight" src={this.state.uri288} alt=''  height={20} onClick={this.changeLogo288}/></td>
                                <td ><img id='id289' className="eight" src={this.state.uri289} alt=''  height={20} onClick={this.changeLogo289}/><img  id='id290' className="eight" src={this.state.uri290} alt=''  height={20} onClick={this.changeLogo290}/><img  id='id291' className="eight" src={this.state.uri291} alt=''  height={20} onClick={this.changeLogo291}/><img  id='id292' className="eight" src={this.state.uri292} alt=''  height={20} onClick={this.changeLogo292}/></td>
                                <td ><img id='id293' className="eight" src={this.state.uri293} alt=''  height={20} onClick={this.changeLogo293}/><img  id='id294' className="eight" src={this.state.uri294} alt=''  height={20} onClick={this.changeLogo294}/><img  id='id295' className="eight" src={this.state.uri295} alt=''  height={20} onClick={this.changeLogo295}/><img  id='id296' className="eight" src={this.state.uri296} alt=''  height={20} onClick={this.changeLogo296}/></td>
                                <td ><img id='id297' className="eight" src={this.state.uri297} alt=''  height={20} onClick={this.changeLogo297}/><img  id='id298' className="eight" src={this.state.uri298} alt=''  height={20} onClick={this.changeLogo298}/><img  id='id299' className="eight" src={this.state.uri299} alt=''  height={20} onClick={this.changeLogo299}/><img  id='id300' className="eight" src={this.state.uri300} alt=''  height={20} onClick={this.changeLogo300}/></td>
                                <td ><img id='id301' className="eight" src={this.state.uri301} alt=''  height={20} onClick={this.changeLogo301}/><img  id='id302' className="eight" src={this.state.uri302} alt=''  height={20} onClick={this.changeLogo302}/><img  id='id303' className="eight" src={this.state.uri303} alt=''  height={20} onClick={this.changeLogo303}/><img  id='id304' className="eight" src={this.state.uri304} alt=''  height={20} onClick={this.changeLogo304}/></td>
                                <td ><img id='id305' className="eight" src={this.state.uri305} alt=''  height={20} onClick={this.changeLogo305}/><img  id='id306' className="eight" src={this.state.uri306} alt=''  height={20} onClick={this.changeLogo306}/><img  id='id307' className="eight" src={this.state.uri307} alt=''  height={20} onClick={this.changeLogo307}/><img  id='id308' className="eight" src={this.state.uri308} alt=''  height={20} onClick={this.changeLogo308}/></td>
                                <td ><img id='id309' className="eight" src={this.state.uri309} alt=''  height={20} onClick={this.changeLogo309}/><img  id='id310' className="eight" src={this.state.uri310} alt=''  height={20} onClick={this.changeLogo310}/><img  id='id311' className="eight" src={this.state.uri311} alt=''  height={20} onClick={this.changeLogo311}/><img  id='id312' className="eight" src={this.state.uri312} alt=''  height={20} onClick={this.changeLogo312}/></td>
                                <td ><img id='id313' className="eight" src={this.state.uri313} alt=''  height={20} onClick={this.changeLogo313}/><img  id='id314' className="eight" src={this.state.uri314} alt=''  height={20} onClick={this.changeLogo314}/><img  id='id315' className="eight" src={this.state.uri315} alt=''  height={20} onClick={this.changeLogo315}/><img  id='id316' className="eight" src={this.state.uri316} alt=''  height={20} onClick={this.changeLogo316}/></td>
                                <td ><img id='id317' className="eight" src={this.state.uri317} alt=''  height={20} onClick={this.changeLogo317}/><img  id='id318' className="eight" src={this.state.uri318} alt=''  height={20} onClick={this.changeLogo318}/><img  id='id319' className="eight" src={this.state.uri319} alt=''  height={20} onClick={this.changeLogo319}/><img  id='id320' className="eight" src={this.state.uri320} alt=''  height={20} onClick={this.changeLogo320}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox9" className="nine" maxLength={10}  value={this.state.changeTask9} onChange={this.handleEditTask9}/><button onClick={this.addTask9}>+</button><button onClick={this.delTask9}>-</button></td>
                                <td><img  id='id321' className="nine" src={this.state.uri321} alt=''  height={20} onClick={this.changeLogo321}/><img  id='id322' className="nine" src={this.state.uri322} alt=''  height={20} onClick={this.changeLogo322}/><img  id='id323' className="nine" src={this.state.uri323} alt=''  height={20} onClick={this.changeLogo323}/><img  id='id324' className="nine" src={this.state.uri324} alt=''  height={20} onClick={this.changeLogo324}/></td>
                                <td ><img id='id325' className="nine" src={this.state.uri325} alt=''  height={20} onClick={this.changeLogo325}/><img  id='id326' className="nine" src={this.state.uri326} alt=''  height={20} onClick={this.changeLogo326}/><img  id='id327' className="nine" src={this.state.uri327} alt=''  height={20} onClick={this.changeLogo327}/><img  id='id328' className="nine" src={this.state.uri328} alt=''  height={20} onClick={this.changeLogo328}/></td>
                                <td ><img id='id329' className="nine" src={this.state.uri329} alt=''  height={20} onClick={this.changeLogo329}/><img  id='id330' className="nine" src={this.state.uri330} alt=''  height={20} onClick={this.changeLogo330}/><img  id='id331' className="nine" src={this.state.uri331} alt=''  height={20} onClick={this.changeLogo331}/><img  id='id332' className="nine" src={this.state.uri332} alt=''  height={20} onClick={this.changeLogo332}/></td>
                                <td ><img id='id333' className="nine" src={this.state.uri333} alt=''  height={20} onClick={this.changeLogo333}/><img  id='id334' className="nine" src={this.state.uri334} alt=''  height={20} onClick={this.changeLogo334}/><img  id='id335' className="nine" src={this.state.uri335} alt=''  height={20} onClick={this.changeLogo335}/><img  id='id336' className="nine" src={this.state.uri336} alt=''  height={20} onClick={this.changeLogo336}/></td>
                                <td ><img id='id337' className="nine" src={this.state.uri337} alt=''  height={20} onClick={this.changeLogo337}/><img  id='id338' className="nine" src={this.state.uri338} alt=''  height={20} onClick={this.changeLogo338}/><img  id='id339' className="nine" src={this.state.uri339} alt=''  height={20} onClick={this.changeLogo339}/><img  id='id340' className="nine" src={this.state.uri340} alt=''  height={20} onClick={this.changeLogo340}/></td>
                                <td ><img id='id341' className="nine" src={this.state.uri341} alt=''  height={20} onClick={this.changeLogo341}/><img  id='id342' className="nine" src={this.state.uri342} alt=''  height={20} onClick={this.changeLogo342}/><img  id='id333' className="nine" src={this.state.uri343} alt=''  height={20} onClick={this.changeLogo343}/><img  id='id344' className="nine" src={this.state.uri344} alt=''  height={20} onClick={this.changeLogo344}/></td>
                                <td ><img id='id345' className="nine" src={this.state.uri345} alt=''  height={20} onClick={this.changeLogo345}/><img  id='id346' className="nine" src={this.state.uri346} alt=''  height={20} onClick={this.changeLogo346}/><img  id='id337' className="nine" src={this.state.uri347} alt=''  height={20} onClick={this.changeLogo347}/><img  id='id348' className="nine" src={this.state.uri348} alt=''  height={20} onClick={this.changeLogo348}/></td>
                                <td ><img id='id349' className="nine" src={this.state.uri349} alt=''  height={20} onClick={this.changeLogo349}/><img  id='id350' className="nine" src={this.state.uri350} alt=''  height={20} onClick={this.changeLogo350}/><img  id='id341' className="nine" src={this.state.uri351} alt=''  height={20} onClick={this.changeLogo351}/><img  id='id352' className="nine" src={this.state.uri352} alt=''  height={20} onClick={this.changeLogo352}/></td>
                                <td ><img id='id353' className="nine" src={this.state.uri353} alt=''  height={20} onClick={this.changeLogo353}/><img  id='id354' className="nine" src={this.state.uri354} alt=''  height={20} onClick={this.changeLogo354}/><img  id='id345' className="nine" src={this.state.uri355} alt=''  height={20} onClick={this.changeLogo355}/><img  id='id356' className="nine" src={this.state.uri356} alt=''  height={20} onClick={this.changeLogo356}/></td>
                                <td ><img id='id357' className="nine" src={this.state.uri357} alt=''  height={20} onClick={this.changeLogo357}/><img  id='id358' className="nine" src={this.state.uri358} alt=''  height={20} onClick={this.changeLogo358}/><img  id='id349' className="nine" src={this.state.uri359} alt=''  height={20} onClick={this.changeLogo359}/><img  id='id360' className="nine" src={this.state.uri360} alt=''  height={20} onClick={this.changeLogo360}/></td>
                            </tr>

                            <tr>
                                <td><input type="textField" id="textBox10" className="ten" maxLength={10}  value={this.state.changeTask10} onChange={this.handleEditTask10}/><button onClick={this.addTask10}>+</button><button onClick={this.delTask10}>-</button></td>
                                <td><img  id='id361' className="ten" src={this.state.uri361} alt=''  height={20} onClick={this.changeLogo361}/><img  id='id362' className="ten" src={this.state.uri362} alt=''  height={20} onClick={this.changeLogo362}/><img  id='id363' className="ten" src={this.state.uri363} alt=''  height={20} onClick={this.changeLogo363}/><img  id='id364' className="ten" src={this.state.uri364} alt=''  height={20} onClick={this.changeLogo364}/></td>
                                <td ><img id='id365' className="ten" src={this.state.uri365} alt=''  height={20} onClick={this.changeLogo365}/><img  id='id366' className="ten" src={this.state.uri366} alt=''  height={20} onClick={this.changeLogo366}/><img  id='id367' className="ten" src={this.state.uri367} alt=''  height={20} onClick={this.changeLogo367}/><img  id='id368' className="ten" src={this.state.uri368} alt=''  height={20} onClick={this.changeLogo368}/></td>
                                <td ><img id='id369' className="ten" src={this.state.uri369} alt=''  height={20} onClick={this.changeLogo369}/><img  id='id370' className="ten" src={this.state.uri370} alt=''  height={20} onClick={this.changeLogo370}/><img  id='id371' className="ten" src={this.state.uri371} alt=''  height={20} onClick={this.changeLogo371}/><img  id='id372' className="ten" src={this.state.uri372} alt=''  height={20} onClick={this.changeLogo372}/></td>
                                <td ><img id='id373' className="ten" src={this.state.uri373} alt=''  height={20} onClick={this.changeLogo373}/><img  id='id374' className="ten" src={this.state.uri374} alt=''  height={20} onClick={this.changeLogo374}/><img  id='id375' className="ten" src={this.state.uri375} alt=''  height={20} onClick={this.changeLogo375}/><img  id='id376' className="ten" src={this.state.uri376} alt=''  height={20} onClick={this.changeLogo376}/></td>
                                <td ><img id='id377' className="ten" src={this.state.uri377} alt=''  height={20} onClick={this.changeLogo377}/><img  id='id378' className="ten" src={this.state.uri378} alt=''  height={20} onClick={this.changeLogo378}/><img  id='id379' className="ten" src={this.state.uri379} alt=''  height={20} onClick={this.changeLogo379}/><img  id='id380' className="ten" src={this.state.uri380} alt=''  height={20} onClick={this.changeLogo380}/></td>
                                <td ><img id='id381' className="ten" src={this.state.uri381} alt=''  height={20} onClick={this.changeLogo381}/><img  id='id382' className="ten" src={this.state.uri382} alt=''  height={20} onClick={this.changeLogo382}/><img  id='id383' className="ten" src={this.state.uri383} alt=''  height={20} onClick={this.changeLogo383}/><img  id='id384' className="ten" src={this.state.uri384} alt=''  height={20} onClick={this.changeLogo384}/></td>
                                <td ><img id='id385' className="ten" src={this.state.uri385} alt=''  height={20} onClick={this.changeLogo385}/><img  id='id386' className="ten" src={this.state.uri386} alt=''  height={20} onClick={this.changeLogo386}/><img  id='id387' className="ten" src={this.state.uri387} alt=''  height={20} onClick={this.changeLogo387}/><img  id='id388' className="ten" src={this.state.uri388} alt=''  height={20} onClick={this.changeLogo388}/></td>
                                <td ><img id='id389' className="ten" src={this.state.uri389} alt=''  height={20} onClick={this.changeLogo389}/><img  id='id390' className="ten" src={this.state.uri390} alt=''  height={20} onClick={this.changeLogo390}/><img  id='id391' className="ten" src={this.state.uri391} alt=''  height={20} onClick={this.changeLogo391}/><img  id='id392' className="ten" src={this.state.uri392} alt=''  height={20} onClick={this.changeLogo392}/></td>
                                <td ><img id='id393' className="ten" src={this.state.uri393} alt=''  height={20} onClick={this.changeLogo393}/><img  id='id394' className="ten" src={this.state.uri394} alt=''  height={20} onClick={this.changeLogo394}/><img  id='id395' className="ten" src={this.state.uri395} alt=''  height={20} onClick={this.changeLogo395}/><img  id='id396' className="ten" src={this.state.uri396} alt=''  height={20} onClick={this.changeLogo396}/></td>
                                <td ><img id='id397' className="ten" src={this.state.uri397} alt=''  height={20} onClick={this.changeLogo397}/><img  id='id398' className="ten" src={this.state.uri398} alt=''  height={20} onClick={this.changeLogo398}/><img  id='id399' className="ten" src={this.state.uri399} alt=''  height={20} onClick={this.changeLogo399}/><img  id='id400' className="ten" src={this.state.uri400} alt=''  height={20} onClick={this.changeLogo400}/></td>
                            </tr>
                        </table>
                    </view>
                </div>
            </div>
        );
    }
}
export {taskPage};
