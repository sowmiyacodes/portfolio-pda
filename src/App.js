import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>
      </Router>
      
    </div>
  );
}

export default App;
