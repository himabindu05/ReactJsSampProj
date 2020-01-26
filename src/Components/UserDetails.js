import React from 'react';
//import ReactDOM from 'react-dom';
import Person from './Person.js';

class UserDetails extends React.Component {
    render() {
        const Persons = [
            {
                id:1,
                name:'ABC',
                age:10,
                skill:'.Net'
            },
            {
                id:2,
                name:'BCD',
                age:15,
                skill:'Python'
            },
            {
                id:3,
                name:'CDE',
                age:20,
                skill:'JAVA'
            }
        ];
        // const PersonsList = Persons.map(personVar => <Person personName={personVar}/>)
        const PersonsList = Persons.map(personVar => <Person key={personVar.id} person={personVar}></Person>)
        return (
            <div>{PersonsList}
                {/* {
                    Users.map(user => <h2>{user}</h2>)
                } */}
                {/* <h1 className='LoginTitle'>Name</h1>
                <h2>{Users[0]}</h2>
                <h2>{Users[1]}</h2>
                <h2>{Users[2]}</h2>
                <h2>{Users[3]}</h2>
                <h2>{Users[4]}</h2> */}
                {/* <table>
                    <th><td>Name</td></th>
                    <tr><td>{Users[0]}</td></tr>
                    <tr><td>{Users[1]}</td></tr>
                    <tr><td>{Users[2]}</td></tr>
                    <tr><td>{Users[3]}</td></tr>
                    <tr><td>{Users[4]}</td></tr>
                </table> */}
            </div>
        )
    }
}
export default UserDetails;