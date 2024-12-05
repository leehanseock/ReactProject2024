import React from "react";

function Card2({title,className,children}){
    return(
        <div className={`card ${className}`}>
            { title && <h1>{title}</h1>}
            {children}
        </div>
    );
}

export default Card2;