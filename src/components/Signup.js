import React from 'react'
import {Link} from 'react-router-dom'
import * as AuthActions from '../redux/actions/AuthActions';
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error:"",
            username:"",
            password:"",
            confirm_password:""
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
        else if (this.state.password !== this.state.confirm_password){
            this.throwError("Re-enter the same password");
        }
        else{
            let user = {
                username : this.state.username,
                password : this.state.password
            }
            this.props.actions.createUser(user);
            this.props.actions.loginUser(user);
        }
    }

    throwError(error) {
        this.setState({
            error
        });
    }

    render() {

        if(this.props.auth.authenticated){
            this.props.history.push("/");
        }

        return(
            <div className="card box-card">
                <div className="form-title">Register Now</div>
                <form className="auth-form" onSubmit={this.handleSubmit}>
                    <label className="auth-form-label">Username:</label>
                    <input type="text" name="username" className="auth-form-input" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                    <label className="auth-form-label">Password:</label>
                    <input type="password" name="password" className="auth-form-input" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                    <label className="auth-form-label">Confirm Password:</label>
                    <input type="password" name="confirm_password" className="auth-form-input" placeholder="Re-enter Password" value={this.state.confirm_password} onChange={this.handleChange}/>
                    <div className="form-error">{this.state.error}</div>
                    <button className="auth-form-button">Register</button>
                    <div>Already have an account? <Link to="/login">Signin here</Link></div>
                </form>
            </div>
        )
    }
}

Signup.propTypes = {
    actions : PropTypes.object.isRequired
}

function mapStateToProps(state){
    return(
        {
            users : state.users,
            auth : state.auth
        }
    )
}

function mapDispatchToProps(dispatch){
    return(
        {
            actions : bindActionCreators(AuthActions, dispatch)
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);