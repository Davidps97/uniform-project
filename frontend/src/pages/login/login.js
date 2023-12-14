import "./login.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { login } from "../../services/auth";
import { jwtDecode } from "jwt-decode";
import { getAllRoles, getRoleWithUser } from "../../services/role.service";

function Login() {
  const loginRef = useRef() 
  const navigate = useNavigate();
    const handleLogin = (e) => {
    e.preventDefault();
    const email = loginRef.current.email.value;
    const password = loginRef.current.password.value;
    console.log(email, password);

    login(email, password).then(response => {
      const decodeToken = jwtDecode(response.data.token);
      console.log(decodeToken);
      getRoleWithUser(decodeToken.sub).then(response => {
        localStorage.setItem("role", response.data.assigned_roles.name);
        console.log(response.data.assigned_roles.name);
      }) 
      localStorage.setItem("token", response.data.token);
      navigate("/users");
    })
  }

  return (
    <div className="login-container">
      <div className="logo-container"></div>
      <div className="input-container">
        <div className="form-container">
          <p className="title">LOGIN</p>
          <form className="form" ref={loginRef} onSubmit={(e) => handleLogin(e)}>
            <input name="email" type="email" class="input" placeholder="Email" />
            <input name="password" type="password" class="input" placeholder="Password" />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <button className="form-btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
