import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidenav from "./components/sidenav/sidenav";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sidenav" element={<Sidenav />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
