import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { getRoleWithUser } from "../../services/role.service";
import { getOneUser } from "../../services/user.service";
import "./login.css";
import { message } from "antd";

function Login() {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const loginRef = useRef();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = loginRef.current.email.value;
    const password = loginRef.current.password.value;

    // Reset errors
    setErrors({ email: "", password: "", general: "" });

    // Validate email
    if (!email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      return;
    }

    // Validate password
    if (!password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password is required",
      }));
      return;
    }

    message.loading("Loading...", 0);

    login(email, password)
      .then(({ data: { token } }) => {
        const decodeToken = jwtDecode(token);

        getRoleWithUser(decodeToken.sub)
          .then((roleResponse) => {
            localStorage.setItem("role", roleResponse.data.assigned_roles.name);
          })
          .catch((roleError) => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              general: "Error retrieving user role",
            }));
          });

        getOneUser(decodeToken.sub)
          .then((userResponse) => {
            localStorage.setItem("user", JSON.stringify(userResponse.data));
          })
          .catch((userError) => {
            setErrors((prevErrors) => ({
              ...prevErrors,
              general: "Error retrieving user information",
            }));
          });

        localStorage.setItem("token", token);
        message.destroy();
        message.success("Login successful");
        navigate("/users");
      })
      .catch((loginError) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: "Invalid email or password",
        }));
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
            {errors.email && <p className="error-message">{errors.email}</p>}
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
            {errors.general && (
              <p className="error-message">{errors.general}</p>
            )}
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
