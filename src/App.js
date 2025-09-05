import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import About from "./about";
import Project from "./project"
import Footer from "./footer";
import Skill from "./skill";
import Contact from "./contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route index element = {<About/>}/>
            <Route path = "/project" element= {<Project/>}/>
            <Route path = "/skill" element= {<Skill/>}/>
            <Route path = "/contact" element= {<Contact/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
