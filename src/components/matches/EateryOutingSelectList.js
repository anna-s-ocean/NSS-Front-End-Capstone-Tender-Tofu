//display a list of the eatery outing that the friend has not swiped through

import React, { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom";
import {  MatchesContext } from "./EateryOutingProvider";
import { EateryOutingCard } from "./EateryOutingSelectCard"

export const EateryOutingSelectList = () => {
    const { getMatches, getEateryOutingById, getEateryOutingByFriendId  } = useContext(MatchesContext)
    const [eateryOutingsFilter, setEateryOutingsFilter] = useState([])
    const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))
    
    
    
    //update to filter by date 
    useEffect(() =>{
        
        getEateryOutingByFriendId(currentUserId)
         .then((filterFriendArray) => {

             const noRestaurantNameFilterArray = filterFriendArray.filter( (eatingOutingObj)=> eatingOutingObj.restuarantId === undefined)
            
            setEateryOutingsFilter(noRestaurantNameFilterArray)})
    }, [])

    const handleClickSelectEateryOuting = () => {
        // set the state of eateryOutingId
        //display the restaurant select page

    }
    return(
        <div className="eateryOutingSelect">
            <h2>Chose the restaurants</h2>
            {
            eateryOutingsFilter.map(outing => {
                return <EateryOutingCard key= {outing.id} outing={outing} handleClickSelect={handleClickSelectEateryOuting}/>
            })
            }
        </div>
    )
}