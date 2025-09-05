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
                    <li><Link to="/portfolio-pda/about" className="hover:text-yellow-400">About</Link></li>
                    <li><Link to="/portfolio-pda/project" className="hover:text-yellow-400">Projects</Link></li>
                    <li><Link to="/portfolio-pda/skill" className="hover:text-yellow-400">Skills</Link></li>
                    <li><Link to="/portfolio-pda/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
            </nav>
        </div>
    );




}