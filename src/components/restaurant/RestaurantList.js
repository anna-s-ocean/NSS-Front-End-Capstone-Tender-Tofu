//display the restaurant data in a card that can be 
//accepted or declined. accepted restaurants are stored in the database.json as new objects

import React, { useContext, useEffect, useState } from "react"
import ReactDOM from "react-dom";
import { RestaurantContext } from "./RestaurantProvider"
import { RestaurantCard } from "./RestaurantCard"
import { useHistory, useParams } from "react-router-dom" 
import { MatchesContext } from "../matches/EateryOutingProvider"
import { SingleMatchesContext } from "../matches/SingleMatchProvider"


export const RestaurantList = () => {
  // This state changes when  getRestaurant() is invoked below
  const { restaurants, getRestaurants } = useContext(RestaurantContext)
  const { getMatches, eateryOutingId  } = useContext(MatchesContext)
  const { addSingleMatch } = useContext(SingleMatchesContext)
  const [ restaurantIndex, setRestaurantIndex ] = useState(0)
  
  const history = useHistory()
  
  useEffect(()=>{
    getRestaurants()
    getMatches()
    console.log("update the State of eatery outings id", eateryOutingId)
    
  }, [])
  
  useEffect (()=>{
    console.log("restaurantIndex update?", restaurantIndex)
  }, [restaurantIndex])

    const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))

    //extract the id and name of the restaurant
    //update the single matches in database with this information
    //push to the next display of a restaurant
    const handleClickAcceptRestaurant = ( {id, name}) => {
      //in if statement push restaurantId and restaurantName to "singleUserRestuarantMatch"
      if (id !== "" && name !== "") {
        //assign both values
         let singleMatch = {
          restaurantId: id,
          restaurantName: name,
          userId: currentUserId,
          eateryOutingId: eateryOutingId
        }
        
        //once database is updated, change the url and display the next restaurant
        //check that single match has values if statement
        addSingleMatch(singleMatch)
          .then(() => {
            let taco = restaurantIndex +1
            setRestaurantIndex(taco)})
          .then(displayNext)
        //.then(() => history.push("/restaurantSelection")) 
        //display the next restaurant seclection from where the user left off
      }
    }

    //do I need a function to do nothing is the decline button is pressed Answer: show the next restaurant
    
    const handleClickDeclineRestaurant = () => {
      let taco = restaurantIndex + 1
      setRestaurantIndex(taco)
      displayNext()
    }
    
    //function to display one restaurant at a time (not a loop, but uses an index)
    //when either accept or delete button is clicked information function is called to show next
    const displayNext = ( ) =>{
      //place one restaurant into RestaurantCard
      //how to iternate over the 
      if(restaurants.length > restaurantIndex){
        return(
        <RestaurantCard restaurant={restaurants[restaurantIndex]} handleClickAcceptRestaurant={handleClickAcceptRestaurant} handleClickDeclineRestaurant ={handleClickDeclineRestaurant}/>)
        
      }
      // else add field for displaying a message saying you have run out of restaurants 
      // else {
      //   window.alert("I guess you didn't want to go to dinner 🤷")
      // }
  }
   
  
  
  return (
    <div className= "restaurants">

      <h2>Restaurants</h2>   
     { displayNext() }   

    </div>
  )
}