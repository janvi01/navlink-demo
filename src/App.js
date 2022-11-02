import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavLink
          to="home"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "blue" : "black",
          })}
          className="navitem"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "blue" : "black",
          })}
          className="navitem"
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          style={({ isActive }) => ({
            backgroundColor: isActive ? "blue" : "black",
          })}
          className="navitem"
        >
          Contact
        </NavLink>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
