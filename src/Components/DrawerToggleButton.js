import React from 'react';
import '../css/Toolbar.css';

function DrawerToggleButton(props) {
    return (
        <button className="toggle_button" onClick={props.drawerClickHandler}>
            <div className="toggle_button_line"></div>
            <div className="toggle_button_line"></div>
            <div className="toggle_button_line"></div>
        </button>
    )
}

export default DrawerToggleButton
