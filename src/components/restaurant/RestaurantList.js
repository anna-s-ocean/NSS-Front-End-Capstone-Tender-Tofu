//display the restaurant data in a card that can be 
//accepted or declined. accepted restaurants are stored in the database.json as new objects
import React, { useContext, useEffect, useState } from "react"
import { RestaurantContext } from "./RestaurantProvider"
import { RestaurantCard } from "./RestaurantCard"
import { useHistory, useParams } from "react-router-dom" 
import { MatchesContext } from "../matches/EateryOutingProvider"
import { SingleMatchesContext } from "../matches/SingleMatchProvider"
import { useInterval } from "../matches/PollingUseInterval"

export const RestaurantList = () => {
  // This state changes when  getRestaurant() is invoked below
  const { restaurants, getRestaurants } = useContext(RestaurantContext)
  const { getMatches, getEateryOutingById, eateryOutingId , updateEateryOuting  } = useContext(MatchesContext)
  const { addSingleMatch, getSingleMatchesByEateryOutingId } = useContext(SingleMatchesContext)
  const [ restaurantIndex, setRestaurantIndex ] = useState(0)
  const {eateryOutingFromParamsId} = useParams();
  const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))
  const MATCH_REFRESH_INTERVAL = 500; //time delay in milliseconds 
  const [isLoading, setIsLoading] = useState(true); //the purpose of this code?
  const history = useHistory()
  
  useEffect(()=>{
    console.log("use params update the eateryOutingId", eateryOutingFromParamsId)
    getRestaurants()
    .then(getMatches)
  }, [])
  
  useEffect (()=>{ //delete after update to show alert when restaurantIndex > restaurant.length 
    console.log("restaurantIndex update?", restaurantIndex)
  }, [restaurantIndex])


    //extract the id and name of the restaurant
    //update the single matches in database with this information
    //push to the next display of a restaurant
    const handleClickAcceptRestaurant = ( {id, name}) => {
      
      //clear up if statement by using Params both times
      //in if statement push restaurantId and restaurantName to "singleUserRestuarantMatch"
      if (id !== "" && name !== "") {
        //assign all values
         let singleMatch = {
          restaurantId: id,
          restaurantName: name,
          userId: currentUserId,
          eateryOutingId: parseInt(eateryOutingFromParamsId)
        }
        
        //once database is updated, change the url and display the next restaurant
        addSingleMatch(singleMatch)
          .then(() => {
            let taco = restaurantIndex +1
            setRestaurantIndex(taco)})
          .then(displayNext) 
      }
    }

    //function for decline button
    const handleClickDeclineRestaurant = () => {
      let taco = restaurantIndex + 1
      setRestaurantIndex(taco)
      displayNext()
    }
    

    //function to display one restaurant at a time (not a loop, but uses an index)
    //when either accept or delete button is clicked information function is called to show next
    const displayNext = ( ) =>{
      
      if(restaurants.length > restaurantIndex){
        return(
        <RestaurantCard restaurant={restaurants[restaurantIndex]} handleClickAcceptRestaurant={handleClickAcceptRestaurant} handleClickDeclineRestaurant ={handleClickDeclineRestaurant}/>)
        
      }
      // else add field for displaying a message saying you have run out of restaurants 
      // else {
      //   window.alert("I guess you didn't want to go to dinner 🤷")
      // }
  }

  function compare(a, b) {
    
    const restA = a.restaurantId;
    const restB = b.restaurantId;
  
    let comparison = 0;
    if (restA > restB) {
      comparison = 1;
    } else if (restA < restB) {
      comparison = -1;
    }
    return comparison;
  }
   
   //filter to determine if a restaurant id is on the same list twice
   useInterval(  () => {
    //console.log("Checking for matching restaurantId in singleUserRestaurantMatches with the same eateryOuting Id")
  
    getSingleMatchesByEateryOutingId(parseInt(eateryOutingFromParamsId))
    .then(res => {
      res.sort(compare)     
      for( let i= 0;  i < res.length -1 ; i++){
         
        if(res[i].restaurantId === res[i+ 1].restaurantId){ //this is the match
          let id = eateryOutingFromParamsId
          let restaurantName = res[i].restaurantName
          let restaurantId = res[i].restaurantId
          updateEateryOuting(id, restaurantName , restaurantId )
          .then(window.alert("a match has been found " + res[i].restaurantName))
          history.push("/plannedOutings")
          
          return       
        }
      }
    })
   
}, MATCH_REFRESH_INTERVAL)
  
  return (
    <div className= "restaurants">

      <h2>Restaurants</h2>   
     { displayNext() }   

    </div>
  )
}