import React from 'react';
import Admin from './Admin.js';
import User from './User.js';
import Header from './Header.js'

class Welcome extends React.Component {
    constructor(props) {
        super();
        this.state = {
            counter: 0,
            remainingTime: 0
        }
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
        return (
            <React.Fragment>
                <Header/>
                {formType}
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
