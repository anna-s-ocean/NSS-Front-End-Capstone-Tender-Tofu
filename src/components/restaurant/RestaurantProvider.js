
import React, { useState, createContext } from "react"
import { settings } from "../settings.js";

const yelpKey = settings.yelpKey;
 var token = `Bearer ${yelpKey}`
 var yelp_search_url = 'https://api.yelp.com/v3/businesses/search'
 var cors_anywhere_url ='https://cors-anywhere.herokuapp.com'
 export const RestaurantContext = createContext()

export const RestaurantProvider = (props) => {
    let [restaurants, setRestaurant] = useState([])

     const getRestaurants = () => {
        return  fetch(cors_anywhere_url + '/' + yelp_search_url + '?term=vegan&latitude=36.174465&longitude=-86.767960',
         {method: 'GET',
         headers: {
             'Authorization': token 
         }
         }

     ).then(res => res.json())
     .then(parsedRestaurants => {
         restaurants = parsedRestaurants.data
     })
     .then(console.log(restaurants))
    }

     return (
        <RestaurantContext.Provider value={{
            restaurants, getRestaurants
        }}>
            {props.children}
        </RestaurantContext.Provider>
    )
}

