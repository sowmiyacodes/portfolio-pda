import React from "react";
import {Link} from "react-router-dom";
import "./index.css";
export default function navbar()
{
    return(
        <div>
           <nav className="flex justify-between items-center px-8 py-4 bg-stone-800 text-white shadow-lg">
            <h1 className="text-xl font-bold">Sowmiya</h1>
            <ul className="flex space-x-6">
                    <li><Link to="/" className="hover:text-yellow-400">About</Link></li>
                    <li><Link to="/project" className="hover:text-yellow-400">projects</Link></li>
                    <li><Link to="/skill" className="hover:text-yellow-400">Skills</Link></li>
                    <li><Link to="/contacts" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
            </nav>
        </div>
    );




}