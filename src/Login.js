import React,{Component} from 'react';
import * as firebase from 'firebase';



export default class login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            error:''
        }
    }
    email=(event)=>{
        this.setState({ email: event.target.value })
    };

    password=(event)=>{
        this.setState({password: event.target.value})
    };

    submitLogin=(event)=> {

        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(() =>{this.props.history.push('/TaskPage')}
        ).catch((error)=>{
            alert(error);
        });
    };

    render(){
        return(
            <div className='login_body'>
                <form className='form_login' onSubmit={event => { this.submitLogin(event);}}>
                    <label>Email<br/><input type='text' className='form_email' placeholder='insert email' onChange={this.email} value={this.state.email}/> </label><br/>
                    <br/><label>Password<br/><input type='password' className='form_password' placeholder='insert password' onChange={this.password} value={this.state.password}/> </label>
                    <br/><br/><input type='submit' value='login'/>
                    <br/><p>New user?<a href={'/CreateAccount'}>Create Account</a></p>
                    <p>Forgot Password?<a href={'/ForgotPassword'}>Reset Password</a></p>
                </form>
               <label onChange={this.state.error}>{this.state.error}</label>
            </div>
        );
    }
}
export{login}