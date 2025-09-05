import react from "react";
import "./index.css";
export default function footer()
{
    return(
        <div>
            <nav className="flex justify-between items-center px-8 py-4 bg-stone-800 text-white shadow-lg">
            <ul className="flex space-x-6">
                <li>Copyrights</li>
            </ul>
            </nav>
        </div>
    )
}