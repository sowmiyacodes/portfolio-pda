import React from "react";
import "./project.css";
export default function project()
{
    return(
        <section class="projects-section">
  <h2 class="projects-heading"> PROJECTS</h2>

  <div class="projects-container">
    <div class="project-card">
      <h3>Personal Portfolio Website (HTML, CSS, JavaScript)</h3>
      <span class="project-duration">2024 - Present</span>
      <ul>
        <li>Created a personal website to showcase school and college experiences.</li>
        <li>Built static pages with a top navigation menu for structured access.</li>
        <li>Designed and embedded an alumni registration form.</li>
        <li>Currently integrating JavaScript for form validation and interactivity.</li>
      </ul>
    </div>

    <div class="project-card">
      <h3>School Management System (Python + Tkinter Treeview)</h3>
      <span class="project-duration">2023 - 2024</span>
      <ul>
        <li>Developed a basic school management system as part of Class 12 coursework.</li>
        <li>Implemented dynamic date input and output functionalities.</li>
        <li>Designed a user-friendly menu-driven interface.</li>
        <li>Used Treeview to manage and display student records in a tabular format.</li>
      </ul>
    </div>

    <div class="project-card">
      <h3>Admin Dashboard with Database Integration (PHP + MySQL)</h3>
      <span class="project-duration">2023 - 2024</span>
      <ul>
        <li>Created a user-interactive admin system for CRUD operations.</li>
        <li>Enabled real-time Create, Read, Update, Delete operations using PHP.</li>
        <li>Connected forms and buttons to a localhost MySQL database.</li>
        <li>Built dynamic update and delete features with immediate reflection in the menu table.</li>
        <li>Improved backend logic and database management skills.</li>
      </ul>
    </div>
  </div>
</section>

    )
}