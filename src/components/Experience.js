import React from 'react'
import checkmark from '../assets/images/checkmark.png';
function Experience() {
  const skills = [
    { skillName: 'HTML', skillLevel: 'Experienced' },
    { skillName: 'CSS', skillLevel: 'Experienced' },
    { skillName: 'JavaScript', skillLevel: 'Experienced' },
    { skillName: 'Java', skillLevel: 'Intermediate' },
    { skillName: 'Python', skillLevel: 'Intermediate' },
    { skillName: 'C/C++', skillLevel: 'Intermediate' },
    { skillName: 'SQL', skillLevel: 'Intermediate' },
    { skillName: 'PHP', skillLevel: 'Intermediate' }
  ];

  const tools = [
    { skillName: 'ReactJS', skillLevel: 'Intermediate' },
    { skillName: 'Node JS', skillLevel: 'Intermediate' },
    { skillName: 'Express JS', skillLevel: 'Intermediate' },
    { skillName: 'Git', skillLevel: 'Intermediate' },
    { skillName: 'JQuery', skillLevel: 'Intermediate' },
    { skillName: 'Mongo DB', skillLevel: 'Intermediate' }
  ];


  return (
    <div>
      <section id="experience">
  <p className="section__text__p1">Explore My</p>
  <h1 className="title">Skills</h1>
  <div className="experience-details-container">
    <div className="about-containers">
      <div className="details-container">
        <h2 className="experience-sub-title">Technical Skills</h2>
        <div className="article-container">
        {skills.map((skill, index) => (
        <article key={index}>
          <img
            src={checkmark}
            alt="Experience icon"
            className="icon"
          />
          <div>
            <h3>{skill.skillName}</h3>
            <p>{skill.skillLevel}</p>
          </div>
        </article>
      ))}
        </div>
      </div>
      <div className="details-container">
        <h2 className="experience-sub-title">Tools/Frameworks</h2>
        <div className="article-container">
        {tools.map((skill, index) => (
        <article key={index}>
          <img
            src={checkmark}
            alt="Experience icon"
            className="icon"
          />
          <div>
            <h3>{skill.skillName}</h3>
            <p>{skill.skillLevel}</p>
          </div>
        </article>
      ))}
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Experience
