import "./App.css";
import Navbar from "./navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./welcome";
import Login from "./login";
import Register from "./register";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
