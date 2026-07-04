import React from "react";
import "./video.scss";
import demoVideo from "../../assets/Software1.mp4";
const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
<h2 className="video-heading">
            A Dedicated Team
        </h2>
        <p>
          Our passionate team of designers, developers, and strategists at <strong>ONSETS</strong>, collaborates to transform ideas into high-quality digital solutions that drive real results.
        </p>
        <video
          className="video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;