import React, { useContext, useEffect, useState } from "react"
import { MatchesContext } from "../matches/EateryOutingProvider"
import { useHistory, useParams } from 'react-router-dom';
import  { Calendar } from 'react-calendar'


export const MatchUpateForm = () => {
    const history = useHistory();
    const { getMatches, updateEateryOuting } = useContext(MatchesContext)
    const [isLoading, setIsLoading] = useState(true);

    const [match, setMatch] = useState({
        eventTitle: "",
        dateTime: null,
      });


      useEffect( () => {
        //load all the matches
        getMatches();
      }, [])

      //handle contolled input change
      const handleControlledInputChange = (event) => {
        const newMatch = { ...match }
        if (typeof event.getMonth === 'function'){
          console.log(event, "this is the date from the calender")
          new match.dateTime = event
        }else {
          let selectedVal = event.target.value
          if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
          }
          newMatch[event.target.id] = selectedVal
        }
        // update state
        setMatch(newMatch)
      }
      //handle click change 
      const handleClickSaveMatchUpdate = (event) => {
          event.preventDefault()

          if(match.eventTitle != ""){
              window.alert("Please add purpose for the event!")
          }else {
            setIsLoading(true);
        
            if(matchId){  
              updateEateryOuting({
                id: match.id,
                eventTitle: match.eventTitle,
                dateTime: match.dateTime,
            })
            .then(() => history.push("/plannedOutings"))
          }
      }
    }

    //display the restaurant name  an maybe the location as well
      return (
          <form className="matchUpdateForm">
              <h2 className="matchForm_title">Edit Match</h2>

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
          <fieldset>
            <div className="form-group">
              <label htmlFor="EventName">Purpose of Event </label>
              <input type="text" id="eventTitle" onChange={event => handleControlledInputChange(event)}
              required autoFocus className="form-control" placeholder="Why are we getting together?" value={restaurant.eventTitle} />        
            </div>
          </fieldset>
          <button className="btn btn-primary"
            onClick={handleClickSaveMatchUpdate}>
            Confirm  Changes 
          </button>
          </form>
      )
};