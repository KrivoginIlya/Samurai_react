import React from "react";
import Post from "./Post/Post.jsx"
import mp from "./MyPost.module.css"


const MyPost = ()=> {

    return (
      <div>
        <div>
          <textarea name="sdasd" id="" cols="100" rows="10"></textarea>
          <button>Send</button>
        </div>
        <div className={mp.containerPost}>
        <Post name='Jon Finger' message='Helloy' like='30'/>
        <Post name='Lily Finger' message='Good day' like='425'/>
      </div>
      </div>
    )
}
export default MyPost
