
import "./Css/Blog.css";
import BlogPicture from "../../assets/Quyen-B.jpg";
import BlogPost from "../BlogPost";

import MarqueeText2 from "../MarqueeText2";

const Blog = () => {
  return (
    <div className="blog-page-container">
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
    </div>
  );
};

export default Blog;
