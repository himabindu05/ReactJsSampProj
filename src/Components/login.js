import React from 'react';
// import Admin from './admin';
// import User from './user';

class login extends React.Component {
    render() {
        //let counter =5;
        // let highlight ={
        //     color: 'green', backgroundcolor: 'grey'
        // }
        // let isValidUser = false;
        // let isAdmin = false;
        // var isAdmin = false;
        // var isValidUser = false;
        // function validateUser(user, password) {
        //     if (user === 'admin' && password === 'admin') {
        //         isValidUser = true;
        //         isAdmin = true;
        //     }
        //     else if (user === 'user1' && password === 'user1') {
        //         isValidUser = true;
        //     }
        // }
        return (

            //JSX

            <form>
                <div>
                    <h1 style={{ color: 'White' }}>Login</h1><br />
                    {/* <h1 style={highlight}>Login</h1><br/> */}
                    <input id='txtUser' type='text' placeholder='User Name'></input><br /><br />
                    <input id='txtPassword' type='password' placeholder='Password'></input><br /><br />
                    <input type='submit' ></input><br /><br />                    
                    {/* <input type='label' value={"counter : "}></input>
                    <input type='text' value={counter * counter }></input> <br/><br/> */}
                </div>                
            </form>

            // //pure Java script
            // React.createElement('form',{},
            // React.createElement('div',{},
            // React.createElement('h1',{},"Login"),
            // React.createElement('br',{}),
            // React.createElement('input',{type:'text', placeholder:'UserName',}),
            // React.createElement('br',{}),
            // React.createElement('br',{}),
            // React.createElement('input',{type:'password', placeholder:'Password',}),
            // React.createElement('br',{}),
            // React.createElement('br',{}),
            // React.createElement('input',{type:'submit', nvalue:'Log',}),
            // React.createElement('br',{}),
            // React.createElement('br',{}),
            // ))
        )
    }
}
export default login;