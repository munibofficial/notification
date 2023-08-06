import React from "react";
import ReadUnreadIndicator from "./ReadUnreadIndicator";

const NotificationItem = ({notification}) => {
    const itemClass =  notification.read? 'notification-item' : 'notification-item-uread';
    return(
        <div className={itemClass}>
            <div className="item-container">
             <img style={{width:"30px",height:"30px",marginTop: "auto" }} src={notification.avatar} alt="" />   
            <h2 style={{fontSize : "15px" }}>{notification.name}</h2>
            <p style={{fontSize : "12px" }}>{notification.content}</p>
            <h2 style={{fontSize : "15px" }}>{notification.title}</h2>
            <ReadUnreadIndicator read={notification.read} />
            {notification.picture && 
             <img style={{width:"30px" , height:"30px" ,marginLeft:"auto",marginTop:"auto"}} src={notification.picture}/> }
            </div>
            <p style={{marginLeft:"20px",marginTop:"-16px" ,fontSize:"8px" ,padding:"inherit",}}>5 days ago</p>
            {notification.message && 
                <div className="message-container">
                    <p style={{padding:"10px" ,maxWidth: "80%", margin: "0 auto", fontSize:"10px", textAlign:"left",borderRadius:"5px", backgroundColor:"hsl(210, 60%, 98%)"}}>{notification.message}</p>
                </div>
            }
        </div>
    )
}

export default NotificationItem;