import React, { Component } from 'react'
import UserDetails from './UserDetails'

export class Admin extends Component {
    render() {
        return (
            <div>
                <h1 className='LoginTitle'>Hello Admin !!!!</h1>
                <div className='LoginTitle'><UserDetails/></div>
            </div>
        )
    }
}

export default Admin
