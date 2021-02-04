// object from api is passed in 
//info about the restaurant is displayed 

//TODO:
//handleClickAcceptRestaurant
//update with yelp rating system visuals 

import React, { useState }from "react"
import { Link } from "react-router-dom"
import "./Restaurant.css"

// need to send restaurant.id and restaurant.name along with the click on accept button
export const RestaurantCard = ({restaurant}) => {
    
    return (
        <section className="restaurant">
            <h3 className="restaurant_name"></h3>
            <div className= "restaurant_image_URL">  <img src= {restaurant.image_url} alt="new"/></div>
            <div className= "restaurant_name">{restaurant.name}</div>
            <div className= "restaurant_location">{restaurant.location.display_address}</div>
            <div className= "restaurant_url"> {<a target="_blank" href={restaurant.url}>Yelp</a>}</div>
            <div className= "restaurant_price_range">Price {restaurant.price}</div>
            <div className= "restaurant_rating">Rating {restaurant.rating}</div>
            <button id='restaurant_accept_BTN_${restaurant.id}'onClick={() => {}}>Accept</button>
            <button onClick={() => {}}>Decline</button>
        </section>
    )

    
}