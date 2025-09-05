import React from "react";
import "./contact.css"
function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-text">
        Feel free to reach out for collaboration or inquiries.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          
          <a href="tel:760496666">760496666</a>
        </div>
        <div className="contact-item">
          
          <a href="mailto:sowmiya9b@gmail.com">sowmiya9b@gmail.com</a>
        </div>
        <div className="contact-item">
          
          <span>Yeswanth Nagar, Chennai</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
