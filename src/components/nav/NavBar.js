


import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/">Tender Tofu</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/users">Users</Link>
            </li> */}
            <li className="navbar__item active">
                <Link className="navbar__link" to="/restaurantOuting">New Restauant Outings</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/pastOutings">Past Restaurant Outings</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/halfwayFilledOutEateryFormNowFriendSelects">Friend's turn to swipe</Link>
            </li>
        </ul>
    )
}