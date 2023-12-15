import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { getRoleWithUser } from "../../services/role.service";
import { getOneUser } from "../../services/user.service";
import "./login.css";

function Login() {
  const [error, setError] = useState("");
  const loginRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = loginRef.current.email.value;
    const password = loginRef.current.password.value;

    login(email, password)
      .then(({ data: { token } }) => {
        const decodeToken = jwtDecode(token);

        getRoleWithUser(decodeToken.sub)
          .then((roleResponse) => {
            localStorage.setItem("role", roleResponse.data.assigned_roles.name);
          })
          .catch((roleError) => {
            setError("Error retrieving user role");
          });

        getOneUser(decodeToken.sub)
          .then((userResponse) => {
            localStorage.setItem("user", JSON.stringify(userResponse.data));
          })
          .catch((userError) => {
            setError("Error retrieving user information");
          });

        localStorage.setItem("token", token);
        navigate("/users");
      })
      .catch((loginError) => {
        setError("Invalid email or password");
      });
  };

  return (
    <div className="login-container">
      <div className="logo-container"></div>
      <div className="input-container">
        <div className="form-container">
          <p className="title">LOGIN</p>
          <form
            className="form"
            ref={loginRef}
            onSubmit={(e) => handleLogin(e)}
          >
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            {error && <p className="error-message">{error}</p>}
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
