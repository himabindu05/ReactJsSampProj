import React from 'react';
import ReactDOM from 'react-dom'
import '../css/login.css';
import Welcome from './Welcome.js';

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            ParentCounter : 0
        }
    }
    updateParentCounter = (remTime) =>{
        this.setState({ParentCounter:this.state.ParentCounter+1}, 
            () => {alert(`Hello ${this.state.ParentCounter} ${remTime}`)})        
    }
    AdminOrUser = () => {
        let user = document.getElementById('loginUser').value;
        let password = document.getElementById('loginPassword').value;
        if (user === 'admin' && password === 'admin') {
            document.getElementById('LogCred').hidden = true;
            ReactDOM.render(<Welcome user={user} AdminOrUserParent = {this.updateParentCounter} />, document.getElementById('WelcomeLoad'))
        }
        else if (user === 'user1' && password === 'user1') {
            document.getElementById('LogCred').hidden = true;
            ReactDOM.render(<Welcome user={user} AdminOrUserParent = {this.updateParentCounter} />, document.getElementById('WelcomeLoad'))
        }
        else {
            document.getElementById('credMessage').hidden = false;
        }
    }
    render() {
        return (
            <React.Fragment>
                <div id='LogCred'>
                    <h1 className='LoginTitle'> Login </h1>
                    <input id='loginUser' type='text' placeholder='User Name' /> <br /><br />
                    <input id='loginPassword' type='password' placeholder='Password' /><br /><br />
                    <input type='submit' value='Login' onClick={this.AdminOrUser} /><br />
                    <p id='credMessage' hidden> Enter valid credentials </p>
                </div>
                <h1 className='LoginTitle'> ParentCounter : {this.state.ParentCounter}</h1>
                <div id='WelcomeLoad' className='LoginTitle' /><br />
            </React.Fragment>
        )
    }
}
export default Login;
