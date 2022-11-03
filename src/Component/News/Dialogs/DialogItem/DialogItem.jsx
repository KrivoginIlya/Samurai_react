import React from "react";
import { NavLink } from "react-router-dom"
import style from "./../Dialogs.module.css"



const Dialog = (props) => {
    let path = "/message" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink  to={path}>{props.id} {props.name} </NavLink>
        </div>
    )
}
export default  Dialog