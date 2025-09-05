import React from "react";
import "./skill.css";
export default function skill()
{
  return(
    <section class="skills-section">
  <h2 class="skills-heading">Skills</h2>
  <div class="skills-container">

    

     <div class="skill-card">
      <h3>Education </h3>
      <dl class="education-list">

    <dt>MIT, Chennai</dt>
    <dd>B.Tech Information Technology</dd>
    <dd>CGPA:9.93</dd>
    <dd>2024 - Present</dd>

    <dt>AMPS, Chennai</dt>
    <dd>Class 12</dd>
    <dd>Marks: 490/500</dd>
    <dd>2023 - 2024</dd>

  </dl>
    </div>
    <div class="skill-card">
      <h3>Frontend</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React.js</li>
      </ul>
    </div>

    <div class="skill-card">
      <h3>Backend</h3>
      <ul>
        <li>C Programming</li>
        
        <li>Database (MySQL)</li>
      </ul>
    </div>

    <div class="skill-card">
      <h3>Other Tools</h3>
      <ul>
        <li>Git & GitHub</li>
        
        <li>VS Code</li>
        
      </ul>
    </div>
     <div class="skill-card">
      <h3>Languages</h3>
      <ul>
        <li>Tamil</li>
        
        <li>English</li>
        
      </ul>
    </div>

     <div class="skill-card">
      <h3>Soft skills</h3>
      <ul>
         <li>Leadership</li>
    <li>Teamwork</li>
    <li>Time Management</li>
    <li>Critical Thinking</li>
    <li>Effective Communication</li>
        
      </ul>
    </div>

    
  </div>
</section>
  )
}