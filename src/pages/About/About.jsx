import React from "react";
import "./about.scss";
import Navbar from "../../components/navbar/Navbar";
// import profileImg from "../assets/profile.jpg"; // <-- replace with your image path
import { Link } from "react-router-dom";
function About() {
  return (
    <>
    <Navbar/>
    <section className="about" id="about">
      <div className="about__container">

        {/* LEFT - Image / visual */}
        {/* <div className="about__left"> */}
          {/* <div className="about__img-wrap">
            <img src={profileImg} alt="Profile" className="about__img" />
            <div className="about__img-accent" />
          </div> */}
        {/* </div> */}

        {/* RIGHT - Content */}
        <div className="about__right">
          <h1 className="about__title">Discover ONSETS:</h1>
          <h2 className="about__subtitle">Your Premier Talent Partner</h2>

          <p className="about__text">
      At ONSETS, we’re all about the people. From our talent, teams, to partners: We believe the real magic lies in harnessing human potential. 
            <strong> Winning, to us, means creating lasting relationships with our partners. We want to run marathons with you, not just the sprints</strong>
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <div className="about__stat-number">10+</div>
              <div className="about__stat-label">Years Experience</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">520+</div>
              <div className="about__stat-label">Projects</div>
            </div>
            <div className="about__stat">
              <div className="about__stat-number">Countless</div>
              <div className="about__stat-label">Techs / Tools</div>
            </div>
          </div>

          <div className="about__skills">
            <div className="about__skill">
              <div className="about__skill-head">
                <span className="head">Web Development</span>
                <span className="about__skill-percent">99%</span>
              </div>
              <div className="about__skill-bar">
                <div className="about__skill-fill" style={{ width: "99%" }} />
              </div>
            </div>

            <div className="about__skill">
              <div className="about__skill-head">
                <span className="head">Mobile Development (IOS/Android)</span>
                <span className="about__skill-percent">96%</span>
              </div>
              <div className="about__skill-bar">
                <div className="about__skill-fill" style={{ width: "96%" }} />
              </div>
            </div>

            <div className="about__skill">
              <div className="about__skill-head">
                <span className="head">CRM - SEO - Payment Integrations</span>
                <span className="about__skill-percent">95%</span>
              </div>
              <div className="about__skill-bar">
                <div className="about__skill-fill" style={{ width: "95%" }} />
              </div>
            </div>
          </div>

          <div className="about__actions">
            <a href="getStarted" className="btn btn--primary">Let's Connect</a>
            {/* <a href="/portfolio" className="btn btn--ghost">See Portfolio</a> */}
          </div>
        </div>
        <div className="last">
        <div className="about-last">
             <img 
        src="https://devdimensions.com/wp-content/uploads/2023/07/about-get.png" 
        alt="About Background" 
        className="about-bg"
      />

     <Link to="/getstarted"> <img
        src="https://devdimensions.com/wp-content/themes/dev-dimention/assets/images/get-arrow.png"
        alt="Arrow"
        className="about-arrow"
      /></Link>
        </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
