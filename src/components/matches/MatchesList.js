// provide a list of past and upcoming eatery outings
//edit and delete functions
//stretch goal to include restaurant details button 

import React, { useContext, useEffect, useState } from "react"
import { MatchesContext } from "./EateryOutingProvider"
import { useHistory, useParams } from "react-router-dom"
import { RestaurantCard } from "../restaurant/RestaurantCard"
import { MatchCard } from "./MatchDisplayCard"
import { RestaurantContext } from "../restaurant/RestaurantProvider"
import "./Matches.css"

export const MatchesList = () => {

    //what needs to be imported?
    const { matches, getMatches, deleteMatchedEateryOuting, getEateryOutingById } = useContext(MatchesContext)
    const { getRestaurants } = useContext(RestaurantContext)
    const [match, setMatch] = useState({})
    const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))
    //what needs to be in the useEffect?
    useEffect(()=>{
        getRestaurants()
        .then(getMatches)
    }, [])   

    const handleClickEditEateryOuting = () => {

    }

    //filter by restaurantId existing in object 
    const CompletedMatchesArray = matches.filter( (match) =>   match.restaurantName)
    const UserFilteredMatchesArray = CompletedMatchesArray.filter( (match ) => (match.userId === currentUserId || match.friendId === currentUserId ))

    console.log(UserFilteredMatchesArray)
    //return statement that includes matchesCard
    return (
        <div className="eateryOutingMatches">
            <h2 className="title">Planned Eatery Outings</h2> 
            <div className="matches">
            {
                UserFilteredMatchesArray.map(match => {
                    return <MatchCard key={match.id} match={match} />
                })
            }
            </div>
        </div>
    )



}