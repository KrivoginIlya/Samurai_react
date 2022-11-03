import React from "react";
import Message from "./Message.jsx"


const Messages = (props) => {
    const messageState = props.message.map (m=> <Message id= {m.id} text={m.text}/>)
    const newMessageElement = React.createRef()

    const addNewMessage = () => {    
    const messageText = newMessageElement.current.value
    props.updateText(messageText)   
    }
    const addMessage =() => { 
    props.addMessage()
    }
return (
    <div>
<p>{messageState}</p>
    <textarea onChange={addNewMessage} ref={newMessageElement} value={props.textarea} cols="100" rows="5"></textarea>
    <button onClick = {addMessage}>Send</button>
    </div>
    
)
}
export default Messages
   