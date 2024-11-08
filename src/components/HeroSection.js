import React from 'react';
import profilepic from '../assets/images/profile-pic-nilesh.png';
import linkedinicon from '../assets/images/linkedin.png';
import githubicon from '../assets/images/github.png';
import resume from '../assets/resume/Resume2.pdf';
function HeroSection() {
  const name = 'Nilesh Gurav';
  const designation = 'Software Engineer';
  const linkedinlink = 'https://www.linkedin.com/in/nilesh-gurav-17ab18vk/';
  const githublink = 'https://github.com/Nilesh-N-G/';
  return (
    <div>
      <section id="profile">
  <div className="section__pic-container">
    <img src={profilepic} alt="Nilesh Gurav" />
  </div>
  <div className="section__text">
    <p className="section__text__p1">Hello, I'm</p>
    <h1 className="title">{name}</h1>
    <p className="section__text__p2">{designation}</p>
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
          window.open(linkedinlink, '_blank')
        }}
      />
      <img
        src={githubicon}
        alt="My Github profile"
        className="icon"
        target="_blank"
        onClick={() =>{
          window.open(githublink, '_blank')
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
