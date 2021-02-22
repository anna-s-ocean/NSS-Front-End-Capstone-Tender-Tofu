import React, { useContext, useEffect, useState } from "react"
import { UserList } from "../user/UserList"
import { UserContext } from "../user/UserProvider"
import { RestaurantContext } from "./RestaurantProvider"
import { MatchesContext } from "../matches/EateryOutingProvider"
import { useHistory, useParams } from 'react-router-dom';
import  { Calendar } from 'react-calendar'

// includes drop down with list of Users 
// includes drop down 📅 and time slots
// button to confirm the selection

export const RestaurantForm = () => {
    // const { } = useContext(RestaurantContext)
    const { users, getUsers } = useContext(UserContext)
    const { addEateryOuting } = useContext(MatchesContext)
    const [value, onChange] = useState(new Date())
    const currentUserId = parseInt(window.localStorage.getItem('user_tender_tofu'))


    //what is going to be updated
    //user name of current user
    //user name of friend/user selected
    //date and time range id 
    //set empty for now or set as 0 and update later
    //restaurant foriegn key and restaurant name
    const [restaurant, setRestaurant] = useState({
        userId: currentUserId,
        friendId: 0,
        dateTime: null
      });


      const history = useHistory();
    //   const { friendId } = useParams();
      const [isLoading, setIsLoading] = useState(true);


       /*
      Reach out to the world and get *** state on initialization, 
      so we can provide their data in the form dropdowns
      */
      useEffect( () => {
        getUsers()
        // .then( ()=> {

        // })

      }, [])

    
      //when a field changes, update state. The return will re-render and display based on the values in state
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newRestaurant = { ...restaurant }
        if (typeof event.getMonth === 'function'){
          newRestaurant.dateTime = event
        }else {
          let selectedVal = event.target.value
          if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
          }
          newRestaurant[event.target.id] = selectedVal
        }
        // update state
        setRestaurant(newRestaurant)
    }

    //grab the user id of the current user
    //grab the user id of the user that has been selected on the drop down
    //grab the date
    //grab the time internal 
    //push all of that info into eateryOuting in database.json
    //then display the restaurant cards

    const handleClickSaveRestaurantOuting = (event) => {
      event.preventDefault()
      
      if (restaurant.friendId === 0 || restaurant.dateTime === null) {
        window.alert("Please select a user and a date")
      } else {
        //invoke addEateryOuting passing restaurant as an argument.
        //once complete, change the url and display the animal list
        addEateryOuting(restaurant)
        .then(() => history.push("/restaurantSelection")) 
      }
    }

    //do I want the form to have label for the outing 
    //like New job celebration dinner
    // or monthly catching up?
    return (
        <form className ="restaurantForm">
          <h2 className= "restaurantForm_title">New Restaurant Outing </h2>
          <fieldset>
            <div className="form-group">
              <label htmlFor="user">Select a user: </label>
                  <select defaultValue={restaurant.friendId} name="friendId" id="friendId" onChange={handleControlledInputChange} className="form-control" >
                      
                      <option value="0">Select a user</option>
                      {users.map(u => {
                        if(u.id != currentUserId){

                          return (
                            <option key={u.id} value={u.id}>
                            {u.name}
                            </option>  
                        )
                        }
                        })
                      }
                  </select>
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="date">Select a date: </label>
              <div >
                <Calendar
                  onChange={ event =>
                    handleControlledInputChange(event)}
                  value={value}
                  id="dateTime"
                />
              </div>
            </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveRestaurantOuting}>
            Confirm  Outing 
          </button>
        </form>
    )
}