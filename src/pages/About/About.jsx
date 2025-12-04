import React from "react";
import "./about.scss";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { PopupButton } from "react-calendly";


function About() {
  return (
    <div className="about-main">
      <Navbar />
      <section className="about" id="about">
        <div className="about__container">
          {/* RIGHT - Content */}
          <div className="about__right">
            <h1 className="about__title">Explore ONSETS:</h1>
            <h2 className="about__subtitle">Your Go-To Talent Partner</h2>

            <p className="about__text">
            At ONSETS, everything starts with people. From our talent and teams to our partners, we believe the true magic comes from unlocking human potential.
              <strong>
                {" "}
             To us, winning means building lasting relationships with our partners. We’re here for the long run—marathons, not just sprints.
              </strong>
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
                  <div
                    className="about__skill-fill"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>

              <div className="about__skill">
                <div className="about__skill-head">
                  <span className="head">Mobile Development (IOS/Android)</span>
                  <span className="about__skill-percent">96%</span>
                </div>
                <div className="about__skill-bar">
                  <div
                    className="about__skill-fill"
                    style={{ width: "96%" }}
                  />
                </div>
              </div>

              <div className="about__skill">
                <div className="about__skill-head">
                  <span className="head">Cloud Computing - CRM - SEO - Payment Integrations</span>
                  <span className="about__skill-percent">99%</span>
                </div>
                <div className="about__skill-bar">
                  <div
                    className="about__skill-fill"
                    style={{ width: "99%" }}
                  />
                </div>
              </div>
            </div>

            {/* <div className="about__actions">
              <a href="getStarted" className="btn btn--primary">
                Let's Connect
              </a>
            </div> */}
          </div>

          {/* IMAGE + ARROW SECTION */}
          <div className="last">
            <div className="about-last">
              <img
                src="https://devdimensions.com/wp-content/uploads/2023/07/about-get.png"
                alt="About Background"
                className="about-bg"
              />

              <Link to="/getstarted">
                <img
                  src="https://devdimensions.com/wp-content/themes/dev-dimention/assets/images/get-arrow.png"
                  alt="Arrow"
                  className="about-arrow"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="mission-vision-container">
          <div className="mission">
            <div className="icon-wrap">
              <svg
                className="mission-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2>Our Mission</h2>
            <p>
          Our mission is to empower talent by creating an environment where growth and innovation thrive. We’re committed to transforming this expertise into meaningful success stories for our clients.
            </p>
          </div>

          <div className="vision">
            <div className="icon-wrap">
              <svg
                className="vision-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M14 2V8H20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M10 12L14 16M14 12L10 16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h2>Our Vision</h2>
            <p>
              Our vision is a world where every company can access a dream team that accelerates success. We deliver a seamless way to source global talent, paving the way for long-term innovation.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="core-values-section">
          <h3>Our Core Values</h3>

          <div className="core-values-diagram">
            <div className="center-logo">
              <img src="ONSETSLOGO2.png" alt="Logo" />
            </div>

            <div className="value-point value-point-top">
              <div className="value-icon">
                <i className="fas fa-smile"></i>
              </div>
              <p>
                <strong>Joy & Entertainment</strong> <br /> as part of everything we do
              </p>
            </div>

            <div className="value-point value-point-left">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <p>
                Everyone is <br /> sharing equal <br />
                <strong>ownership</strong>
              </p>
            </div>

            <div className="value-point value-point-right">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <p>
                <strong>Integrity</strong> is <br /> our Guiding <br /> Principle
              </p>
            </div>

            <div className="value-point value-point-left-bottom">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <p>
                We act with<br />
                <strong>Consideration </strong> toward <br /> each other
              </p>
            </div>

            <div className="value-point value-point-right-bottom">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <p>
                We believe in <br />
                <strong>
                  succeeding <br /> together
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* ⭐️ NEW SECTION ADDED FROM IMAGE ⭐️ */}
        <div className="cta-section">
          <div className="cta-logo">
            {/* <img src="/mnt/data/div.png" alt="DevDimensions Logo" /> */}
          </div>

          <h1>Your move—step up and own it!</h1>

          <p className="cta-description">
            You’ve met the full roster behind <span>ONSETS</span> ——now let us in on your playbook. <span>Join us and let’s craft a winning strategy together.</span>
          </p>

          {/* <a href="getstarted" className="cta-btn">
            Let’s Dive In →
          </a> */}
            <PopupButton
          url="https://calendly.com/faizanshk20/30min"
          rootElement={document.getElementById("root")}
          text=" Let’s Dive In →"
          className="cta-btn"
        />
        </div>

      </section>
      <Footer />
    </div>
  );
}

export default About;
