// js to HTML 
import React from "react"
import { Link } from "react-router-dom"
import "./User.css"



export const UserCard = ({ user }) => {
   return (
       <section className="user">
            <h3 className="user__name">
                <Link to={`users/detail/${user.id}`}>
                    {user.name}
                </Link>
            </h3>
            <div className="user__address">{user.address}</div>
        </section>


       ) 
       
   }