import React from "react";
import n from "./css/nav_bar.module.css"

const Navbar = ()=>{
    return (
        <nav className={n.nav}>
        <div className={n.nav_a}>
          <a>Profile</a>
        </div>
        <div className={n.nav_a}>
          <a>Messages</a>
        </div>
        <div className={n.nav_a}>
          <a>News</a>
        </div>
        <div className={n.nav_a}>
          <a>Musics</a>
        </div>
        <br/>
        <div className={n.nav_a}>
          <a>Setings</a>
        </div>
      </nav>)
}
export default Navbar;