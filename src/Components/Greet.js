import React from 'react';

// function Greet(){
//     return(
//         <h1>Hello Hima</h1>
//     )
// }

// const Greet = (props) => {
//     return (
//         <div>
//             <h1> {props.name} working as {props.Role}</h1>
//             {props.children}
//         </div>
//     )
// }

//Destructuring the props and state in definition for functional components 
// const Greet = ({name, Role}) => {
//     return(
//         <div>
//             <h1>{name} working as {Role}</h1>
//         </div>
//     )
// }

//Destructuring the props in function body
const Greet = (props) => {
    const {name,Role} = props
    return(
        <div>
            <h1>{name} working now as {Role}</h1>
        </div>
    )
}

export default Greet