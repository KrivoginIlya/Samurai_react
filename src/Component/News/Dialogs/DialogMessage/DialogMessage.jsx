import React from "react";
 import style from "./../Dialogs.module.css"

 const Message = (props) => {
    return (
        <div className={style.message}>
            <div className={style.messageContainer}>
            <p>{props.text} </p>
            <img className={style.imguser} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-14.jpg" alt="" /> 
            <span className={style.timeright}>11:00</span>
            </div> 
            </div>
    )
}
export default Message