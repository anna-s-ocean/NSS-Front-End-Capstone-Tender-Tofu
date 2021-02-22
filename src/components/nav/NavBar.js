


import React from "react"
import { Link } from "react-router-dom"
import { Logout } from "../auth/Logout"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <>
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/">Tender Tofu</Link>
            </li>
            {/* <li className="navbar__item">
                <Link className="navbar__link" to="/users">Users</Link>
            </li> */}
            {/* <div className="navbar__links"> */}
                <li className="navbar__item">
                    <Link className="navbar__link" to="/restaurantOuting">New Restauant Outings</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/plannedOutings">Planned Restauant Outings</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/halfwayFilledOutEateryFormNowFriendSelects">Friend's turn to swipe</Link>
                </li>
                <li className="navbar__item logout">
                    <Logout />
                </li>
        </ul>
    </>
    )
}