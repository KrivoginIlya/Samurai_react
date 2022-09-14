import React from "react";
import post from "./Post.module.css"

const Post = (props) => {
    
    return(
<div>
    <div className={post.item}>
        <div className={post.header}>
            <img className={post.imguser} src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-14.jpg" alt="" /> 
            <p>{props.name}</p>
        </div>
        <div className = {post.content}>
            <img src="https://sun9-85.userapi.com/impg/aka2IOcgdY3TmZWDtNbkJ5nTRnlBZaLhv6QWHw/J2pG4oVqy_4.jpg?size=1200x800&quality=95&sign=0d7fa1356a4aa8c08181ea50bc4a3749&type=album"/>
        <span>{props.message}</span>
        </div>
        <div className = {post.footer}>
        <button><img className={post.like} src="http://cdn.onlinewebfonts.com/svg/img_165452.png"/> {props.like}</button>
        </div>
    </div>
</div>      
    )  
}
export default Post