import React from "react";
import "./Skill.scss";

function Skill() {
  return (
    <div className="skill">
        <div className='skillImage'>
        <img src='/landing2.jpg' />

        </div>
      <div className="skill__header">
        <p className="skill__subtitle">PRICING PLAN</p>
        <h1 className="skill__title">
          Choose Our Flexible Pricing Plan <br /> For Customizing Software
        </h1>
      </div>

      <div className="skill__cards">

        {/* BASIC REMOTE TEAM */}
        <div className="skillCard">
          <h2 className="skillCard__title">Basic Remote Team</h2>
          <p className="skillCard__desc">
            A budget friendly plan to develop and maintain your website, software and app.
          </p>

          <div className="skillCard__priceBox">
            <span className="currency">$</span>
            <span className="price">3500</span>
            <span className="month">/Month</span>
          </div>

          <ul className="skillCard__list">
            <li>✔ 1 Dedicated Engineer (full time), 2–3 years of experience</li>
            <li>✔ QA Engineer (part time), Est. 20 hrs/month</li>
            <li>✔ Project Supervisor, 20 hrs/month</li>
          </ul>

          <button className="skillCard__btn">GET STARTED →</button>
        </div>

        {/* ELITE REMOTE TEAM */}
        <div className="skillCard skillCard--active">
          <h2 className="skillCard__title">Elite Remote Team</h2>
          <p className="skillCard__desc">
            A budget friendly plan to develop and maintain your website, software and app.
          </p>

          <div className="skillCard__priceBox">
            <span className="currency">$</span>
            <span className="price">8000</span>
            <span className="month">/Month</span>
          </div>

          <ul className="skillCard__list">
            <li>✔ 2 Dedicated Engineers (full time), 2–3 years of experience</li>
            <li>✔ QA Engineer (part time), Est. 20 hrs/month</li>
            <li>✔ UI/UX Engineer (part time), Est. 40 hrs/month</li>
          </ul>

          <button className="skillCard__btn">GET STARTED →</button>
        </div>

        {/* ENTERPRISE REMOTE TEAM */}
        <div className="skillCard">
          <h2 className="skillCard__title">Enterprise Remote Team</h2>
          <p className="skillCard__desc">
            A budget friendly plan to develop and maintain your website, software and app.
          </p>

          <div className="skillCard__priceBox">
            <span className="currency">$</span>
            <span className="price">13000</span>
            <span className="month">/Month</span>
          </div>

          <ul className="skillCard__list">
            <li>✔ 2 Dedicated Engineers (full time), 2–3 years of experience</li>
            <li>✔ 1 Dedicated Engineer (full time), 5 years of experience</li>
            <li>✔ QA Engineer (part time), Est. 80 hrs/month</li>
          </ul>

          <button className="skillCard__btn">GET STARTED →</button>
        </div>

      </div>
    </div>
  );
}

export default Skill;

