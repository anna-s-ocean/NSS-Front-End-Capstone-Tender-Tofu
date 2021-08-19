import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

import { RestaurantProvider } from "./restaurant/RestaurantProvider"
import { RestaurantForm } from "./restaurant/RestaurantForm"
import { RestaurantList } from "./restaurant/RestaurantList"

import { EateryOutingProvider } from "./matches/EateryOutingProvider"
import { SingleMatchesProvider } from "./matches/SingleMatchProvider"
import { EateryOutingSelectList } from "./matches/EateryOutingSelectList"
import { MatchesList } from "./matches/MatchesList"
import { MatchUpdateForm } from "./matches/MatchUpdateForm"

export const ApplicationViews = () => {
    return (
        <>
             {/* Renders when http://localhost:3000/ */}
             {/* <Route exact path="/">
                <Home />
            </Route> */}

            {/* Render the user list when http://localhost:3000/users */}
            {/* <UserProvider>
                <Route path="/users">
                    <UserList/>
                </Route>
            </UserProvider> */}


            {/* Render the restaurant form when http://localhost:3000/restaurantOuting */}
            {/* can only have one eateryOutingProvider because of state errors */}
            <SingleMatchesProvider>
                <EateryOutingProvider>
                    <UserProvider>
                        <RestaurantProvider>
                            <Route exact path="/">
                                <RestaurantForm />
                            </Route>
                            <Route path ="/restaurantOuting">
                                <RestaurantForm />
                            </Route>
                            <Route exact path ="/plannedOutings">
                                <MatchesList/>
                            </Route>
                            <Route exact path ="/restaurantSelection/:eateryOutingFromParamsId(\d+)">
                                <RestaurantList/>
                            </Route>
                            <Route exact path="/halfwayFilledOutEateryFormNowFriendSelects">
                                <EateryOutingSelectList />
                            </Route>
                            <Route exact path ="/matchUpdate">
                                <MatchUpdateForm />
                            </Route>
                        </RestaurantProvider>
                    </UserProvider>
                </EateryOutingProvider>
            </SingleMatchesProvider>
        </>
    )
}