import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./DialogItem/DialogItem.jsx"
import Message from "./DialogMessage/DialogMessage.jsx"

const Dialogs = (props) => {
    const dialogs = [
        {id:1, name: "Dimon"},
        {id:2, name: "andrey"},
        {id:3, name: "Nick"},
        {id:4, name: "Lem"},
        {id:5, name: "Jon"},
        {id:6, name: "Fedor"},
    ]
    const messages = [
        {id:1, text: "Dimon rgdgse"},
        {id:2, text: "fgdfvsertbger4"},
        {id:3, text: "Nickhj cfgdf hdfgh"},
        {id:4, text: "Lemvbft stgy ttg"},
        {id:5, text: "Jonxcfty  sr6t4 yrfs56 545t "},
    ]
const dialogsElement = dialogs.map (d => <Dialog name = {d.name} id = {d.id}/> )
const messagesElement= messages.map(m => <Message text = {m.text}  /> )
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