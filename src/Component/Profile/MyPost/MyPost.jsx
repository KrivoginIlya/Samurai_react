import React from "react";
import Post from "./Post/Post.jsx"
import mp from "./MyPost.module.css"


const MyPost = (props)=> {

const postData = props.posts.map(p => <Post name={p.name} img={p.img} message={p.message} like={p.likes}/>)

    return (
      <div>
        <div>
          <textarea name="sdasd" id="" cols="100" rows="10"></textarea>
          <button>Send</button>
        </div>
        <div className={mp.containerPost}>
          {postData}
      </div>
      </div>
    )
}
export default MyPost
