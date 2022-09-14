import React from "react";
import p from "./Profile.module.css"
import CardUser from "./CardUser/CardUser.jsx"
import MyPost from "./MyPost/MyPost.jsx"

const Profile = (props) => {
  const posts =[
    {id:1, name:"Jon Finger", message:"Helloy", likes:"452"},
    {id:1, name:"Roman Stem ", message:"Good day", likes:"54"},
    {id:1, name:"Roman Stem ", message:"Good job", likes:"54"},
  ]
  return(
    <div className = {p.content}>
      <CardUser/>
      <MyPost posts={posts}/>
    </div>
  )
}
export default Profile