import { useEffect, useRef, useState } from "react";
import Sidenav from "../../components/sidenav/sidenav";
import "./users.css";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import {
  getAllUsers,
  deleteUser,
  updateUser,
} from "../../services/user.service";
import { register } from "../../services/auth";
import { Button, Popover, Select } from "antd";
import { assignRoleToUser, getAllRoles } from "../../services/role.service";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const [passwordV, setPasswordV] = useState(true);
  const [userToUpdate, setUserToUpdate] = useState();
  const [userId, setUserId] = useState();
  const [selectedRole, setSelectedRole] = useState();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    setUsers(allUsers);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id).then((response) => {
      getUsers();
    });
  };

  const handleCreateUser = () => {
    register(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    ).then((response) => {
      getUsers();
      nameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    });
  };

  const handlePutUser = (user) => {
    setPasswordV(false);
    nameRef.current.value = user.name;
    emailRef.current.value = user.email;

    setUserToUpdate(user.id);
  };

  const handleSaveUser = () => {
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      id: userToUpdate,
    };

    updateUser(user).then((response) => {
      getUsers();
      handleCleanForm();
    });
  };

  const handleCleanForm = () => {
    setPasswordV(true);
    nameRef.current.value = "";
    emailRef.current.value = "";
    setUserToUpdate();
  };

  useEffect(() => {
    getUsers();
    getRoles();
  }, []);

  const handleChange = (value) => {
    setSelectedRole(value);
  };

  const [roles, setRoles] = useState([]);

  const getRoles = async () => {
    const allRoles = await getAllRoles();
    setRoles(allRoles);
  };

  const assignUser = () => {
    assignRoleToUser(userId, selectedRole);
  }

  const setOptions = () => {
    let options = [];
    roles.forEach((role) => {
      options.push({
        label: role.name,
        value: role.id,
      });
    });
    return options;
  };

  const content = (
    <div>
      <Select
        style={{
          width: 120,
        }}
        onChange={handleChange}
        options={setOptions()}
      />
      <Button onClick={() => assignUser()}>OK</Button>
    </div>
  );

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
            <div className="profile-settings"><Link to="/profile">Profile</Link> </div>
            <div className="profile-arrow">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className="users-crud-container">
          <div className="users-list">
            <h2>Users</h2>
            {users ? (
              <table class="users-table">
                <tbody>
                  {users.map((user) => (
                    <tr class="user-row">
                      <td class="user-data">
                        {/* <div class="user-img"></div> */}

                        <div class="user-name-role">
                          <div class="user-name-list">{user.name}</div>
                          {/* <div class="user-role-list">Admin</div> */}
                        </div>
                      </td>
                      <td class="edit-user">
                        <button
                          class="button-edit"
                          onClick={() => handlePutUser(user)}
                        >
                          edit
                        </button>
                      </td>
                      <td class="delete-user">
                        <button
                          class="button-delete"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          delete
                        </button>
                      </td>
                      <td>
                        <Popover
                          content={content}
                          title="Roles"
                          trigger="click"
                        >
                          <Button onClick={() => setUserId(user.id)}>Set Role</Button>
                        </Popover>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              ""
            )}
          </div>
          <div className="users-create">
            <h2>Create User</h2>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="David Pérez"
                required=""
                ref={nameRef}
              />
              <label htmlFor="name" className="form__label">
                Name:
              </label>
            </div>
            <div className="form__group field">
              <input
                type="input"
                className="form__field"
                placeholder="davidperez@gmail.com"
                required=""
                ref={emailRef}
              />
              <label htmlFor="name" className="form__label">
                E-mail:
              </label>
            </div>
            {passwordV && (
              <div className="form__group field">
                <input
                  type="password"
                  className="form__field"
                  placeholder="************"
                  required=""
                  ref={passwordRef}
                />
                <label htmlFor="name" className="form__label">
                  Password:
                </label>
              </div>
            )}
            <div className="button-container">
              {passwordV ? (
                <button className="button-create" onClick={handleCreateUser}>
                  Add User
                </button>
              ) : (
                <div>
                  <button className="button-create" onClick={handleSaveUser}>
                    Update User
                  </button>
                  <button className="button-create" onClick={handleCleanForm}>
                    Cancel Update
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
