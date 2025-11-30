
import "./Css/Blog.css";
import BlogPicture from "../../assets/Quyen-B.jpg";
import BlogPost from "../BlogPost";

import MarqueeText2 from "../MarqueeText2";
import { motion } from "framer-motion";


const Blog = () => {
  
  return (
    <motion.div className="blog-page-container"
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="blog-page">
        <img
          src={BlogPicture}
          alt="blog-background-picture"
          className="Blog-picture"
        />
        <div>
           <h1 className="traveling-news">Latest Travelling News</h1>
          <h1 className="blog-title">Blog</h1>
        </div>
        <MarqueeText2 />
      </div>
      
     
      
      <div className="blog-post-main-page">
        <BlogPost />{" "}
      </div>
    </motion.div>
  );
};

export default Blog;
