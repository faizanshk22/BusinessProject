import './hero.scss';
import { motion } from 'framer-motion';
import resume from '../../assets/FaizanCV.pdf';
import { Link } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat: Infinity, 
    }
  }
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-180%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

function Hero() {
  return (
    <div className='hero'>
      <div className='landingImage'>      <img src='/landing2.jpg' />
</div>
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>
           CUSTOM SOFTWARE DEVELOPMENT
          </motion.h2>
          <motion.h3 variants={textVariants}>Expertise in Creating Software That Fits Your Needs</motion.h3>
          <motion.p className='p1'>Specializing in bespoke software solutions, we ensure that every product we create </motion.p>
                    <motion.p className='p2'> is tailored to your business requirements, delivering seamless integration and maximum performance</motion.p>

          <motion.div variants={textVariants} className="buttons">
            <a href={resume} download="resume">
              {/* <motion.button variants={textVariants}>
                Download Resume
              </motion.button> */}
            </a>
            {/* <a href="/about" target="_blank" rel="noopener noreferrer">
              <motion.button variants={textVariants}>
                About Me
              </motion.button>
            </a> */}
            {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
          </motion.div>
          <motion.img variants={textVariants} animate='scrollButton' src="/scroll.png" alt="" />
        </motion.div>
        <div className="btn">
  <Link to="/getstarted">GET STARTED</Link>
</div>
      </div>
      <motion.div className="slidingTexContainer" variants={sliderVariants} initial="initial" animate="animate">
      BEST IT SOLUTIONS
      </motion.div>
      <div className="imageContainer">
        <img src="/hero1.png" alt="" />
      </div>
    </div>
  );
}

export default Hero;
