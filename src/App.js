import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import About from "./about";
import Footer from "./footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element = {<About/>}/>
          </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
