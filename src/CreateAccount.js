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
            <div className='login_page'>
                <div className="login-page">
                <form className="form" onSubmit={event => { this.submitLogin(event);}}>
                    <input type="text" placeholder="email address" onChange={this.email} value={this.state.email}/>
                    <input type="password" placeholder="password" onChange={this.password} value={this.state.password}/>
                    <input type="password" placeholder="re-password" onChange={this.rePassword} value={this.state.rePassword}/>
                    <button>create</button>
                    <p className="message">Already registered? <a href={'/login'}>Sign In</a></p>
                </form>
                </div>
            </div>
        );
    }
}
export{createAccount}