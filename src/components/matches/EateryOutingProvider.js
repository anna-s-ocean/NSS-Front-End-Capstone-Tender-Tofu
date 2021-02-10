import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MatchesContext = createContext()

// This component establishes what data can be used.
export const EateryOutingProvider = (props) => {
    let [matches, setMatches] = useState([])
   


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
    // const updateMatches= match => {
    //     return fetch(`http://localhost:8088/eateryOutings/${match.id}`, {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(match)
    //     })
    //       .then(getMatches)
    //   }

      //update the eatery outing with patch 
      const updateEateryOuting = (id,  restaurantName, restaurantId) => {
          return fetch(`http://localhost:8088/eateryOutings/${id}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
            },
              body: JSON.stringify({
                  restaurantName: restaurantName,
                  restaurantId: restaurantId
              })  
          })
          .then( res => res.json())
          .then( json => console.log(json))
      }

      const deleteMatchedEateryOuting = (eateryOutingId) => {
            return fetch(`http://localhost:8088/eateryOutings${eateryOutingId}`, {
                method: "DELETE"
            })
            .then(getMatches)
      }
    /*
         Return a context provider which has the `match` state, `getMatches` function,
        and the `addEateryOuting` function as keys. This allows any child elements to access them.
    */
    return (
        <MatchesContext.Provider value={{
            matches, getMatches, addEateryOuting, getEateryOutingById, getEateryOutingByFriendId, updateEateryOuting, deleteMatchedEateryOuting
        }}>
            {props.children}
        </MatchesContext.Provider>
    )
}