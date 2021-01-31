import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

export const ApplicationViews = () => {
    return (
        <>
             {/* Render the location list when http://localhost:3000/ */}
             <Route exact path="/">
                <Home />
            </Route>

            {/* Render the user list when http://localhost:3000/ */}
            <UserProvider>
                <Route path="/user">
                    <UserList/>
                </Route>
            </UserProvider>

        </>
    )
}