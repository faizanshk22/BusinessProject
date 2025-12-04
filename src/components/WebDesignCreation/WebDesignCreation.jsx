import React from "react";
import "./WebDesignCreation.scss";

function WebDesignCreation() {
  return (
    <div className="webprocess">
      <h1>
        Our <span>Web Design</span> Process
      </h1>
      <p className="subtitle">
Leveraging our extensive experience in web design and development, we’ve honed a process that ensures every client is delighted with the final outcome.
      </p>

      <div className="timeline">

        {/* Step 1 */}
        <div className="container right">
          <div className="hex"></div>
          <div className="card">
            <h2>Discovery & Planning</h2>
            <p>
            The initial phase of our web design process is discovery and planning.
In this stage, we dive deep into understanding your company, goals, and target audience. We also begin outlining the structure and design of your website.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="container left">
          <div className="hex"></div>
          <div className="card">
            <h2>Design</h2>
            <p>
           Following the discovery and planning phase, we move on to designing your website.
We’ll create mockups for your homepage and inner pages, and collaborate with you to select a color scheme, fonts, and visuals that truly represent your brand.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="container right">
          <div className="hex"></div>
          <div className="card">
            <h2>Development</h2>
            <p>
             Once the design is approved, we begin development.
This stage transforms the design into a fully functional website, incorporating all the essential features your site needs.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="container left">
          <div className="hex"></div>
          <div className="card">
            <h2>Testing & Launch</h2>
            <p>
Once development is complete, we thoroughly test your website to ensure everything functions flawlessly. After launch, we assist in promoting your site to reach your target audience effectively.
            </p>
          </div>
        </div>

        {/* Step 5 */}
        <div className="container right">
          <div className="hex"></div>
          <div className="card">
            <h2>Maintenance & Support</h2>
            <p>
After your website goes live, we offer continuous maintenance and support, ensuring it remains up-to-date and assisting with any updates or changes you require.
            </p>
          </div>
        </div>

      </div>
          {/* New Section for Industries We Serve */}
      <div className="industries">
        <h2>Industries <span>We Serve</span></h2>
        <p className="description">
ONSETS specializes in developing and delivering comprehensive IT solutions for businesses of all sizes. Our team of experts brings years of experience in creating tailored technology solutions, ensuring seamless implementation and maximum impact. You can rely on us for customized, high-performance IT services designed to help your business achieve its goals.        </p>

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
