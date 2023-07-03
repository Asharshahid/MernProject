import React from 'react'
import './about.css'

function About() {
  return (
    <div className="about-section">
        <div className="inner-width">
          <h1>About Us</h1>
          <div className="border"></div>
          <div className="about-section-row">
            <div className="about-section-col">
              <div className="about">
                <p>
                I'm <span className='myspan'>Ashar</span> , Web-developer with 2+ years of experience coding website. My goal is to serve
                myself as a professional web developer with a creative mindset. The mindset
                which observes issues and find an optimistic way to solve it. I know how to
                perform smart work
                </p>
              </div>
            </div>
            <div className="about-section-col">
              <div className="skills">
                <div className="skill">
                  <div className="title">Mern Stack | Full Stack Developer</div>
                  <div className="progress">
                    <div className="progress-bar p1"><span>70%</span></div>
                  </div>
                </div>
 
                <div className="skill">
                  <div className="title">Front-End Develpor</div>
                  <div className="progress">
                    <div className="progress-bar p2"><span>90%</span></div>
                  </div>
                </div>
 
                <div className="skill">
                  <div className="title">Node js | Javascript</div>
                  <div className="progress">
                    <div className="progress-bar p3"><span>40%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default About