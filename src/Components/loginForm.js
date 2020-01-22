import React from 'react';
import '../css/login.css';
import Login from './login';
import logo from '../logo.svg'

class loginForm extends React.Component{
    render(){
        return(
            <div className='loginBackGround'>
                <img src={logo} height='100px' alt='logo'></img>
                <div className='highlightLogin'>Welcome to the Site and enjoy browsing all the available options on the site </div>
                <Login/>
            </div>
        )
    }
}

export default loginForm;