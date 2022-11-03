import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {
    return(
        <div className={s.message}>
          <img className={s.userPict} src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" /> 
            <div className={s.text}>      
            <p>{props.text}</p>               
                </div>
        </div>
        
    )
}
export default Message