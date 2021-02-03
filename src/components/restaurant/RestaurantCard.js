// object from api is passed in 
//info about the restaurant is displayed 
//

//TODO:
//update with link tag for url
//update with image tag for image url
//update with yelp rating system visuals 

import React, { useState }from "react"
import SingleMatchesContext from "..matches/SingleMatchProvider"
import { Link } from "react-router-dom"
import "./Restaurant.css"


export const RestaurantCard = ({restaurant}) => {
    const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))

    //need to automatically set eateryOutingId
    const [singleMacthes, setSingleMacthes] = useState({
        userId: currentUserId,
        restaurantId: 0,
        restaurantName: "",
        eateryOutingId: 0
      });

    const handleClickAcceptRestaurant = (event) => {
        event.preventDefault()
        //gaurd to ensure yes btn was selected
        //in if statement push restaurantId and restaurantName to "singleUserRestuarantMatch"
        //display next restaurant
        if (id.includes("accept_BTN")) {
          
        } else {
          //invoke addEateryOuting passing restaurant as an argument.
          //once complete, change the url and display the animal list
          addSingleMatch(singleMacthes)
          .then(() => history.push("/restaurantSelection")) //what needs to be displayed
        }
      }
    return (
        <section className="restaurant">
            <h3 className="restaurant_name"></h3>
            <div className= "restaurant_image_URL">  <img src= {restaurant.image_url} alt="new"/></div>
            <div className= "restaurant_name">{restaurant.name}</div>
            {/* <a target="image" href={restaurant.image_url}>Picture</a> */}
            <div className= "restaurant_location">{restaurant.location.display_address}</div>
            <div className= "restaurant_url"> {<a target="_blank" href={restaurant.url}>Yelp</a>}</div>
            <div className= "restaurant_price_range">Price {restaurant.price}</div>
            <div className= "restaurant_rating">Rating {restaurant.rating}</div>
            <button id="restaurant_accept_BTN" onClick={handleClickAcceptRestaurant}>Accept</button>
            <button onClick={() => {}}>Decline</button>

        </section>
    )

    
}