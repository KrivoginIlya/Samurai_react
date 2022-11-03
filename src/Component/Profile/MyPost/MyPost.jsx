import React from "react";
import Post from "./Post/Post.jsx"
import mp from "./MyPost.module.css"


const MyPost = (props)=> {

const postData = props.posts.map(p => <Post name={p.name} img={p.img} message={p.message} like={p.likes}/>)
const newPostElement = React.createRef()

const addPostElement = () => {
  props.addPost()
}
const onPostChange =()=> {
  const text = newPostElement.current.value
 props.updateText(text)
}
     return (
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.textarea}  cols="100" rows="10"/>
          <button onClick={addPostElement}>Send</button>
        </div>
        <div className={mp.containerPost}>
          {postData}
      </div>
      </div>
    )
}
export default MyPost
