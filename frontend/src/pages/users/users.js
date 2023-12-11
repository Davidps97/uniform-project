import Sidenav from "../../components/sidenav/sidenav";
import "./users.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Users() {
  return (
    <div className="home-container">
      <Sidenav />
      <div className="user-container">
        <div className="top-bar">
          <div className="user-search">
            <input></input>
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
        <div className="users-crud-container">
          <div className="users-list">
            <h2>Users</h2>
            <div className="user-row">
              <div className="user-data">
                <div className="user-img"></div>
                <div className="user-name-role">
                  <div className="user-name-list">David</div>
                  <div className="user-role-list">Admin</div>
                </div>
              </div>
              <div className="edit-user">
                <button className="button-edit">edit</button>
              </div>
              <div className="delete-user">
                <button className="button-delete">delete</button>
              </div>
            </div>
          </div>
          <div className="users-create">
            <h2>Create User</h2>
            <div class="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="David Pérez"
                required=""
              />
              <label for="name" className="form__label">
                Name:
              </label>
            </div>
            <div class="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="davidperez@gmail.com"
                required=""
              />
              <label for="name" className="form__label">
                E-mail:
              </label>
            </div>
            <div class="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="************"
                required=""
              />
              <label for="name" className="form__label">
                Password:
              </label>
            </div>
            <div className="button-container">
              <button className="button-create">Add User</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
