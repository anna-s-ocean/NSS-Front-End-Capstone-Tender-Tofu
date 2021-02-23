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
                <li className="navbar__item">
                    <Link className="navbar__link" to="/restaurantOuting">New Restaurant Outings</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/plannedOutings">Planned Restaurant Outings</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/halfwayFilledOutEateryFormNowFriendSelects">Friend's Turn to Swipe</Link>
                </li>
                <li className="navbar__item logout">
                    <Logout />
                </li>
        </ul>
    </>
    )
}