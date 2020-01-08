import React from 'react';

const Hello = () => {
    // return (
    //     <div id:'Hello' class = 'dummyClass'>
    //         <h1>My First React JSX</h1>
    //     </div>
    // )
    return (
        React.createElement('div',{id:'Hello',className:'dummyClass'},React.createElement('h1',null,'My First React DOM'))
    )
}

export default Hello;