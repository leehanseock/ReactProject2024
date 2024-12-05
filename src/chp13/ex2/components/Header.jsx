import React from "react";

function Header(){
    return(
        <header className = "header">
            <div className="logo">Under the Sea</div>
            <nav>
                <a href="/">홈</a>
                <a href="/experiences">오시는 길</a>
                <a href="/online">문의</a>
            </nav>
        </header>
    );
}

export default Header;