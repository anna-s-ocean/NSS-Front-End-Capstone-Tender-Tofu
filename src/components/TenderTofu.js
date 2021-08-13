import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./TenderTofu.css";
import TenderTofuLogo from "./TenderTofuLogo.png";

export const TenderTofu = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("user_tender_tofu")) {
          return (
            <>             
              <img className="logo__Image" src={TenderTofuLogo} alt="logo for Tender Tofu" /> 
             
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);