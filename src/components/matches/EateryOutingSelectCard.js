//displays the match do to short polling 
import React from "react"
import { useParams, useHistory } from "react-router-dom"

//look back at nutshell to get function for changing friend id to friend name

export const EateryOutingCard = ({outing, handleClickSelect}) => {
    const history = useHistory();

    return (
        <section className="eateryOuting">
            <h3 className="eateryOuting_name"></h3>
            <div className= "eateryOuting_friendId"> Friend id: {outing.friendId} </div>
            <div className= "eateryOuting_dateTime"> Date: {outing.dateTime.toDateString}</div>
            <button id= "eateryOuting_select_BTN" onClick={() => {history.push(`/restaurantSelection/${outing.id}`)}}> Select</button>
        </section>
    )
}