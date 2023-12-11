import CarouselComponent from "../../components/carousel/carousel";
import Sidenav from "../../components/sidenav/sidenav";
import "./home.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Home() {
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
        <div className="carousel-container">
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
