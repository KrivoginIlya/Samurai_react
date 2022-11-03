import React from "react";
import n from "./navbar.module.css"
import { NavLink } from "react-router-dom"

const NavFriend =(props) => {
    const path = "friends" + props.id
    return (
        <div className={n.navFrends} >           
            <img className={n.imgFrends} src={props.imageLink}></img>
            <NavLink to={path}>{props.name} </NavLink>
        </div>
    )
}
export default NavFriend;