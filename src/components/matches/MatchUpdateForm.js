import React, { useContext, useEffect, useState } from "react"
import { MatchesContext } from "../matches/EateryOutingProvider"
import { useHistory, useParams } from 'react-router-dom';
import  { Calendar } from 'react-calendar'


export const MatchUpateForm = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    const [match, setMatch] = useState({
        eventTitle: "",
        dateTime: null,
      });


      useEffect( () => {
        //load all the matches
        getSingl
      }, [])

      //handle contolled input change

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