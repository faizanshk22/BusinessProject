import { motion } from "framer-motion";
import "./blogs.scss";

import { blogs } from "./blogData";
import FeaturedBlog from "./FeaturedBlog";
import CTASection from "./CTASection";
import Navbar from "../navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Blogs = () => {
  return (
    <>
    <Navbar className="nv"/>
    <div className="mainBlogDiv">
    <section className="blogs">

      {/* Decorative Circles */}

      <div className="circle one"></div>
      <div className="circle two"></div>

      {/* Hero */}

      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <span className="heroTag">
         <strong>ONSETS BLOG</strong> 
        </span>

        <h1>
          Insights That Help
          <span> Build Better Software.</span>
        </h1>

        <p>
          Practical guides, engineering stories,
          AI trends, startup experiences,
          development best practices and modern
          software architecture from our team.
        </p>

      </motion.div>

      {/* Blog Cards */}

      <div className="blogContainer">

        {blogs.map((blog, index) => (

          <FeaturedBlog
            key={blog.id}
            blog={blog}
            reverse={index % 2 === 1}
          />

        ))}

      </div>

      {/* CTA */}

      <CTASection />

    </section>
    </div>
    <Footer />
    </>
  );
};

export default Blogs;