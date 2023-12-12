import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="logo-container"></div>
      <div className="input-container">
        <div className="form-container">
          <p className="title">LOGIN</p>
          <form className="form">
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
            <p className="page-link">
              <span className="page-link-label">Forgot Password?</span>
            </p>
            <Link to="/home" className="form-btn">
              LOG IN
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
