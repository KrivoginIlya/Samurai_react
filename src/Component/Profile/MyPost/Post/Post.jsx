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
            {/* <img  src="https://img2.goodfon.ru/wallpaper/nbig/4/4a/auto-cars-ac-cobra-cobra.jpg"/>         */}
        <span>{props.message}</span>
        </div>
        <div className = {post.footer}>
        <button><img className={post.like} src="http://cdn.onlinewebfonts.com/svg/img_165452.png"/>{props.like}</button>
        </div>
    </div>
</div>      
    )  
}
export default Post