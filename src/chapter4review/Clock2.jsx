import React from "react";

function Clock2(props) {
    return (
        <div>
            <h1>빨리 주말되면 좋겠다</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock2;