//display the restaurant data in a card that can be 
//accepted or declined. accepted restaurants are stored in the database.json as new objects


// use restaurant.js to list out the restaurants
import React, { useContext, useEffect, useState } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import { RestaurantCard } from "./RestaurantCard"
import { useHistory, useParams } from "react-router-dom" 
import { MatchesContext } from "../matches/EateryOutingProvider"
import { SingleMatchesContext } from "../matches/SingleMatchProvider"


export const RestaurantList = () => {
  // This state changes when  getRestaurant() is invoked below
  const { restaurants, getRestaurants } = useContext(RestaurantContext)
  const { matches, getMatches, eateryOutingId  } = useContext(MatchesContext)
  const { addSingleMatch } = useContext(SingleMatchesContext)
  
  const history = useHistory()
  
  useEffect(()=>{
    getRestaurants()
    getMatches()
  }, [])
  
  useEffect(()=> {
    console.log("update the State", eateryOutingId)
    
  }, [eateryOutingId])

  const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))

  
  // need to automatically set eateryOutingId and current User
  // const [singleMatch, setSingleMatch] = useState({
  //     userId: currentUserId,
  //     restaurantId: 0,
  //     restaurantName: "",
  //     eateryOutingId: eateryOutingId
  //   });

    //extract the id and name of the restaurant
    //update the single matches state with this information
    //send new state to the database
    //push to the next display of a restaurant
    //do I need a function to do nothing is the decline button is pressed ANswer: show the next restaurant
    
  const handleClickAcceptRestaurant = ( {id, name}) => {
      
      //gaurd to ensure yes btn was selected
      //in if statement push restaurantId and restaurantName to "singleUserRestuarantMatch"
      //display next restaurant
      if (id != "" && name != "") {
        //assign both values
        let singleMatch = {
          restaurantId: id,
          restaurantName: name,
          userId: currentUserId,
          eateryOutingId: eateryOutingId
        }
        //display the next restaurant seclection from where the user left off
        // .then(() => )
        
      
        //once complete, change the url and display the animal list
        addSingleMatch(singleMatch)
        .then(() => history.push("/restaurantSelection")) //what needs to be displayed
      }
    }


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
          return (<RestaurantCard key={restaurant.id}  restaurant={restaurant} handleClickAcceptRestaurant={handleClickAcceptRestaurant}/>)
        })
      }
    </div>
  )
}