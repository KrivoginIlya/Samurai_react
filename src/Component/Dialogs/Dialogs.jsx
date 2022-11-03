import React from "react";
import style from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem.jsx"


const Dialogs = (props) => {
    return (
<div className={style.dialogs}>
    <div className={style.dialog}>
         <DialogItem dialogs={props.dialogs}/>
            </div> 
    <div className={style.messages}>
          
         </div>
        </div>
    )
}
   
export default Dialogs