import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import "./blogs.scss";

const FeaturedBlog = ({ blog, reverse }) => {
  return (
    <motion.div
      className={`featuredBlog ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image */}

      <div className="imageSection">
        <img src={blog.image} alt={blog.title} />
      </div>

      {/* Content */}

      <div className="contentSection">

        <span className="category">
          {blog.category}
        </span>

        <h2>{blog.title}</h2>

        <p>{blog.description}</p>

        <div className="blogFooter">

          <div className="meta">

            <span>{blog.date}</span>

            <span>•</span>

            <span>{blog.readTime}</span>

          </div>

          <button>
            Read More
            <FaArrowRight />
          </button>

        </div>

      </div>

    </motion.div>
  );
};

export default FeaturedBlog;