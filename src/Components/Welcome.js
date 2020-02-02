import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Admin from './Admin.js';
import User from './User.js';
import About from './About.js'
import ContactUs from './ContactUs';
import Toolbar from './Toolbar.js';
import SideDrawer from './SideDrawer.js';
import Backdrop from './Backdrop.js';

class Welcome extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0,
            remainingTime: 0,
            isSideDrawerOpen : false
        }
    }

    SideDrawerOpenHandler = () => {
        this.setState((prevState)=>{
            return {isSideDrawerOpen:!prevState.isSideDrawerOpen}
        });
    }

    BackDropClickHandler = () =>{
        this.setState({isSideDrawerOpen:false})
    }

    componentDidMount() {
        setInterval(this.updateCounter, 1000)
    }
    updateCounter = () => {
        this.setState({ counter: this.state.counter + 1 },
            () => { this.setState({ remainingTime: 1000 - this.state.counter }) });
    }

    render = (props) => {
        // return(
        //     (this.props.user === 'admin')&&<Admin/>
        // )

        var formType 
        if (this.props.match.params.user === 'admin') {
            formType = <Admin/>
        }
        else{
            formType = <User/>
        }
        let sideDrawer;
            let backDrop;
            if (this.state.isSideDrawerOpen){
                sideDrawer=<SideDrawer/>
                backDrop=<Backdrop backDropClick = {this.BackDropClickHandler}/>
            }
        return (
            <React.Fragment>
                <div style={{height:"100%"}}>
                <Toolbar drawerClickHandler={this.SideDrawerOpenHandler}/> 
                {sideDrawer}
                {backDrop}
                <main style={{marginTop:"40px"}}>
                {formType}
                    </main>       
                    </div>
            </React.Fragment>
        )
        // var message
        // if (this.props.user === 'admin') {
        //     message = <Admin />
        // }
        // else {
        //     message = <User />
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
        // if (this.props.user === 'admin')
        // {
        //     return(
        //         <div>
        //             <Admin/>
        //         </div>
        //     )
        // }
        // else 
        // {
        //     return(
        //         <div>
        //             <User/>
        //         </div>
        //     )
        // }
        // return (
        //     <React.Fragment>
        //         <div>
        //             <h1 className='LoginTitle'> Welcome {this.props.user} </h1>
        //             {/* <p>Time Lapsed after Login : {this.state.counter} sec</p> */}
        //             <p>Remainingtime : {this.state.remainingTime} sec</p>
        //             <input type='submit' value='relogin as user' onClick={() =>this.props.AdminOrUserParent(this.state.remainingTime)}/>

        //         </div>
        //     </React.Fragment>
        // )
    }
}
export default Welcome
