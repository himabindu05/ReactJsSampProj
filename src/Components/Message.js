import React, {Component} from 'react';

 class Message extends Component{
     constructor(){
         super();
         this.state = {
             message:'Welcome Visitor',
             count:0
         }
     }
    //  changeMessage(){
    //      this.setState({
    //          message:'Thank You for subscribing',
    //          count:this.state.count+1
    //      },()=> {console.log("Counter afterr callback" + this.state.count)})
    //      console.log("counterValue : " + this.state.count)
    //  }


    //changeMessage when called continously, 
    //the setstate gets clubbed and updates due to which the output would be wrongly overidden

    // changeMessage(){
    //     this.setState({
    //         message:'Thank You for subscribing',
    //         count:this.state.count+1
    //     },()=>this.logConsole())
    //     console.log("counterValue : " + this.state.count)
    // }
     logConsole(){
         const {count} = this.state
         console.log("Counter after callback" + count)
     }

    //Change Message using the previous state

    changeMessage(){
        this.setState(prevState=>({count:prevState.count+1,message:'Thank You for subscribing',}),()=>this.logConsole())
        console.log("counterValue : " + this.state.count)
    }

    changeMessageFive(){
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
    }
    render(){
        const {message, count} = this.state
        return(
            <div>
                <h1>{message}</h1>
                <button onClick={() => this.changeMessageFive()}>Subscribe</button>
        <h2>Subscribers Count : {count}</h2>
            </div>
        )
    }
}

export default Message;