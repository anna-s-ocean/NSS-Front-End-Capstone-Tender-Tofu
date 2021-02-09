// call the userInterval function 
//filter grab all eateryOutings with the same id in single user restaurant match
//determine if an restaurant id is present twice
//if user or friend can only swipe through list once,
    //do I need to check for both of their ids?
//can grab current eatery outing by useParams?
//

import React, { useState, createContext } from "react"
import { useHistory, useParams } from "react-router-dom" 
import { MatchesContext } from "./EateryOutingProvider"

//how do I make sure this page is running when the friend is swiping through restaurants?

export const PollingFilterMatches = () => {
    const { getMatches, getEateryOutingByFriendId, getEateryOutingById  } = useContext(MatchesContext)
    //singleUserRestaurantMatch fetch call 
    const {eateryOutingFromParamsId} = useParams();
    
    //what hooks do I need? to match my code to the example


    let currentEateryOutingArray = getEateryOutingById(eateryOutingFromParamsId)

    //how do I check for the same restaurant id
    //should I place a seconf params inside of the URL with the restaurantId
    //searching to see if the first matches against every object seems inefficient
    //
    let filtedForMatchArray = currentEateryOutingArray.filter( () => {})

   






}