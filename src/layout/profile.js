import React, {useState} from 'react';
import profile_img from "./img/profile_img.png";
import "./profile_dropdown.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

const Profile = () => {
    const [isActive, setIsActive] = useState(false);
    const toggleActive = () =>{
        setIsActive(!isActive);
    };
    return(
        <div className="action">
            <div className="profile">
                <img src={profile_img} onClick={() => toggleActive()} alt="profile pic"/>
                <div className={isActive ? "menu active" : "menu"}>
                    <ul>
                        <li><i className="fa fa-user"/><a href="#">My Profile</a></li>
                        <li><i className="fa fa-lock"/><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;