import { useRef, useState } from 'react';
import './GetStarted.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";
import Map from '../Map/Map';
import Navbar from '../navbar/Navbar';
import { PopupButton } from "react-calendly";
import Footer from "../../components/Footer/Footer";



const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function GetStarted() {

  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d8z7w8c',
        'template_w56gpso',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <div className='contactDiv'>
      <div className='nv'><Navbar/></div>
      {/* ✅ Close Button
      <Link to="/" className="closeIcon">
        ✕
      </Link> */}

      <div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="textContainer" variants={variants}>
          <h1 variants={variants}>Let's Talk!</h1>

          <div className="item" variants={variants}>
            <img width="30" height="30" src="email.png" alt="Email" />
            <p>hello-hr.onsets@outlook.com</p>
          </div>

          <div className="item" variants={variants}>
            <img width="30" height="30"
              src="https://img.icons8.com/?size=100&id=bqSGWblWbynM&format=png&color=000000"
              alt="Location"
              className='item2'
            />
            <span>27-B Haseeb Block, Azam Garden, Multan Road, Lahore, 54000</span>
          </div>

          <div className="item" variants={variants}>
            <img width="30" height="30"
              src="https://img.icons8.com/?size=100&id=44034&format=png&color=000000"
              alt="Phone"
            />
            <p>+92 321 5547204</p>
          </div>
          <div>
             <PopupButton
          url="https://calendly.com/faizanshk20/30min"
          rootElement={document.getElementById("root")}
          text="Book Your Free Consultation"
          className="consultation__btn"
        />

          </div>
        </div>

        <div className="formContainer">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </form>
        </div>
       
      </div>
       <div className='map'>
        <Map />
        </div>
        <Footer />
    </div>
  );
}

export default GetStarted;
