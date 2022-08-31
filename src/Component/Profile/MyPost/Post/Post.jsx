import React from "react";
import post from "./Post.module.css"

const Post = () => {
    return(
<div>
    <div className={post.item}>
        <div className={post.header}>
            <img className={post.imguser} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-14.jpg" alt="" /> 
            <p>Name user</p>
        </div>
        <div className = {post.content}>
            <img  src="https://sun9-53.userapi.com/impg/pvWVXA5nGhT2I_DeMFwVQp98uFx9dduOJlZC-g/r5UtQWIiBgU.jpg?size=604x391&quality=95&sign=8ed7899ddef57044954c462543e5a4f1&type=album"/>        
           Text klajsdiuir eirulwkjerhfgdhdfghdfghdfhdghdhflwiert tjlksrtiwerek  rwlekjrlkwejri4 3rlwkejrj i4ur welkrjw er 
        </div>
        <div className = {post.footer}>
        <button><img className={post.like} src="http://cdn.onlinewebfonts.com/svg/img_165452.png"/> 10</button>
        </div>
    </div>
</div>
        
        
    )
}
export default Post