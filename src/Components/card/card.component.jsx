//@ts-nocheck
import React from "react";
import "./card.style.css"

export const Card = (props)=>{
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.Hero.id}?set=set1&size=180x180`} alt="monster" />
            <h2>{props.Hero.name}</h2>
            <p>{props.Hero.email}</p>
        </div>
    )
} 