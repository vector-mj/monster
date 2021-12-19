//@ts-nocheck
import React from "react";
import { Card } from "../card/card.component";
import "./card-list.style.css"

export const Cardlist = (props) =>{
    return <div className="card-list">
        {
            props.Heros.map(Hero=>{
            return <Card Hero={Hero} key={Hero.id}/>
            })
        }
        </div>
}