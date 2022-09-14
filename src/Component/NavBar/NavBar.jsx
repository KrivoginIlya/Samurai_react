import React from "react";
import n from "./navbar.module.css"

const Navbar = ()=>{
    return (
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
      </nav>)
}
export default Navbar;