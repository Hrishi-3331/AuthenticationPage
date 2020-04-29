import React from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import * as AuthActions from '../redux/actions/AuthActions' 

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    render() {
        if(!this.props.auth.authenticated){
            setTimeout(() => {
                this.props.history.push("/login");
            }, 2000);
        }
        return(
            <div className="card box-card">
                <div className="form-title">Hello User</div>
                {this.props.auth.authenticated ? (
                     <form className="auth-form">
                     <h5>Logged in as</h5>
                     <h2>{this.props.auth.currentuser}</h2>
                     <button className="auth-form-button" onClick={this.props.actions.logoutUser}>Logout</button>
                 </form>
                ):(
                    <h4>User not authenticated. Redirecting to login page...</h4>
                )}
            </div>
        )
    }
}

function mapStateToProps(state){
    return(
        {
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);