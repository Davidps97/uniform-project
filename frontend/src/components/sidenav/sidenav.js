import "./sidenav.css";
import { Link } from "react-router-dom";

function Sidenav() {
  return (
    <div className="sidenav-container">
      <div className="logos-container">
        <img src={"/images/logo-removebg.png"} alt=""></img>
      </div>
      <div className="small-bar"></div>
      <div className="apps-container">
        <Link to="../users" className="circles"></Link>
        <Link to="../roles" className="circles"></Link>
        <div className="circles"></div>
        <div className="circles"></div>
        <div className="circles"></div>
      </div>
    </div>
  );
}

export default Sidenav;
