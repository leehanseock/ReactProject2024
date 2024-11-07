import React, {useState} from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "./Greeting";
import WarningBanner from "./WarningBanner";
function LoginControl2(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = ()=>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick = ()=>{
        setIsLoggedIn(false);
    }

    // let btn;
    // if (isLoggedIn){
    //     btn = <LogoutButton onClick={handleLogoutClick}></LogoutButton>
    // } else{
    //     btn = <LoginButton onClick={handleLoginClick}></LoginButton>
    // }

    let btn;
    {isLoggedIn
        ? btn = <LogoutButton onClick={handleLogoutClick}></LogoutButton>
        : btn = <LoginButton onClick={handleLoginClick}></LoginButton>
    }

    return(
        <div>
            <WarningBanner warning={false}/>
            <Greeting isLoggedIn={isLoggedIn}/>
            {btn}
        </div>
    );
}

export default LoginControl2;