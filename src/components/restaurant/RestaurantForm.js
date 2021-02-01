import { UserList } from "../user/UserList"

// includes drop down with list of Users 
// includes drop down 📅 and time slots
// button to confirm the selection

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';

export const RestaurantForm = () => {
    const { } = useContext(RestaurantContext)


    //what is going to be updated
    //user name of current user
    //user name of friend/user selected
    //date and time range id 
    //set empty for now or set as 0 and update later
    //restaurant foriegn key and restaurant name
    const [restaurant, setRestaurant] = useState({
        userId: "",
        friendId: "",
        dateTime: "",
      });


      const history = useHistory();
    //   const { locationId } = useParams();
      const [isLoading, setIsLoading] = useState(true);;



      useEffect( () => {

      }, [])

    //   update for this field
      //when a field changes, update state. The return will re-render and display based on the values in state
        // NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
    //Controlled component
    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newEmployee = { ...employee }
        
        newEmployee[event.target.id] = event.target.value
        // update state
        setEmployee(newEmployee)
    }


    const handleClickSaveRestaurantOuting = (event) => {

    }

    return (
        
    )
}