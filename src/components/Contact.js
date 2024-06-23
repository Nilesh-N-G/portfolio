import React from 'react'
import emailimg from '../assets/images/email.png';
import linkedinimg from '../assets/images/linkedin.png';

function Contact() {
  return (
    <div>
      <section id="contact">
  <p className="section__text__p1">Get in Touch</p>
  <h1 className="title">Contact Me</h1>
  <div className="contact-info-upper-container">
    <div className="contact-info-container">
      <img
        src={emailimg}
        alt="Email icon"
        className="icon contact-icon email-icon"
      />
      <p>
        <a href="mailto:nileshgurav1718@gmail.com">nileshgurav1718@gmail.com</a>
      </p>
    </div>
    <div className="contact-info-container">
      <img
        src={linkedinimg}
        alt="LinkedIn icon"
        className="icon contact-icon"
      />
      <p>
        <a
          href="https://www.linkedin.com/in/nilesh-gurav-17ab18vk/"
          rel="noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
      </p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact
