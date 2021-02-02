//display the restaurant data in a card that can be 
//accepted or declined. accepted restaurants are stored in the database.json as new objects


// use r.js to list out the restaurants
import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
// import { UserCard } from "./User"
import { RestaurantContext } from "./RestaurantProvider"
import { RestaurantCard } from "./RestaurantCard"
import { useHistory } from "react-router-dom" 
import "./User.css"

export const RestaurantList = () => {
  // This state changes when  getRestaurant()` is invoked below
  const { restaurants, getRestaurants } = useContext(RestaurantContext)


  const history = useHistory()
  //useEffect - reach out to the world for something
  useEffect(() => {
    
    console.log("RestaurantList: useEffect - getRestaurant")
    getRestaurants()

  }, [])


  return (
    <div className= "restaurants">
    {console.log("RestaurantList: Render", restaurants)}
      <h2>Restaurants</h2>
      
      {
     restaurants.map( r => {
          return <RestaurantCard key={r.id}  r={r} />
        })
      }
    </div>
  )
}