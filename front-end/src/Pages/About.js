import './About.css';
import React from 'react';
import profile from '../assets/profile.jpeg';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const About = () => {
  return (
    <div className='about'>
      <h1>Snacky Loggy is developed by</h1>
      <div className='about__icons'>
        <div className='isaac'>
          <img
            src='https://avatars.githubusercontent.com/u/90275620?v=4'
            alt='isaac'
          />
          <h3>Isaac G.</h3>
          <p className='bio'>
            Full Stack Developer. Passionate about being the best I can possibly
            be!
          </p>
          <div className='social'>
            <a
              href='https://github.com/0IG'
              target='_blank'
              rel='noreferrer noopenner'
              className='social-links'
            >
              <AiFillGithub size={30} />
            </a>

            <a
              href='https://www.linkedin.com/in/isaac-m-gonzalez/'
              target='_blank'
              rel='noreferrer noopenner'
              className='social-link'
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <div className='derek'>
          <img src={profile} alt='derek' />
          <h3>Derek P.</h3>
          <p className='bio'>
            Full Stack Web Developer | Creating a better world with amazing
            softwares.
          </p>
          <div className='social'>
            <a
              href='https://github.com/derekpeterson-plutus'
              target='_blank'
              rel='noreferrer noopenner'
              className='social-links'
            >
              <AiFillGithub size={30} />
            </a>

            <a
              href='https://linkedin.com/in/derekpeterson-plutus'
              target='_blank'
              rel='noreferrer noopenner'
              className='social-links'
            >
              <AiFillLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
