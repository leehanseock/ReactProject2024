import React from "react";
import Card3 from "./Card3";
import town from '../imgs/1.jpg'
import diner from '../imgs/2.jpg'
import city from '../imgs/3.jpg'

const listings = [
    {
        id : 1,
        title:"거주지역",
        price:10000,
        rating: 3.2,
        imageUrl: `${town}`
    },
    {
        id:2,
        title : "식당",
        price: 150000,
        rating: 4,
        imageUrl: `${diner}`
    },
    {
        id:3,
        title:"신시가지",
        price: 200000,
        rating: 3.5,
        imageUrl: `${city}`
    },
];

function CardContainer(){
    return(
        <div className="card-container">
            {listings.map(listing =>(
                <Card3 key={listing.id} {...listing}/>
            ))}
        </div>
    );
}

export default CardContainer;