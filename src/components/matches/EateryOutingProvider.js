import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MatchesContext = createContext()

// This component establishes what data can be used.
export const EateryOutingProvider = (props) => {
    let [matches, setMatches] = useState([])
    let [eateryOutingId, setEateryOutingId] = useState(0)


    const getMatches = () => {
        return fetch("http://localhost:8088/eateryOutings")
        .then(res =>  res.json())
        .then((data) => setMatches(data))
    }
    

    const addEateryOuting = matchesObj => {
        return fetch("http://localhost:8088/eateryOutings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(matchesObj)
        })
        .then(res => res.json())
        .then( (outingObj) => {
            // setEateryOutingId(outingObj.id)})
            getMatches()
            return outingObj.id})  
    }

    const getEateryOutingById = (id) => {
        return fetch(`http://localhost:8088/eateryOutings/${id}`)
            .then(res => res.json())
    }

    const getEateryOutingByFriendId = (id) => {
        return fetch (`http://localhost:8088/eateryOutings?friendId=${id}`)
            .then(res => res.json())
    }
    const updateMatches= match => {
        return fetch(`http://localhost:8088/eateryOutings/${match.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(match)
        })
          .then(getMatches)
      }
      //update the eatery outing with patch 
      

      const updateEateryOuting = (id, restaurantId, restaurantName) => {
          return fetch(`http://localhost:8088/eateryOutings/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
            },
              body: JSON.stringify({
                  restaurantId: restaurantId,
                  restaurantName: restaurantName
              })  
          })
          .then( res => res.json())
          .then( json => console.log(json))
      }
    /*
         Return a context provider which has the `match` state, `getMatches` function,
        and the `addEateryOuting` function as keys. This allows any child elements to access them.
    */
    return (
        <MatchesContext.Provider value={{
            matches, getMatches, addEateryOuting, getEateryOutingById, updateMatches, eateryOutingId, getEateryOutingByFriendId, updateEateryOuting
        }}>
            {props.children}
        </MatchesContext.Provider>
    )
}