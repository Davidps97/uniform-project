import Sidenav from "../../components/sidenav/sidenav";
import "./profile.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Profile() {
  return (
    <div className="home-container">
      <Sidenav />
      <div className="user-container">
        <div className="top-bar">
          <div className="user-name">
            <h2>David Pérez Santana</h2>
          </div>
          <div className="user-profile">
            <div className="notification">
              <FaBell />
            </div>
            <div className="user-image"></div>
            <div className="profile-settings">Profile </div>
            <div className="profile-arrow">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="profile-container">
          <h1>User Profile</h1>
          <div className="name">
            <div>Name: </div>
            <div>David Perez Santana</div>
          </div>
          <div className="e-mail">
            <div>E-mail: </div>
            <div>davidperez@gmail.com</div>
          </div>
          <div className="role">
            <div>Role: </div>
            <div>Tier 1 Role</div>
          </div>
          <div className="button-container">
            <button className="button-logout">Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
