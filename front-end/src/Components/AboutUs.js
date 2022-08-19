import GitHubMark64 from "../assets/GitHubMark64.png"

export default function AboutUs() {
  const year = new Date().getFullYear();
  return (
    <div className="aboutpage">
      <div>
        <h1>About the App.</h1>
        <article>
          Welcome to our Snacks App. It Enables you to look for healthy or unhealthy snacks your choice, but we are trying to promote a healthier option.
          As a user you should be locate a snack or add if the snack has not be added. 
          As well as deleleting or updating it if necessary. 
        </article>
      </div>
      <hr></hr>
      <br />

      <h2>About Us</h2>
      <hr></hr>
      <div>
        <div>
          <h3>Meera Ramesh</h3>
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/46873861?v=4"
            alt="Meera"
          />
          <p>
          I am a Software Engineer/Full Stack Developer 🚀 from NYC, proficient in Full Stack Web Development,and Data Visualization tools like Tableau and Power BI.

          I am passionate about learning and curiosity has been a part of me forever. My experiences in and outside of working with nonprofits in addition to design consulting, have given me the analytical skills and curiosity to bring in creative problem solving when learning and using code.</p>
          <div className="links">
            <a className="github" href="https://github.com/meera-ramesh19">
             <img align="center" src={GitHubMark64}></img>
            </a>
            <a href="https://www.linkedin.com/in/meeraramesh/" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="meeraramesh"
                height="30"
                width="40"
              />
            </a>
          </div>
        </div>
        <hr></hr>
        <br></br>

        <div>
          <h3>Jossy Pascasio</h3>
          <img
            className="profile"
            src="https://avatars.githubusercontent.com/u/96319104?v=4"
            alt="Josie"
          />
          <p>
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
            <a href="https://www.linkedin.com/in/joss-pascasio/" target="blank">
              <img
                align="center"
                src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                alt="https://www.linkedin.com/in/joss-pascasio/"
                height="30"
                width="40"
              />
            </a>
          </div>
          <br></br>
          <hr></hr>
          <div className="year">{year}</div>
        </div>
      </div>
    </div>
  );
}
