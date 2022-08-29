import React from "react";
import Post from "./Post/Post.jsx"
import mp from "./MyPost.module.css"


const MyPost = ()=> {
    return (
        <div className={mp.containerPost}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    )
}
export default MyPost
