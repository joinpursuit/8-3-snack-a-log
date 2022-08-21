import React from 'react'
import "./About.css"

const About = () => {
    return (
        <div>
            <h2>Snack-A-Log Project</h2>
          

            <br></br>
            <br></br>
            <h3>App Creators</h3>

            <h4>
                <img  className="taryne-photo"src="https://64.media.tumblr.com/32b21c6b5b2f237b80f6c8d2ad8f462d/tumblr_pqmoj1Lqun1qgusmco1_1280.jpg" alt=""></img>
                <br></br>
                <em>Taryne Leach Gonzalez</em>
            </h4>
            <p className="taryne-bio"> I am a full-stack web developer with a background in retail/ customer service from Brooklyn, NY. For this project I focused on the front-end functionality and design. Some of my favorite snacks are chocolate chip cookies and hagan dazs icecream. If you would like to connect with me, please check out my links below!</p>

            <a  className="links"href="https://github.com/TaryneLeach">Github</a>
            &nbsp;
            <a className="links"href="https://www.linkedin.com/in/taryne-leachgonzalez/">Linkedin</a>

            <br></br>
            <br></br>

            <h4>
                <img className="jonathan-photo"src="https://avatars.githubusercontent.com/u/794551?v=4" alt=""></img>
                <br></br>
                <em>Jonathan Scheiber</em>
                </h4>
                <p className="jonathan-bio">I am full-stack web developer with a background in IT and customer service from New York, NY. My interests include user experience (UX) design, cybersecurity, and accessibility. For this project I focused on the back-end functionality. My favorite snacks are Reese’s peanut butter cups, Funyuns, and Ben &Jerry’s Americone Dream. If you would like to connect with me, please check out my links below!
                </p>

                <a className="links"href="https://github.com/Scheiber">Github</a>
                &nbsp;
                <a  className="links"href="https://www.linkedin.com/in/jonscheiber/">Linkedin</a>
            
        </div>
    )
}

export default About;