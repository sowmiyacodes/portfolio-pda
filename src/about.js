import react from "react";
import profilepic from "./assest/profile.jpg";
export default function about()
{
    return(
       <section classname = "about-section "> 
        <div className="about-content">
             <div className="about-image">
                <img src={profilepic} alt="Sowmiya Profile" />
             </div>
        <h2 className="about-heading">About Me</h2>
       <p className="about-text">
          Motivated <b>IT undergraduate</b> skilled in programming with 
          <b> C</b> and <b>Python</b>, along with  knowledge of 
          <b> frontend basics (HTML, CSS, JavaScript)</b>.  
        </p>
        <p className="about-text">
          I have a good understanding of <b>web development principles </b> 
          and I am eager to build real-world applications. My academic and 
          personal projects reflect my interest in creating user-friendly, 
          efficient, and scalable solutions.  
        </p>
        <p className="about-text">
          Actively interested in <b>Data Structures and Algorithms (DSA)</b>, 
          I continuously practice problem-solving to strengthen my logical 
          and analytical skills.  
        </p>
        <p className="about-text">
          I am seeking opportunities to learn, contribute, and grow in a 
          <b> software development environment</b>.
        </p>
      </div>
      </section>
    )
}