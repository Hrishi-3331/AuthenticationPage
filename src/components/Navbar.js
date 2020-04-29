import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

function Navbar(props){

    let buttons = !props.auth.authenticated ? (
        <li className="nav-item">
        <NavLink className="nav-link" exact to="/login">SignIn</NavLink>
        </li>
        ) 
    : (<li className="nav-item">
        <NavLink className="nav-link" exact to="/signup">Logout</NavLink>
        </li>);

    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to="/">Home</NavLink> 
                </li>
                {buttons}
            </ul>
        </nav>
    )
}

function mapStateToProps(state){
    return({
        auth : state.auth
    })
}

export default connect(mapStateToProps)(Navbar)