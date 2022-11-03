import React from "react";
import n from "./navbar.module.css"
import NavFriends from "./NavFriends.jsx"

const Navbar = (props)=>{
const navFriend = props.friends.map (f => <NavFriends id={f.id} name = {f.name} imageLink= {f.imageLink} />)
    return (
        <div className={n.navContainer}>
    <nav className={n.nav}>
        <div className={n.nav_a}>
          <a href="/profile" >Profile</a>
        </div>
        <div className={n.nav_a}>
          <a href="/message" >Messages</a>
        </div>
        <div className={n.nav_a}>
          <a href="/news">News</a>
        </div>
        <div className={n.nav_a}>
          <a href="/music">Musics</a>
        </div>
        <br/>
        <div className={n.nav_a}>
          <a href="/seting">Setings</a>
        </div>
    </nav>
    <div className={n.friendsBlock}>
        {navFriend}
    </div>
        </div>
        )
}
export default Navbar;