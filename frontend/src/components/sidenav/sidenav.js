import "./sidenav.css";
import { Link } from "react-router-dom";
import { CiUser, CiSettings } from "react-icons/ci";
import { LiaPlusSolid } from "react-icons/lia";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import ApplicationForm from "../application-form/Application-form";
import { getAllApplication } from "../../services/application.service";

function Sidenav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applications, setApplications] = useState([]);

  const getApp = async () => {
    const allApps = await getAllApplication();
    setApplications(allApps);
  };

  useEffect(() => {
    getApp();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="sidenav-container">
      <div className="logos-container">
        <Link to="/home">
          <img src={"/images/logo-removebg.png"} alt=""></img>
        </Link>
      </div>
      <div className="small-bar"></div>
      <div className="apps-container">
        {/* { localStorage.getItem("role") === "admin" &} */}
          <>
            <Link to="../users" className="circles">
              <div className="icons-circle">
                <CiUser />
              </div>
            </Link>
            <Link to="../roles" className="circles">
              <div className="icons-circle">
                <CiSettings />
              </div>
            </Link>
          </>
        
        <div className="circles"></div>
        <div className="circles"></div>
        {applications.map((app) => {
          return <div className="circles">{app.name}</div>;
        })}
        {/* { localStorage.getItem("role") === "admin" &} */}
        <div className="circles" onClick={showModal}>
          <div className="icons-circle">
            <LiaPlusSolid />
          </div>
        </div>
        <Modal
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <ApplicationForm getApps={() => getApp()} />
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Sidenav;
