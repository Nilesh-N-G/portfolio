import React from 'react';
import experienceicon from '../assets/images/experience.png';
import educationicon from '../assets/images/education.png';
import sidepic from '../assets/images/3286583.jpg';

function AboutMe() {
  return (
    <div>
      <main id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={sidepic} alt="Profile picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experienceicon} alt="Experience icon" className="icon" />
                <h3>Experience</h3>
                <p className="details">
                  Trainee Java Developer - Dlithe <br />
                  <span className="subdetails">April 2024 - Present</span>
                </p>
                <p className="details">
                  Data Science Intern - Pranaksh Technologies <br />
                  <span className="subdetails">Aug 2023 - Oct 2023</span>
                </p>
              </div>
              <div className="details-container">
                <img src={educationicon} alt="Education icon" className="icon" />
                <h3>Education</h3>
                <p className="details">
                  B.E Computer Science and Engineering
                  <br />
                  <span className="subdetails">
                    Visvesvaraya Technological University 2020-2024
                  </span>
                </p>
              </div>
            </div>
            <div className="text-container">
              I am a dedicated and driven Computer Science Engineering student with a
              passion for technology and innovation. I am eager to leverage the
              theoretical knowledge gained through coursework and hands-on projects to
              contribute effectively to real-world software development challenges. I
              have a strong foundation in various programming languages and
              frameworks, and I thrive in team environments. I am enthusiastic about
              continuous learning and staying abreast of emerging trends in the field.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutMe;
