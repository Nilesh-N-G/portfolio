import React from 'react';
import profilepic from '../assets/images/profile-pic-nilesh.png';
import linkedinicon from '../assets/images/linkedin.png';
import githubicon from '../assets/images/github.png';
import resume from '../assets/resume/Resume.pdf';
function HeroSection() {
  return (
    <div>
      <section id="profile">
  <div className="section__pic-container">
    <img src={profilepic} alt="Nilesh Gurav" />
  </div>
  <div className="section__text">
    <p className="section__text__p1">Hello, I'm</p>
    <h1 className="title">Nilesh Gurav</h1>
    <p className="section__text__p2">Software Engineer</p>
    <div className="btn-container">
      <button
        className="btn btn-color-2"
        onClick={()=>{
          window.open(resume)
        }}
      >
        Download CV
      </button>
      <button className="btn btn-color-1" onClick={()=>{
        window.location.href='./#contact'
      }}>
        Contact Info
      </button>
    </div>
    <div id="socials-container">
      <img
        src={linkedinicon}
        alt="My LinkedIn profile"
        className="icon"
        target="_blank"
        onClick={() =>{
          window.open('https://www.linkedin.com/in/nilesh-gurav-17ab18vk/', '_blank')
        }}
      />
      <img
        src={githubicon}
        alt="My Github profile"
        className="icon"
        target="_blank"
        onClick={() =>{
          window.open('https://github.com/Nilesh-N-G/', '_blank')
        }
        }
      />
    </div>
  </div>
</section>

    </div>
  )
}

export default HeroSection
