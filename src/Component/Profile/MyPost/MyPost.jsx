import React from "react";
import Post from "./Post/Post.jsx"
import mp from "./MyPost.module.css"
import {addPostAction}  from "../../../Redux/state.js"


const MyPost = (props)=> {

const postData = props.posts.map(p => <Post name={p.name} img={p.img} message={p.message} like={p.likes}/>)
const newPostElement = React.createRef()

const addPost = () => { 
   props.dispatch(addPostAction())
 }
const onPostChange =()=> {
  const text = newPostElement.current.value
  const actionCreate = {
    nameAction:"UPDATATEXT",
    text: text
  }
 props.dispatch(actionCreate)
}
     return (
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.textarea}  cols="100" rows="10"/>
          <button onClick={addPost}>Send</button>
        </div>
        <div className={mp.containerPost}>
          {postData}
      </div>
      </div>
    )
}
export default MyPost
