import React,{Component} from 'react';
import * as firebase from 'firebase';



export default class createAccount extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            rePassword:'',
            error:''
        }
    }
    email=(event)=>{
        this.setState({ email: event.target.value })
    };

    password=(event)=>{
        this.setState({password: event.target.value})
    };

    rePassword=(event)=>{
        this.setState({rePassword: event.target.value})
    };

    submitLogin=(event)=>{
        event.preventDefault();
        if(this.state.password === this.state.rePassword){
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(() =>{this.props.history.push('/login')}
            ).catch((error)=>{
                alert(error);
            });
        }
        if(this.state.password !== this.state.rePassword){
         alert('password mismatch');
        }
    };

    render(){
        return(
            <div className='login_body'>
                <form className='form_login' onSubmit={event => { this.submitLogin(event);}}>
                    <label>Email<br/><input type='text' className='form_email' placeholder='insert email' onChange={this.email} value={this.state.email}/> </label><br/>
                    <br/><label>Password<br/><input type='password' id='pass1' className='form_password' placeholder='insert password' onChange={this.password} value={this.state.password}/> </label><br/>
                    <br/><label>ReType Password<br/><input type='password' id='pass2' className='form_password' placeholder='retype password' onChange={this.rePassword} value={this.state.rePassword}/> </label>
                    <br/><br/><input type='submit' value='Create Account'/>
                    <br/><p>old user?<a href={'/login'}>log in</a></p>
                </form>
                <label onChange={this.state.error}>{this.state.error}</label>
            </div>
        );
    }
}
export{createAccount}