import React from "react";
import { NavLink } from "react-router-dom"

const Diolog = (props) => {
    const path = "/message" + props.id
    return (
    <div>
        <NavLink to={path}>
            {props.id} {props.name}
        </NavLink>
    </div>
       
    )
}
export default Diolog