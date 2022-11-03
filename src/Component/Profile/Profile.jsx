import React from "react";
import p from "./Profile.module.css"
import CardUser from "./CardUser/CardUser.jsx"
import MyPost from "./MyPost/MyPost.jsx"

const Profile = (props) => {

  return(
    <div className = {p.content}>
      <CardUser/>
      <MyPost posts={props.profilePage.posts}
      addPost={props.addPost}
      textarea={props.textarea}
      updateText={props.updateText}/>
    </div>
  )
}
export default Profile