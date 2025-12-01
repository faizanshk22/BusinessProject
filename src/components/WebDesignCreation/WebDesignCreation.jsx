import React from "react";
import "./WebDesignCreation.scss";

function WebDesignCreation() {
  return (
    <div className="webprocess">
      <h1>
        Our <span>Web Design</span> Process
      </h1>
      <p className="subtitle">
        With our years of experience in web design and development, we have 
        perfected our process to ensure that our clients are happy with the end result.
      </p>

      <div className="timeline">

        {/* Step 1 */}
        <div className="container right">
          <div className="hex"></div>
          <div className="card">
            <h2>Discovery & Planning</h2>
            <p>
              The first step in our web design process is discovery and planning.
              During this phase, we will learn more about your company, your goals,
              and your target audience. We will also start to plan out the structure
              and design of your website.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="container left">
          <div className="hex"></div>
          <div className="card">
            <h2>Design</h2>
            <p>
              After discovery and planning, we will start on the design of your website.
              We will create a mockup of your home page and inner pages. We will also
              work with you to choose a color scheme, fonts, and imagery that reflect
              your brand.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="container right">
          <div className="hex"></div>
          <div className="card">
            <h2>Development</h2>
            <p>
              Once the design is approved, we will start on development. This is where
              we will take the design and turn it into a functioning website. We will
              also add all essential features required for your website.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="container left">
          <div className="hex"></div>
          <div className="card">
            <h2>Testing & Launch</h2>
            <p>
              After development is complete, we will test your website to ensure
              everything is working properly. After launch, we help promote your
              website to your target audience.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="container right">
          <div className="hex"></div>
          <div className="card">
            <h2>Maintenance & Support</h2>
            <p>
              After your website is launched, we provide ongoing maintenance and support.
              We ensure your website stays up-to-date and help with any updates you need.
            </p>
          </div>
        </div>

      </div>
          {/* New Section for Industries We Serve */}
      <div className="industries">
        <h2>Industries <span>We Serve</span></h2>
        <p className="description">
          Digital Engage specializes in developing customized web designs for businesses operating on a local or national level. Our experts have years of experience developing unique website designs, allowing us to provide unmatched services for all kinds of businesses. You can rely on us for bespoke SEO Optimized websites that will help your business achieve its goals.
        </p>

        <div className="industry-list">
          <ul>
            <li>Medical Spa Website Development Services</li>
            <li>Painting Website Development Services</li>
            <li>Eye Doctor Website Development Services</li>
            <li>Movers Website Development Services</li>
            <li>Medical Supplies Website Development Services</li>
            <li>Barbershop Website Development Services</li>
            <li>Architecture Website Development Services</li>
            <li>Hair Salon Web Development Services</li>
            <li>Manufacturing Companies Web Development Services</li>
            <li>Restaurant Web Development Services</li>
            <li>Church Web Development Services</li>
            <li>Law Firm Web Development Services</li>
            <li>Remodeling Web Development Services</li>
            <li>All kind of Business Development Services</li>
            <li>Ecommerce Website Development Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WebDesignCreation;
