import React, { Component } from 'react'

export class Header extends Component {
    constructor(){
        super();
        this.state ={
            RemainingTime : 1000
        }
        setInterval(this.UpdateTimer,1000)
    }
    UpdateTimer=()=>{
        this.setState({RemainingTime:this.state.RemainingTime-1},()=>{
            if (this.state.RemainingTime < 990){ document.getElementById("RemTime").style.color = "Red"}
        })
    }
    render() {
        return (
            <div>
                <h1 id="RemTime">{"Rem Time:" + this.state.RemainingTime}</h1>
                {/* <input type="text" id="RemTime" value={ "Rem Time:" + this.state.RemainingTime} readOnly></input> */}
            </div>
        )
    }
}

export default Header
