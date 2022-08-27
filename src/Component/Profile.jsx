import React from "react";

const Profile = () => {
return (
    <div className="content">
        <div>
          <img
            className="img_heder_content"
            src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612732084_147-p-zeleno-goluboe-nebo-fon-199.jpg"
          />
        </div>
        <div className="user_info">
        <img width={100} height={100} src="https://img.freepik.com/premium-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg" />
          <div>  
          <p>Name users</p>
           <br />
          <p>Date of Birth  </p>
          <p>City  </p>
          <p>Edukation  </p>
          <p>web site  K</p>          
          </div>
        </div>
        <div>
          <div className="user_post">
            <p>My post</p>
            <input placeholder="your news...." className="user_post_input"></input>
            <br/>
            <button className="user_send_post">Send</button>
          </div>
          <div className= "news_block">my news</div>
          <div className="message_list">my messages</div>
        </div>
      </div>
)
}
export default Profile
