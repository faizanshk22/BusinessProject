import React from "react";
import "./Approach.scss";

function Approach() {
    return (
        <div className="approach">
            <h1 className="approachTitle">Our Approach</h1>
            <div className="container">
            <div className="curveLine"></div>

            <div className="steps">

                {/* STEP 1 */}
                <div className="step step1">
                    <div className="numberCircle">1</div>

                    <img
                        src="https://devdimensions.com/wp-content/uploads/2023/07/icon-1.svg"
                        alt="Bulb Icon"
                        className="iconImage"
                    />

                    <h3>Clarify Objectives</h3>
                    <p>
                        We’ll work together to grasp your requirements, set clear objectives, and plan a strategy that drives your success.
                    </p>
                </div>

                {/* STEP 2 */}
                <div className="step step2">
                    <div className="numberCircle">2</div>

                    <img
                        src="https://devdimensions.com/wp-content/uploads/2024/06/Group-39218.svg"
                        alt="Engineers Icon"
                        className="iconImage"
                    />

                    <h3>Meet Engineers</h3>
                    <p>
                       We save you time by quickly connecting you with the most compatible talent from our network of experts.
                    </p>
                </div>


                {/* STEP 3 */}
                <div className="step step3">
                    <div className="numberCircle">3</div>
                    <img
                        src="https://devdimensions.com/wp-content/uploads/2024/06/Group-39216.svg"
                        alt="meeting Icon"
                        className="iconImage"
                    />
                    <h3>7 Day Try Out</h3>
                    <p>
    Enjoy a 7-day trial before committing, as we believe that successful placements lay the foundation for long-term partnerships.
                    </p>
                </div>
                {/* STEP 4 */}
                <div className="step step4">
                    <div className="numberCircle">4</div>
                    <img
                        src="https://devdimensions.com/wp-content/uploads/2024/06/startup-1.svg
"
                        alt="meeting Icon"
                        className="iconImage"
                    />                    <h3>Build Your Dream Team</h3>
                    <p>
Welcome your selected standout into your dream team and forge a strong partnership designed for lasting success.
                    </p>
                </div>

            </div>
            </div>
            <div className="approach-img">
<img src='ONSETSLOGO2.png' alt='ONSETS LOGO' />
            </div>
        </div>
    );
}

export default Approach;
