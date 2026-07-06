import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./blogs.scss";
import { PopupButton } from "react-calendly";


const CTASection = () => {
  return (
    <motion.section
      className="ctaSection"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="ctaContent">

        <span className="smallTitle">
          READY TO START?
        </span>

        <h2>
          Let's Build Your
          <br />
          Next Big Product.
        </h2>

        <p>
          Whether you need dedicated engineers, a complete software
          development team, UI/UX design, AI integration, or an MVP,
          we're ready to turn your vision into reality.
        </p>

        <div className="ctaButtons">

          <Link to="/engineers">
            <button className="primaryBtn">
              Hire Engineers
              <FaArrowRight />
            </button>
          </Link>

        <PopupButton
  url="https://calendly.com/faizanshk20/30min"
  rootElement={document.getElementById("root")}
  className="secondaryBtn"
  text="Develop With Us  →"
/>

        </div>

      </div>
    </motion.section>
  );
};

export default CTASection;