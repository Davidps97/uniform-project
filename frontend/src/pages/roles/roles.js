import { useEffect, useRef, useState } from "react";
import Sidenav from "../../components/sidenav/sidenav";
import "./roles.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  createRole,
  deleteRole,
  getAllRoles,
  updateRole,
} from "../../services/role.service";
import { Link } from "react-router-dom";

function Roles() {
  const [roles, setRoles] = useState([]);
  const [idToUpdate, setIdToUpdate] = useState(null);
  const nameRef = useRef();

  const getRoles = async () => {
    const allRoles = await getAllRoles();
    setRoles(allRoles);
  };

  const createNewRole = () => {
    createRole(nameRef.current.value).then((response) => {
      getRoles();
      nameRef.current.value = "";
    });
  };

  const deleteSelectedRole = (id) => {
    deleteRole(id).then((response) => {
      getRoles();
    });
  };

  const editPutRole = (name, id) => {
    nameRef.current.value = name;
    setIdToUpdate(id);
  };

  const editSelectedRole = () => {
    updateRole({ name: nameRef.current.value, id: idToUpdate }).then(
      (response) => {
        getRoles();
        nameRef.current.value = "";
        setIdToUpdate(null);
      }
    );
  };

  const getUserData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user.name;
  }

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <div className="home-container">
      <Sidenav />
      <div className="user-container">
        <div className="top-bar">
          <div className="user-name">
            <h2>{getUserData()}</h2>
          </div>
          <div className="user-profile">
            <div className="notification">
              <FaBell />
            </div>
            <div className="user-image"></div>
            <div className="profile-settings"><Link to="/profile">Profile</Link> </div>
            <div className="profile-arrow">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="roles-container">
          <div className="input-roles">
            <h2>Create Role</h2>
            <div className="form__group ">
              <input
                type="input"
                className="form__input"
                placeholder="Tier 1 Role"
                required=""
                ref={nameRef}
              />
              <label htmlFor="name" className="form__label">
                Role Name
              </label>
            </div>
            <div className="buttonRole-container">
              {idToUpdate ? (
                <button className="button-create" onClick={editSelectedRole}>
                  Update Role
                </button>
              ) : (
                <button className="button-create" onClick={createNewRole}>
                  Create Role
                </button>
              )}
            </div>
          </div>
          <div className="divide-bar"></div>
          <div className="list-roles">
            <h2>Roles</h2>
            <table className="roles-table">
              {roles.map((role) => {
                return (
                  <tr key={role.id} className="roles-row">
                    <td className="role-name">{role.name}</td>
                    <td className="edit-role">
                      <button
                        className="button-edit"
                        onClick={() => editPutRole(role.name, role.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td className="delete-role">
                      <button
                        className="button-delete"
                        onClick={() => deleteSelectedRole(role.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
