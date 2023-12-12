import Sidenav from "../../components/sidenav/sidenav";
import "./roles.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Roles() {
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
        <div className="roles-container">
          <div className="input-roles">
            <h2>Create Role</h2>
            <div className="form__group ">
              <input
                type="input"
                className="form__input"
                placeholder="Tier 1 Role"
                required=""
              />
              <label htmlFor="name" className="form__label">
                Role Name
              </label>
            </div>
            <div className="buttonRole-container">
              <button className="button-create">Create Role</button>
            </div>
          </div>
          <div className="divide-bar"></div>
          <div className="list-roles">
            <h2>Roles</h2>
            <table class="roles-table">
              <tr class="roles-row">
                <td class="role-name">Tier 1 Role</td>
                <td class="edit-role">
                  <button class="button-edit">edit</button>
                </td>
                <td class="delete-role">
                  <button class="button-delete">delete</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roles;
