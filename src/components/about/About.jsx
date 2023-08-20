import React from 'react'
import './about.css'
import AboutMe from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={AboutMe} alt="about me"/>
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>
            <article className="about-card">
              <FiUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>300+</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className='about-icon'/>
              <h5>Project</h5>
              <small>100+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione consectetur sapiente non? Adipisci voluptatum velit nihil dolore at minima, sed, sequi, harum delectus ipsum atque nulla aspernatur explicabo eum ab.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
