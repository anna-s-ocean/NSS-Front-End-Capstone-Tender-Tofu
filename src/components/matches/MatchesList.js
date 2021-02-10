// provide a list of past and upcoming eatery outings
//edit and delete functions
//stretch goal to include restaurant details button 

import React, { useContext, useEffect, useState } from "react"
import { MatchesContext } from "./EateryOutingProvider"
import { useHistory, useParams } from "react-router-dom"
import { RestaurantCard } from "../restaurant/RestaurantCard"
import { MatchCard } from "./MatchDisplayCard"
import { RestaurantContext } from "../restaurant/RestaurantProvider"

export const MatchesList = () => {

    //what needs to be imported?
    const { matches, getMatches } = useContext(MatchesContext)
    const { getRestaurants } = useContext(RestaurantContext)


    //what needs to be in the useEffect?
    useEffect(()=>{
        getMatches()
        getRestaurants()
    }, [])

    //functions?
    //handleClickDelete function
    const handleClickDeleteEateryOuting = () => {

    }

    const handleClickEditEateryOuting = () => {

    }

    //filter by restaurantId existing in object 
    const CompletedMatchesArray = matches.filter( (match) =>   match.restaurantName)
    //return statement that includes matchesCard
    return (
        <div className="eateryOutingMatches">
            <h2>Planned Eatery Outings</h2> 
            {
                CompletedMatchesArray.map(match => {
                    return <MatchCard key={match.id} match={match} />
                })
            }
        </div>
    )



}