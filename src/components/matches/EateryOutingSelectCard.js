//displays the match do to short polling 
import React, { useState }from "react"
import { Link } from "react-router-dom"
import "./Matches.css"



export const EateryOutingCard = ({outing, handleClickSelectEateryOuting}) => {
    
    return (
        <section className="eateryOuting">
            <h3 className="eateryOuting_name"></h3>
            <div className= "eateryOuting_friendId"> Friend id: {outing.friendId} </div>
            <div className= "eateryOuting_dateTime"> Date: {outing.dateTime}</div>
            <button id= "eateryOuting_select_BTN" onClick={() => {handleClickSelectEateryOuting(outing)}}> Select</button>
        </section>
    )

    
}