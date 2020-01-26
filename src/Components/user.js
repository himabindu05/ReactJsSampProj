import React, { Component } from 'react'
import UserDetails from './UserDetails'

export class User extends Component {
    render() {
        return (
            <div>
                <h1>Hello User !!!!</h1>
                <UserDetails/>
            </div>
        )
    }
}

export default User
