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
         
          <Routes>
            <Route path="/" element = {<Navbar/>}/>
            <Route path="/portfolio-pda/about" element = {<About/>}/>
            <Route path = "/portfolio-pda/project" element= {<Project/>}/>
            <Route path = "/portfolio-pda/skill" element= {<Skill/>}/>
            <Route path = "/portfolio-pda/contact" element= {<Contact/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
