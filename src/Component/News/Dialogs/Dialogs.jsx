import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./DialogItem/DialogItem.jsx"
import Message from "./DialogMessage/DialogMessage.jsx"

const Dialogs = (props) => {
const dialogsElement = props.dialogs.map (d => <Dialog name = {d.name} id = {d.id}/> )
const messagesElement= props.messages.map(m => <Message text = {m.text}  /> )
    return (
<div className={style.dialogs}>
    <div className={style.dialog}>
        {dialogsElement}
            </div> 
    <div className={style.messages}>
         {messagesElement}
         </div>
        </div>
    )
}
   
export default Dialogs