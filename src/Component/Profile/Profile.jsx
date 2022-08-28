import React from "react";
import p from "./Profile.module.css"
import CardUser from "./CardUser/CardUser.jsx"
import MyPost from "./MyPost/MyPost.jsx"

const Profile = () => {
  return(
    <div className = {p.cocontent}>
      <CardUser/>
      <MyPost/>
    </div>
  )
}
export default Profile