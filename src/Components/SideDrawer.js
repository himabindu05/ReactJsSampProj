import React from 'react'
import '../css/Toolbar.css'

function SideDrawer() {
    return (
        <div>
            <nav className="sideDrawer">
                <ul className="sideDrawer-listitems" >
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer
