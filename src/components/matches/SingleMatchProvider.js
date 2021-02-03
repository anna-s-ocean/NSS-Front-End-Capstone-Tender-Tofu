import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const SingleMatchesContext = createContext()

// This component establishes what data can be used.
export const MatchesProvider = (props) => {
    const [singleMacthes, setSingleMatches] = useState([])

    const getSingleMatches = () => {
        return fetch("http://localhost:8088/singleUserRestuarantMatch")
        .then(res => res.json())
        .then(console.log())
        .then(setSingleMatches)
    }
    const addSingleMatch = matchesObj => {
        return fetch("http://localhost:8088/singleUserRestuarantMatch", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(matchesObj)
        })
        .then(getSingleMatches)
    }

    return (
        <SingleMatchesContext.Provider value={{
            singleMacthes, getSingleMatches, addSingleMatch
        }}>
            {props.children}
        </SingleMatchesContext.Provider>
    )
}