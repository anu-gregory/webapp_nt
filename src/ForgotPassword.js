import React,{Component} from 'react';
import * as firebase from 'firebase';



export default class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            error:''
        }
    }
    email=(event)=>{
        this.setState({ email: event.target.value })
    };

    submitLogin=(event)=> {
        event.preventDefault();
        firebase.auth().sendPasswordResetEmail(this.state.email).then(() =>{this.props.history.push('/login')}
        ).catch((error)=>{
            alert(error);
        });
    };

    render(){
        return(
            <div className='login_body'>
                <form className='form_login' onSubmit={event => { this.submitLogin(event);}}>
                    <label>Email<br/><input type='text' className='form_email' placeholder='insert email' onChange={this.email} value={this.state.email}/> </label><br/>
                    <br/><br/><input type='submit' value='resetPass'/>
                    <br/><p>New user?<a href={'/CreateAccount'}>Create Account</a></p>
                </form>
                <label onChange={this.state.error}>{this.state.error}</label>
            </div>
        );
    }
}
export{ForgotPassword}