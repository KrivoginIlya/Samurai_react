import React from "react";
import card from "./CardUser.module.css"

const CardUser = () => {
    return (
        <div className= {card.user}>
    <div>
        <img
          className={card.img_heder_content}
          src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612732084_147-p-zeleno-goluboe-nebo-fon-199.jpg"
        />
      </div>      
      <div className={card.user_info}>
  <div className={card.data}>
      <img className={card.avatar} src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg" />
  </div>
        <div className={card.data}>  
        <p>Name users</p>
         <br />
        <p>Date of Birth  </p>
        <p>City  </p>
        <p>Edukation  </p>
        <p>web site  K</p>          
        </div>
        <div className={card.data}>

        </div>
      </div>
        </div>

       
      )
}

export default CardUser