import React from 'react';

function Person({person}){
        return (
            <div>
                <h2>I am {person.name} of age {person.age} with skill {person.skill}</h2>
            </div>
        )
}

//notworking
// class Person extends React.Component {
//     render( personVar ) {
//         return (
//             <div>
//                 <h2>I am {personVar.name} of age {personVar.age} with skill {personVar.skill}</h2>
//             </div>
//         )
//     }
// }
export default Person;