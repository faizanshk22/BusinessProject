import React from 'react';
import "./PackageModel.scss";

// Component for an individual service item (Icon, Title, Description)
const ServiceItem = ({ icon, title, description }) => (
  <div className="serviceItem">
    <div className="serviceItem__icon">{icon}</div>
    <h3 className="serviceItem__title">{title}</h3>
    <p className="serviceItem__description">{description}</p>
  </div>
);

function PackageModel() {
  return (
    <div className="packageModel">

      {/* Heading */}
      <h1 className="packageModel__title">Customized <span>Partnership Models </span></h1>
      <p className="packageModel__subtitle">
Opt for Tailored Solutions to Elevate Your Product Journey
      </p>

      <div className="packageModel__cards">

        {/* Card 1 */}
        <div className="packageModel__card leftCard">
          <h2 className="card__title">Partnership for the Ideation Stage</h2>

          <p className="card__description">
This engagement model is designed for founders in the ideation stage who want to jumpstart their product development journey.
            <br /><br />
We work hand-in-hand with you to turn your vision into a concrete product, using our expertise to guide you throughout the entire process.
          </p>

          <h3 className="card__subheading">Opt for this model to gain:
</h3>

          <div className="card__items">

            <div className="card__item">
              <h4 className="item__title">Idea Exploration</h4>
              <p className="item__text">
Collaborate to shape and refine your product concept, ensuring it aligns with market demands.              </p>
            </div>

            <div className="card__item">
              <h4 className="item__title">Get a Project Estimate</h4>
              <p className="item__text">
Obtain a transparent estimate of costs and project timelines.              </p>
            </div>

            <div className="card__item">
              <h4 className="item__title">Kickstart Development</h4>
              <p className="item__text">
Begin the development process with confidence.              </p>
            </div>

          </div>
        </div>

        {/* Card 2 */}
        <div className="packageModel__card rightCard">
          <h2 className="card__title">Feature Expansion Accelerator (Post MVP)</h2>

          <p className="card__description">
            This engagement model is ideal for founders who already have an MVP and
            want to take it to the next level.
            <br /><br />
            With this model, we work closely with the founders to identify, 
            prioritize, and develop new features that align with your business objectives.
          </p>

          <h3 className="card__subheading">Choose this model to get:</h3>

          <div className="card__items">

            <div className="card__item">
              <h4 className="item__title">Feature Expansion Strategy</h4>
              <p className="item__text">
                Identify and prioritize impactful growth opportunities.
              </p>
            </div>

            <div className="card__item">
              <h4 className="item__title">Assemble Professionals</h4>
              <p className="item__text">
                We'll curate a dedicated team tailored to your needs.
              </p>
            </div>

            <div className="card__item">
              <h4 className="item__title">User-Centric Enhancements</h4>
              <p className="item__text">
                Reliably iterate based on product engagement and customer feedback.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* --------------------- Start of Services Section Code --------------------- */}
      <div className="servicesSection">
        <p className="servicesSection__miniTitle">WHAT WE DO</p>
        <h2 className="servicesSection__mainTitle">Discover Our <span>Best Service </span> <br /> Provided From <span>Expert</span></h2>
        
        <div className="servicesSection__items">
          
          <ServiceItem
            icon={<img src="https://img.icons8.com/color/48/000000/html-5--v1.png" alt="Web Development Icon" />}
            title="Web Development"
            description="Precision-crafted, responsive custom websites."
          />
          
          <ServiceItem
            icon={<img src="https://img.icons8.com/?size=100&id=usI2qCoJsJmU&format=png&color=000000" alt="App Development Icon" />}
            title="App Development"
            description="Custom, high-performance apps designed for every platform."
          />
          
          <ServiceItem
            icon={<img src="https://img.icons8.com/fluency/48/000000/chatbot.png" alt="AI/ML/ChatGPT Icon" />}
            title="AI/ML/ChatGPT"
            description="Delivering AI, ML, and ChatGPT solutions for business automation and data-driven insights."
          />
          
          <ServiceItem
            icon={<img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" alt="Cloud Services Icon" />}
            title="Cloud Services"
            description="Providing cloud services for scalable, secure, and efficient business solutions."
          />
        </div>
      </div>
      {/* --------------------- End of Services Section Code --------------------- */}

    </div>
  )
}

export default PackageModel