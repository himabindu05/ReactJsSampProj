import React, { Component } from 'react';

// class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome {this.props.name} to Class Component </h1>
//                 {this.props.children}
//             </div>

//         )
//     }
// }

//Destructuring the props in the class component
class Welcome extends Component{
    render(){
        const {name} = this.props
        return (
        <div>
            <h1>{name} to Class Component</h1>
            {this.props.children}
        </div>
        )
    }
}


export default Welcome;