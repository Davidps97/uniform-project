import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Roles from "./pages/roles/roles";
import Profile from "./pages/profile/profile";
import Users from "./pages/users/users";
import Login from "./pages/login/login";
import PrivateRoute from "./components/private-routes/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/roles" element={<Roles />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
