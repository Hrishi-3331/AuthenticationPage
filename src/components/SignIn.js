import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import * as AuthActions from '../redux/actions/AuthActions'
import { bindActionCreators } from 'redux';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:""
        }
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state.username.length === 0){
            this.throwError("Please enter the username!")
        }
        else if(this.state.username.length < 4){
            this.throwError("Username should be atleast 4 characters long!")
        }
        else if(this.state.password.length === 0){
            this.throwError("Please enter the password!");
        }
        else if(this.state.password.length < 4){
            this.throwError("Passwords should be atleast 4 characters long!");
        }
        else{
            let users = this.props.users.filter(user => (user.username === this.state.username));
            if(users.length === 0){
                this.throwError("Username not found");
            }
            else{
                if(users[0].password !== this.state.password){
                    this.throwError("Incorrect Password");
                }
                else{
                    this.props.actions.loginUser({username:this.state.username, password:this.state.password});
                }
            }
        }
     
    }

    throwError(error) {
        this.setState({
            error
        });
    }

    render(){
        if(this.props.auth.authenticated){
            this.props.history.push("/");
        }
        return(
            <div className="card box-card">
                <div className="form-title">Sign In</div>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <label className="auth-form-label">Username:</label>
                    <input type="text" name="username" className="auth-form-input" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                    <label className="auth-form-label">Password:</label>
                    <input type="password" name="password" className="auth-form-input" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    <div className="form-error">{this.state.error}</div>
                    <button className="auth-form-button">Sign In</button>
                    <div>New User? <Link to="/signup">Register here</Link></div>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        users : state.users,
        auth : state.auth
    })
}

function mapDispatchToProps(dispatch){
    return({
        actions : bindActionCreators(AuthActions, dispatch)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)