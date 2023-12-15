import Sidenav from "../../components/sidenav/sidenav";
import "./profile.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const getUserData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user;
  }

  const deleteLogout = () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="home-container">
      <Sidenav />
      <div className="user-container">
        <div className="top-bar">
          <div className="user-name">
            <h2>{getUserData().name}</h2>
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
            <div>{getUserData().name}</div>
          </div>
          <div className="e-mail">
            <div>E-mail: </div>
            <div>{getUserData().email}</div>
          </div>
          <div className="role">
            <div>Role: </div>
            <div>{localStorage.getItem("role")}</div>
          </div>
          <div>
            <button className="button-logout" onClick={() => deleteLogout()}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
