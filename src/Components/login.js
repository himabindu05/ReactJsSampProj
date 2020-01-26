import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            Comments: '',
            CommType: 'Home'
        }
    }
    handleUserNameChange = (event) => {
        this.setState({ userName: event.target.value })
    }
    handleCommentsChange = (event) => {
        this.setState({ Comments: event.target.value })
    }
    handleCommTypeChange = (event) => {
        this.setState({ CommType: event.target.value })
    }
    handleSubmit = (event) => {
        alert(`${this.state.userName} entered Comments as ${this.state.Comments} through commType as ${this.state.CommType}`)
        event.preventDefault();
    }
    render() {
        const {userName, Comments, CommType} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName : </label>
                    <input type='text' value={userName} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>Comments :</label>
                    <textarea value={Comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>ContactType : </label>
                    <select value={CommType} onChange={this.handleCommTypeChange}>
                        <option value='Home'>Home</option>
                        <option value='Office'>Office</option>
                        <option value='Others'>Others</option>
                    </select>
                </div>
                <div>
                    <input type='submit' value='Submit'></input>
                </div>
            </form>
        )
    }
}
export default Login;

// import React from 'react';
// import ReactDOM from 'react-dom'
// import '../css/login.css';
// import Welcome from './Welcome.js';

// class Login extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             ParentCounter : 0
//         }
//     }
//     updateParentCounter = (remTime) =>{
//         this.setState({ParentCounter:this.state.ParentCounter+1}, 
//             () => {alert(`Hello ${this.state.ParentCounter} ${remTime}`)})        
//     }
//     AdminOrUser = () => {
//         let user = document.getElementById('loginUser').value;
//         let password = document.getElementById('loginPassword').value;
//         if (user === 'admin' && password === 'admin') {
//             document.getElementById('LogCred').hidden = true;
//             ReactDOM.render(<Welcome user={user} AdminOrUserParent = {this.updateParentCounter} />, document.getElementById('WelcomeLoad'))
//         }
//         else if (user === 'user1' && password === 'user1') {
//             document.getElementById('LogCred').hidden = true;
//             ReactDOM.render(<Welcome user={user} AdminOrUserParent = {this.updateParentCounter} />, document.getElementById('WelcomeLoad'))
//         }
//         else {
//             document.getElementById('credMessage').hidden = false;
//         }
//     }
//     render() {
//         return (
//             <React.Fragment>
//                 <div id='LogCred'>
//                     <h1 className='LoginTitle'> Login </h1>
//                     <input id='loginUser' type='text' placeholder='User Name' /> <br /><br />
//                     <input id='loginPassword' type='password' placeholder='Password' /><br /><br />
//                     <input type='submit' value='Login' onClick={this.AdminOrUser} /><br />
//                     <p id='credMessage' hidden> Enter valid credentials </p>
//                 </div>
//                 <h1 className='LoginTitle'> ParentCounter : {this.state.ParentCounter}</h1>
//                 <div id='WelcomeLoad' className='LoginTitle' /><br />
//             </React.Fragment>
//         )
//     }
// }
// export default Login;
