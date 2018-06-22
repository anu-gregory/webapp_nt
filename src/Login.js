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
                <div className="login-page">
                    <div className="form">
                        <form className="login-form" onSubmit={event => { this.submitLogin(event);}}>
                            <input type="text" placeholder="username/email" onChange={this.email} value={this.state.email}/>
                            <input type="password" placeholder="password" onChange={this.password} value={this.state.password}/>
                            <button>login</button>
                            <p className="message">Not registered? <a href={'/CreateAccount'}>Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export{login}