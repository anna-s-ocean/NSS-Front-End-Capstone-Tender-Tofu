//display info from the specfic eatery outing
//and to display a list of past eateryouting (with all information)
//if statement to ensure that eateryOuting has all the proper key/value pairs

//later add a detail page 
//link to YElP website
//update the date Time
//This is why I wanted to have names for the events :(


//add a button for delete and edit
import React, { useContext } from "react"
import { MatchesContext } from "./EateryOutingProvider"

export const MatchCard = ({match}) => {
    const { deleteMatchedEateryOuting } = useContext(MatchesContext)

    const handleClickDeleteEateryOuting = () => {
        deleteMatchedEateryOuting(match.id)
        // .then()
    }

    return (
        <section className="match">
            <h3 className="match__restaurantName">{ match.restaurantName}</h3>
            <div className="match__userId">{match.userId}</div>
            <div className="match__friendId">{match.friendId}</div>
            <div className="match__dateTime">{match.dateTime}</div>
            <button >Edit</button>
     
            <button onClick={handleClickDeleteEateryOuting}> Delete</button>
        </section>
    )
}