//display a list of the eatery outing that the friend has not swiped through

import React, { useContext, useEffect, useState } from "react"
// import ReactDOM from "react-dom";
import {  MatchesContext } from "./EateryOutingProvider";
import { EateryOutingCard } from "./EateryOutingSelectCard"
import { RestaurantList } from "../restaurant/RestaurantList"

export const EateryOutingSelectList = () => {
    const { getMatches, getEateryOutingByFriendId  } = useContext(MatchesContext)
    let { eateryOutingId, setEateryOutingId }  = useContext(MatchesContext)
    const [eateryOutingsFilter, setEateryOutingsFilter] = useState([])
    const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))
    
    //update to filter by date 
    useEffect(() =>{
        
        getEateryOutingByFriendId(currentUserId)
         .then((filterFriendArray) => {
            //this filter of undefined is not working with undefined as a value of restaurantId
            // another Option is to use for loop with if statement
            //  const noRestaurantNameFilterArray = filterFriendArray.filter( (eatingOutingObj)=> !eatingOutingObj.restuarantId.includes(" "))
            
             let noRestaurantNameFilterArray = []

             for( let i=0; filterFriendArray.length > i; i++){
                    if(filterFriendArray[i].restaurantId){

                    }else{
                        noRestaurantNameFilterArray.push(filterFriendArray[i])
                    }
             }
            setEateryOutingsFilter(noRestaurantNameFilterArray)})
    }, [])

    
    const handleClickSelectEateryOuting = (outingId) => {
        
        eateryOutingId = outingId
        // setEateryOutingId(outingId)
        RestaurantList()
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