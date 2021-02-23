// object from api is passed in 
//info about the restaurant is displayed 

//TODO:
//update with yelp rating system visuals 

import React, { useState }from "react"
import { Link } from "react-router-dom"
import "./Restaurant.css"


export const RestaurantCard = ({restaurant, handleClickAcceptRestaurant, handleClickDeclineRestaurant}) => {
    
    return (
        <section className="restaurant">
            <div className= "restaurant_image_URL">  <img src= {restaurant.image_url} alt="new"/></div>
            <div className= "restaurant_details">
                <div className="restaurant_name_URL">{<a className="restaurant__URL"target="_blank" href={restaurant.url}>{restaurant.name}</a>} </div>
                <div className= "restaurant_location text">{restaurant.location.display_address.join(", ")}</div>
                <div className= "restaurant_price_range text">Price {restaurant.price}</div>
                <div className= "restaurant_rating text">Rating {restaurant.rating}</div>
                <button id= "restaurant_accept_BTN" onClick={() => {handleClickAcceptRestaurant(restaurant)}}> Yummy</button>
                <button id="restaurant_decline_BTN" onClick={handleClickDeclineRestaurant}>Pass</button>
            </div>
        </section>
    )

    
}