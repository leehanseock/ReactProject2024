import React from "react";
import GuestGreeting from "../chp09/GuestGreeting";
import UserGreeting from "../chp09/UserGreeting";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting/>;
    } return <GuestGreeting/>;
}

export default Greeting;