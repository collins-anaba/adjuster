import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import './Login.css';
import axios from 'axios';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            admin: false,
            redirect: false,
            user: {},
        }
    }

    handleUsername = (e) => {
        this.setState({username:e.target.value})
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleClick = (e) => {
        const {username, password} = this.state;
        axios.post('/api/login', {username, password}).then(res => {
            this.setState({user:res.data})
        })
    }
    handleEnter = (e) => {
        if(e.key === "Enter"){
            this.handleClick()
        }
    }
render(){
    return (
        <div className=' login-container'>
                <h1>Login</h1>
                <br/>
                <input
                type='text'
                placeholder='Username'
                onChange={this.handleUsername}
                />
                <br/>
                <input
                type='password'
                placeholder='Password'
                onChange={this.handlePassword}
                onKeyPress={this.handleEnter}
                />
                <br/>
                <button onClick= { this.handleClick} onKeyPress={this.handleEnter}>Log In</button>
        </div>
    )
}

}

export default Login