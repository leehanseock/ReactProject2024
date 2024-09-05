import React from "react";

function Clock(props){
    return (
        <div>
            <h1>Hello, children!</h1>
            <div className='clock'>{new Date().toLocaleTimeString()}</div>
        </div>
    );
}

export default Clock;