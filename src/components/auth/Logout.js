import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import "../nav/NavBar.css"

export const Logout = () => {
    const [loggedOut, setLoggedOut] = useState(false)

    const logout = () => {
        localStorage.removeItem("user_tender_tofu")
        setLoggedOut(true)
    }

    if(loggedOut){
        return <Redirect to="/login" push={true} />
    }

    return <button className="logout__button" onClick={logout}>LogOut</button>
}
