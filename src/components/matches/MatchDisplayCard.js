//display the date, location, and friends 
//info from the specfic eatery outing
// desire to display a single match when second user is swiping
//and to display a list of past eateryouting (with all information)
// potential need to change the class for styling
//if statement to ensure that eateryOuting has all the proper key/value pairs

//later add a detail page 
//link to YElP website
//update the date Time
//This is why I wanted to have names for the events :(
import React from "react"

export const MatchCard = ({match}) => {
    return (
        <section className="match">
            <h3 className="match__restaurantName">{ match.restaurantName}</h3>
            <div className="match__userId">{match.userId}</div>
            <div className="match__friendId">{match.friendId}</div>
            <div className="match__dateTime">{match.dateTime}</div>
        </section>
    )
}