import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

import { RestaurantProvider } from "./restaurant/RestaurantProvider"
import { RestaurantForm } from "./restaurant/RestaurantForm"
import { RestaurantList } from "./restaurant/RestaurantList"

import { EateryOutingProvider } from "./matches/EateryOutingProvider"

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

            {/* Render the restaurant form when http://localhost:3000/restaurantOuting */}
            {/* <RestaurantProvider> */}
            <EateryOutingProvider>
                <UserProvider>
                    <Route path ="/restaurantOuting">
                        <RestaurantForm />
                    </Route>
                </UserProvider>
            </EateryOutingProvider>
            {/* </RestaurantProvider> */}
            
            {/* render the restaurant cards to the DOM  */}
            <EateryOutingProvider>
                <RestaurantProvider>
                    <Route path ="/restaurantSelection">
                        <RestaurantList/>
                    </Route>
                </RestaurantProvider>
            </EateryOutingProvider>


        </>
    )
}