//display the restaurant data in a card that can be 
//accepted or declined. accepted restaurants are stored in the database.json as new objects


// use restaurant.js to list out the restaurants
import React, { useContext, useEffect, useState } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import { RestaurantCard } from "./RestaurantCard"
import { useHistory, useParams } from "react-router-dom" 
import { MatchesContext } from "../matches/EateryOutingProvider"


export const RestaurantList = () => {
  // This state changes when  getRestaurant()` is invoked below
  const { restaurants, getRestaurants } = useContext(RestaurantContext)
  const { eateryOutingId } = useContext(MatchesContext)

  const {outingId} = useParams()
  
  const history = useHistory()
  //useEffect - reach out to the world for something
  useEffect(() => {
    
    // console.log("RestaurantList: useEffect - getRestaurant")
    console.log("useEffect", outingId)
    getRestaurants()
    
  }, [])
  
  useEffect(()=> {
    console.log(eateryOutingId)
    
  }, [eateryOutingId])

  const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))

  //create inex and +=
  // need to automatically set eateryOutingId
  const [singleMacthes, setSingleMacthes] = useState({
      userId: currentUserId,
      restaurantId: 0,
      restaurantName: "",
      eateryOutingId: eateryOutingId
    });

  // const handleClickAcceptRestaurant = (event) => {
  //     event.preventDefault()
  //     //gaurd to ensure yes btn was selected
  //     //in if statement push restaurantId and restaurantName to "singleUserRestuarantMatch"
  //     //display next restaurant
  //     if (id.includes("accept_BTN")) {
        
  //     } else {
  //       //invoke addEateryOuting passing restaurant as an argument.
  //       //once complete, change the url and display the animal list
  //       addSingleMatch(singleMacthes)
  //       .then(() => history.push("/restaurantSelection")) //what needs to be displayed
  //     }
  //   }


  //no loop bc not shown all at once
  //display one
  //knows when button is clicked
  //displays next 
  
  return (
    <div className= "restaurants">
    {/* {console.log("RestaurantList: Render", restaurants)} */}
      <h2>Restaurants</h2>
      
      {
     restaurants.map( restaurant => {
          return (<RestaurantCard key={restaurant.id}  restaurant={restaurant} />)
        })
      }
    </div>
  )
}