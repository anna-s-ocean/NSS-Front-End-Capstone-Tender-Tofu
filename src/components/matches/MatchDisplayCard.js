//display info from the specfic eatery outing
//and to display a list of past eateryouting (with all information)
//for filtering events ensure restaurantName exist and compare to Date.now
//if statement to ensure that eateryOuting has all the proper key/value pairs

//later add a detail page 
//link to YElP website
//update the date Time
//This is why I wanted to have names for the events :(


//add a button for delete and edit
import React, { useContext, useEffect } from "react"
import { MatchesContext } from "./EateryOutingProvider"
import { UserContext } from "../user/UserProvider"

export const MatchCard = ({match}) => {
    const { deleteMatchedEateryOuting } = useContext(MatchesContext)
    const { users, getUsers } = useContext(UserContext)

    useEffect(() =>{
        getUsers()
    },[])

    const handleClickDeleteEateryOuting = () => {
        deleteMatchedEateryOuting(match.id) 
    }
    
    //gaurd; ensure that users has been filled before running the rest of the code 
    if(users.length === 0){
        return null
    }
    //display the user name instead of the 
    let user = users.find(u => u.id === match.userId)
    let friend= users.find(u => u.id === match.friendId)

    return (
        <section className="match">
            <h3 className="match__restaurantName">{ match.restaurantName}</h3>
            <div className="match_friends">Friends: {user.name}  and  {friend.name}</div>
            <div className="match__dateTime">{ new Date(match.dateTime).toLocaleDateString()}</div>
            {/* <button >Edit</button> */}
            <button onClick={handleClickDeleteEateryOuting}> Delete</button>
        </section>
    )
}