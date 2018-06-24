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
                <div className="login-page">
                    <div className="form">
                        <form className="login-form" onSubmit={event => { this.submitLogin(event);}}>
                            <input type="text" placeholder="email" onChange={this.email} value={this.state.email}/>
                            <button>Submit</button>
                            <p className="message">Not registered? <a href={'/CreateAccount'}>Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export{ForgotPassword}