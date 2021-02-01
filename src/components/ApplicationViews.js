import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

import { RestaurantProvider } from "./restaurant/RestaurantProvider"
import { RestaurantCard } from "./restaurant/RestaurantCard"

export const ApplicationViews = () => {
    return (
        <>
             {/* Renders when http://localhost:3000/ */}
             <Route exact path="/">
                <Home />
            </Route>

            {/* Render the user list when http://localhost:3000/users */}
            <UserProvider>
                <Route path="/users">
                    <UserList/>
                </Route>
            </UserProvider>

        </>
    )
}