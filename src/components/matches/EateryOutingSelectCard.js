//displays the match do to short polling 
import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { UserContext } from "../user/UserProvider"
//look back at nutshell to get function for changing friend id to friend name

export const EateryOutingCard = ({outing, handleClickSelect}) => {
    const history = useHistory();
    const { users, getUsers } = useContext(UserContext)

    
    //run between the first and second render
    useEffect(() =>{
        getUsers()
    },[])
    //update the user name with 
    //gaurd; ensure that users has been filled before running the rest of the code 
    if(users.length === 0){
        return null
    }
    let friend = users.find(u => u.id === outing.userId)

    return (
        <section className="eateryOuting">
            <h3 className="eateryOuting_name"></h3>
            <div className= "eateryOuting_friendId"> Friend: {friend.name} </div>
            <div className= "eateryOuting_dateTime"> Date: { new Date(outing.dateTime).toLocaleDateString()}</div>
            <button id= "eateryOuting_select_BTN" onClick={() => {history.push(`/restaurantSelection/${outing.id}`)}}> Select</button>
        </section>
    )
}