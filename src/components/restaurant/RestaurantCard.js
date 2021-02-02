// object from api is passed in 
//info about the restaurant is displayed 
//

//TODO:
//update with link tag for url
//update with image tag for image url
//update with yelp rating system visuals 

import React from "react"
import { Link } from "react-router-dom"


export const RestaurantCard = ({restaurantObj}) => {
    return (
        <section className="restaurant">
            <h3 className="restaurant_name"></h3>
            <div className= "restaurant_name">{restaurantObj.name}</div>
            <div className= "restaurant_image_URL"> <a target="image" href={restaurantObj.image_url}>Picture</a></div>
            <div className= "restaurant_location">{restaurantObj.location.display_address}</div>
            <div className= "restaurant_url"> {<a target="_blank" href={restaurantObj.url}>Yelp</a>}</div>
            <div className= "restaurant_price_range">{restaurantObj.price}</div>
            <div className= "restaurant_rating">{restaurantObj.rating}</div>
        </section>
    )

    
}