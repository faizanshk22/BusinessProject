import React from "react";
import "./Consultation.scss";
import { PopupButton } from "react-calendly";

function Consultation() {
  return (
    <div className="consultation">
      <div className="consultation__content">

        <h1 className="consultation__title">Start Your <span> Free Consultation </span></h1>

        <p className="consultation__subtitle">
The first progression toward achieving your goals is a friendly chat with our expert consultants.        </p>

        <p className="consultation__subtitle">
          Professional support is only a click away.
        </p>

        <PopupButton
          url="https://calendly.com/faizanshk20/30min"
          rootElement={document.getElementById("root")}
          text="Book Your Free Consultation"
          className="consultation__btn"
        />

      </div>
    </div>
  );
}

export default Consultation;
