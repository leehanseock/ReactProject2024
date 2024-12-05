import React from "react";

function Card3({title,price, rating, imageUrl}){
    return(
        <div className="card">
            <img src={imageUrl} alt={title}/>
            <h3>{title}</h3>
            <p>${price.toLocaleString()}</p>
            <p>⭐ {rating}</p>
        </div>
    );
}

export default Card3;