import React from 'react';
import Login from './Login.js';
import '../css/login.css';
import imageFile from '../Images/favicon.ico'

class LoginForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='LoginBackground'>
                    <div>
                        <a href="/" >
                            <img width="auto" height="50px" src={imageFile} alt='logo' />
                        </a>
                    </div>
                    <div className='CPJumbotron'>
                        <h1>My Sample Customer Portal</h1>
                        <p>This is my sample project for learning ReactJS</p><br/>
                    </div>
                    <Login />
                </div>
            </React.Fragment>
        )
    }
}
export default LoginForm;
