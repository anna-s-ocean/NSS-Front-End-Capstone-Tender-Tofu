import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const MatchesContext = createContext()

// This component establishes what data can be used.
export const MatchesProvider = (props) => {
    const [macthes, setMatches] = useState([])

    const getMatches = () => {
        return fetch("http://localhost:8088/eateryOuting")
        .then(res => res.json())
        .then(console.log())
        .then(setMatches)
    }

    const addEateryOuting = matchesObj => {
        return fetch("http://localhost:8088/eateryOuting", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(matchesObj)
        })
        .then(getMatches)
    }

    const getMatchesById = (id) => {
        return fetch(`http://localhost:8088/eateryOuting/${id}`)
            .then(res => res.json())
    }
    const updateMatches= match => {
        return fetch(`http://localhost:8088/eateryOuting/${match.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(match)
        })
          .then(getMatches)
      }
    /*
        You return a context provider which has the
        `match` state, `getUser` function,
        and the `addEateryOuting` function as keys. This
        allows any child elements to access them.
    */
    return (
        <MatchesContext.Provider value={{
            macthes, getMatches, addEateryOuting, getMatchesById, updateMatches
        }}>
            {props.children}
        </MatchesContext.Provider>
    )
}