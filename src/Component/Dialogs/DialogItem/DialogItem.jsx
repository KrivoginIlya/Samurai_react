import React from "react";
import Dialog from "./Dialog/Dialog.jsx"

const DialogItems = (props) => {
    const dialogsElement = props.dialogs.map (el => <Dialog name={el.name} id={el.id}/>)
    return (
        <div>
            <a>{dialogsElement}</a>            
        </div>
    )
}
export default DialogItems