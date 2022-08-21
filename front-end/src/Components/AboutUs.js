import GitHubMark64 from "../assets/GitHubMark64.png"
import LILogo from "../assets/LILogo.png"
import './styles/about.css'

export default function AboutUs() {
  const year = new Date().getFullYear();
  return (
    <div className="aboutpage">
      <div>
        <h1 className="about-title">About the App.</h1>
        <article className="appbio">
          Welcome to our Snacks App. It enables you to look for healthy or unhealthy snacks your choice, but we are trying to promote a healthier option.
          As a user you should be locate a snack or add if the snack has not be added. 
          As well as deleleting or updating it if necessary. 
        </article>
      </div>
      <hr></hr>
      <br />

      <h2 className="aboutus">About Us</h2>
      
     
      <div>
        <div className="box">
          <h3 className="name">Meera Ramesh</h3>
         <div className="border">
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/46873861?v=4"
            alt="Meera"
          />
        
          </div>
          <br></br>
          <p className="bio" >
          I am a Software Engineer/Full Stack Developer 🚀 from NYC, proficient in Full Stack Web Development,and Data Visualization tools like Tableau and Power BI.

          I am passionate about learning and curiosity has been a part of me forever. My experiences in and outside of working with nonprofits in addition to design consulting, have given me the analytical skills and curiosity to bring in creative problem solving when learning and using code.</p>
          <div className="links">
            <a className="github" href="https://github.com/meera-ramesh19">
             <img align="center" src={GitHubMark64}></img>
            </a>
            <a className="github" href="https://www.linkedin.com/in/meeraramesh/" target="blank">
              <img
                align="center"
                src={LILogo}
                alt="meeraramesh"
                height="50"
                
              />
            </a>
          </div>
        </div>
       
        <br></br>

        <div>
        <div className="box" >
          <h3 className="name">Jossy Pascasio</h3>
          <div className="border">
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/96319104?v=4"
            alt="Josie"
          />
          </div>
          <p className="bio">
            I am a Full Stack Software Engineer in the NYC with a Bachelor/'s
            Degree and 6+ years professional experience in Business
            Administration. I am a naturally curious person which makes me want
            to always learn new things, a problem-solver who questions
            everything, and a hard worker who doesn't take life too seriously
            and enjoys the little small things in life like pizza.🍕
          </p>
          <div className="links">
            <img ></img>
            <a className="github" href="https://github.com/named-josie">
            <img align="center" src={GitHubMark64}></img>
            </a>
            <a className="github" href="https://www.linkedin.com/in/joss-pascasio/" target="blank">
              <img
                align="center"
                src={LILogo}
                alt="https://www.linkedin.com/in/joss-pascasio/"
                height="50"
               
              />
            </a>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}
