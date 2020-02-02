import React from 'react'
import '../css/Toolbar.css'
import imageFile from '../logo.svg'
import DrawerToggleButton from './DrawerToggleButton.js';

function Toolbar(props) {
    return (
        <header className="toolbar-header">
            <nav className="toolbar-navigation">
                <div>
                    <DrawerToggleButton drawerClickHandler={props.drawerClickHandler}/>
                </div>
                <div className="toolbar-logo">
                    <a href="/">
                        <img width="auto" height="40px" src={imageFile} alt='logo' />
                    </a>
                </div>
                <ul className="toolbar-listitems" >
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
                {/* <div className="Spacer"></div> */}
            </nav>
        </header>
    )
}

export default Toolbar
